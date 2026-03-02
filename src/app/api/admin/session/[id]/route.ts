import { checkAuth, supabase } from '@/utils/supabase';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

//取得
export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { isAuthorized, response, user } = await checkAuth(request);
  if (!isAuthorized) return response;

  try {
    const { id } = params;

    const session = await prisma.session.findUnique({
      where: {
        id: parseInt(id),
        profile: {
          supabaseUserId: user.id
        }
      }
    });

    if (!session) {
      return NextResponse.json({ status: 'セッションが見つかりません' }, { status: 404 });
    }

    return NextResponse.json({ status: 'OK', session }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: error.message }, { status: 400 });
    }

    return NextResponse.json({ status: '不明なエラー' }, { status: 400 });
  }
};

//更新
export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { isAuthorized, response, user } = await checkAuth(request);
  if (!isAuthorized) return response;

  try {
    const { id } = params;
    const sessionId = parseInt(id);

    const body = await request.json();
    const {
      spotId,
      date,
      surfTimeMinutes,
      rideCount,
      thumbnailImageKey,
      imageRemoved,
      challengeNote,
      ratings
    } = body;

    const existing = await prisma.session.findUnique({
      where: {
        id: sessionId,
        profile: {
          supabaseUserId: user.id
        }
      },
      select: { thumbnailImageUrl: true }
    });

    if (!existing) {
      return NextResponse.json({ status: 'セッションが見つかりません' }, { status: 404 });
    }

    // 新しい画像がアップロードされた or 既存画像が削除された場合、旧画像をStorageから削除
    if ((thumbnailImageKey || imageRemoved) && existing.thumbnailImageUrl) {
      const oldPath = new URL(existing.thumbnailImageUrl).pathname.split('/session_thumbnail/')[1];
      if (oldPath) {
        await supabase.storage.from('session_thumbnail').remove([decodeURIComponent(oldPath)]);
      }
    }

    const thumbnailImageUrl = thumbnailImageKey
      ? supabase.storage.from('session_thumbnail').getPublicUrl(thumbnailImageKey).data.publicUrl
      : imageRemoved
        ? null
        : existing.thumbnailImageUrl;

    const session = await prisma.session.update({
      where: {
        id: sessionId,
        profile: {
          supabaseUserId: user.id
        }
      },
      data: {
        spotId,
        date: new Date(`${date}T00:00:00Z`),
        surfTimeMinutes,
        rideCount,
        thumbnailImageUrl,
        challengeNote: challengeNote ?? null,
        ratings: ratings ? [`overall:${ratings}`] : []
      }
    });
    return NextResponse.json({ status: 'OK', session }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: error.message }, { status: 400 });
    }
    return NextResponse.json({ status: '不明なエラー' }, { status: 400 });
  }
};

//削除
export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { isAuthorized, response, user } = await checkAuth(request);
  if (!isAuthorized) return response;

  try {
    const { id } = params;
    const existing = await prisma.session.findUnique({
      where: { id: parseInt(id), profile: { supabaseUserId: user.id } },
      select: { thumbnailImageUrl: true }
    });

    // Storage から画像を削除
    if (existing?.thumbnailImageUrl) {
      const path = new URL(existing.thumbnailImageUrl).pathname.split('/session_thumbnail/')[1];
      if (path) {
        await supabase.storage.from('session_thumbnail').remove([decodeURIComponent(path)]);
      }
    }
    await prisma.session.delete({
      where: {
        id: parseInt(id),
        profile: {
          supabaseUserId: user.id
        }
      }
    });
    return NextResponse.json({ status: 'OK' }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: error.message }, { status: 400 });
    }
    return NextResponse.json({ status: '不明なエラー' }, { status: 400 });
  }
};

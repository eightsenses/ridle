import { checkAuth, supabase } from '@/utils/supabase';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { isAuthorized, response, user } = await checkAuth(request);
  if (!isAuthorized) return response;
  try {
    const session = await prisma.session.findMany({
      include: { spot: { select: { name: true } } },
      where: {
        profile: {
          supabaseUserId: user.id
        }
      },
      orderBy: [
        {
          date: 'desc'
        },
        {
          createdAt: 'desc'
        }
      ]
    });
    return NextResponse.json({ status: 'OK', sessions: session }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: error.message }, { status: 400 });
    }
    return NextResponse.json({ status: '不明なエラー' }, { status: 400 });
  }
};

export const POST = async (request: NextRequest) => {
  const { isAuthorized, response, user } = await checkAuth(request);
  if (!isAuthorized) return response;
  try {
    const body = await request.json();
    const { spotId, date, surfTimeMinutes, rideCount, challengeNote, ratings, thumbnailImageKey } =
      body;
    const profile = await prisma.profile.findUnique({
      where: { supabaseUserId: user.id }
    });

    const thumbnailImageUrl = thumbnailImageKey
      ? supabase.storage.from('session_thumbnail').getPublicUrl(thumbnailImageKey).data.publicUrl
      : null;

    if (!profile) {
      return NextResponse.json({ status: 'プロフィールが見つかりません' }, { status: 404 });
    }

    const session = await prisma.session.create({
      data: {
        profileId: profile.id,
        spotId,
        date: new Date(`${date}T00:00:00Z`),
        surfTimeMinutes,
        rideCount,
        challengeNote: challengeNote ?? null,
        ratings: ratings ? [`overall:${ratings}`] : [],
        thumbnailImageUrl
      }
    });
    return NextResponse.json({ status: 'OK', session }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: error.message }, { status: 400 });
    }
    return NextResponse.json({ status: '不明なエラー' }, { status: 400 });
  }
};

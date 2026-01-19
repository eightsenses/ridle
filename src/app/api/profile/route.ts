import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { supabase } from '@/utils/supabase';
const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  const authHeader = request.headers.get('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ error: 'トークンが見つかりません' }, { status: 401 });
  }

  const {
    data: { user },
    error
  } = await supabase.auth.getUser(token);

  if (error || !user) {
    return NextResponse.json({ error: '認証されていません' }, { status: 401 });
  }

  const userMetadata = user.user_metadata;
  const userName = (userMetadata?.userName as string | undefined)?.trim();

  if (!userName) {
    return NextResponse.json({ error: 'userNameが存在しません' }, { status: 400 });
  }

  await prisma.profile.upsert({
    where: { supabaseUserId: user.id },
    create: {
      supabaseUserId: user.id,
      userName
    },
    update: {}
  });

  return NextResponse.json({ status: 'OK' }, { status: 200 });
};

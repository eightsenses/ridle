import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { checkAuth } from '@/utils/supabase';

export const POST = async (request: NextRequest) => {
  const { isAuthorized, response, user } = await checkAuth(request);
  if (!isAuthorized) return response;

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

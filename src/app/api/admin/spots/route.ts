import { checkAuth } from '@/utils/supabase';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { isAuthorized, response } = await checkAuth(request);
  if (!isAuthorized) return response;

  try {
    const spots = await prisma.spot.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' }
    });
    return NextResponse.json({ status: 'OK', spots }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ status: error.message }, { status: 400 });
    }
    return NextResponse.json({ status: '不明なエラー' }, { status: 400 });
  }
};

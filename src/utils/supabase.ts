import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const checkAuth = async (request: NextRequest) => {
  const authHeader = request.headers.get('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return {
      isAuthorized: false as const,
      response: NextResponse.json({ error: 'トークンが見つかりません' }, { status: 401 }),
      user: null
    };
  }

  const {
    data: { user },
    error
  } = await supabase.auth.getUser(token);

  if (error || !user) {
    return {
      isAuthorized: false as const,
      response: NextResponse.json({ error: '認証されていません' }, { status: 401 }),
      user: null
    };
  }

  return { isAuthorized: true as const, response: null, user };
};

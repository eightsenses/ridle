'use client';

import { supabase } from '@/utils/supabase';
import AuthForm from '../_components/AuthForm';

// import Header from '@/app/_components/Header';
// import Footer from '@/app/_components/Footer';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic with Supabase
    console.log('Signup:', { username, email, password });
  };

  return (
    <div className="relative min-h-screen w-full bg-[var(--colors-semantic-background-thin)]">
      <main className="flex min-h-[calc(100vh-140px-100px)] w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-12 px-8 py-12">
          {/* Heading */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-[40px] font-bold leading-[1.4] tracking-[0.6px] text-[var(--colors-semantic-text-black)]">
              会員登録
            </h1>
            <p className="text-[16px] font-normal leading-[1.7] tracking-[0.24px] text-[var(--colors-semantic-text-gray)]">
              今日の波も、自分の成長も記録！かんたん・無料で始めよう
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="flex flex-col items-center justify-center gap-6">
            <TextInput
              className="w-[460px]"
              label="ユーザーネーム"
              placeholder="ニックネームを入力"
              type="text"
              value={username}
              onChange={setUsername}
            />
            <TextInput
              className="w-[460px]"
              label="メールアドレス"
              placeholder="メールアドレス"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <TextInput
              className="w-[460px]"
              label="パスワード"
              placeholder="パスワード"
              type="password"
              value={password}
              onChange={setPassword}
            />

            <button
              type="submit"
              className="min-w-[140px] rounded-full bg-[var(--colors-semantic-background-btn-primary-enabled)] px-4 py-4 text-[16px] font-bold leading-none text-[var(--colors-semantic-text-btn-primary-text)] transition-colors hover:bg-[var(--colors-semantic-background-btn-primary-hover)]"
            >
              会員登録
            </button>

            <div className="text-center text-[14px] font-normal leading-[1.6] tracking-[0.21px] text-[var(--colors-semantic-text-gray)]">
              <p className="mb-0">もうアカウント持ってる？</p>
              <Link href="/login" className="underline decoration-solid">
                ログインはこちら
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

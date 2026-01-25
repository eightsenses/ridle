'use client';
import Link from 'next/link';
import { useState } from 'react';

function SunIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="5" stroke="white" strokeWidth="2" />
      <path
        d="M12.5 2V5M12.5 20V23M23 12.5H20M5 12.5H2M20.5 20.5L18.5 18.5M6.5 6.5L4.5 4.5M20.5 4.5L18.5 6.5M6.5 18.5L4.5 20.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="#919191"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="relative h-[140px] w-full overflow-hidden">
      <div className="absolute left-0 top-0 flex h-[140px] w-full items-center px-[54px]">
        {/* Mode Toggle */}
        <button
          onClick={toggleMode}
          className="flex flex-1 items-center gap-2 p-0"
          aria-label="テーマ切り替え"
        >
          <div
            className={`flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ${isDarkMode ? 'bg-white' : 'bg-[var(--colors-semantic-background-btn-primary-enabled)]'}`}
          >
            <SunIcon />
          </div>
          <div
            className={`flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ${isDarkMode ? 'bg-[var(--colors-semantic-background-btn-primary-enabled)]' : 'bg-white'}`}
          >
            <MoonIcon />
          </div>
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 top-[30px] -translate-x-1/2">
          <div
            className="text-[48px] font-bold text-[var(--colors-semantic-logo-main)]"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            Ridle
          </div>
        </Link>

        {/* Buttons */}
        <div className="flex shrink-0 items-center gap-4">
          <Link href="/signup">
            <button className="min-w-[140px] rounded-full bg-[var(--colors-semantic-background-btn-primary-enabled)] px-4 py-4 text-[16px] font-bold leading-none text-white transition-colors hover:bg-[var(--colors-semantic-background-btn-primary-hover)]">
              新規登録
            </button>
          </Link>
          <Link href="/login">
            <button className="min-w-[140px] rounded-full bg-white px-4 py-4 text-[16px] font-bold leading-none text-[var(--colors-semantic-text-btn-scondary-text)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] transition-colors hover:bg-[var(--colors-semantic-background-btn-secondary-hover)]">
              ログイン
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

'use client';

function X({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 4.5L4.5 15.5M4.5 4.5L15.5 15.5"
        stroke="#383838"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Instagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="14" height="14" rx="3" stroke="#383838" strokeWidth="2" />
      <circle cx="10" cy="10" r="3" stroke="#383838" strokeWidth="2" />
      <circle cx="14.5" cy="5.5" r="0.5" fill="#383838" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center px-0 py-8">
      <div className="flex w-[1620px] items-center justify-between">
        <p className="text-right text-[14px] font-normal leading-none text-[var(--colors-semantic-text-default)]">
          @2025 Ridel
        </p>
        <div className="flex shrink-0 items-center gap-6">
          <p className="text-right text-[14px] font-normal leading-none text-[var(--colors-semantic-text-default)]">
            お問い合わせ
          </p>
          <div className="flex items-start justify-center gap-2">
            <X className="relative h-5 w-5 shrink-0 overflow-hidden" />
            <Instagram className="relative h-5 w-5 shrink-0 overflow-hidden" />
          </div>
        </div>
      </div>
    </footer>
  );
}

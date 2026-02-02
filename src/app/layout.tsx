import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import { notoSansJP, bebasNeue, roboto } from '@/app/styles/fonts';
import LayoutWrapper from '@/app/_components/LayoutWrapper';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Ridle - サーフィン記録アプリ',
  description: '今日の波も、自分の成長も記録！'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${notoSansJP.variable} ${bebasNeue.variable} ${roboto.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

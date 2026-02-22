import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import { notoSansJP, bebasNeue, roboto } from '@/app/styles/fonts';
import LayoutWrapper from '@/app/_components/LayoutWrapper';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/theme-provider';
const siteName = 'Ridle';
const description =
  '今日の波も、自分の成長も記録！サーフ時間や目標を設定しながら、初心者から中級者へステップアップを目指すサーフィン記録アプリ。';
const title = 'サーフィン記録アプリ - Ridle';
export const metadata: Metadata = {
  metadataBase: new URL('https://ridle.jp'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: title,
    template: '%s | Ridle'
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    siteName: siteName,
    locale: 'ja_JP',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: siteName
      }
    ]
  }
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

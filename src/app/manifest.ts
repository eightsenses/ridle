import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ridle - サーフィン記録アプリ',
    short_name: 'Ridle',
    description:
      'サーフ時間や目標を設定しながら、初心者から中級者へステップアップ目指すサーフィン記録アプリです。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F3F4F6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}

'use client';
import ContactForm from '@/app/contact/_components/ContactForm';
import { ContactRequest } from '@/types/contact';
import React from 'react';
import toast from 'react-hot-toast';
import PageHeader from '@/app/_components/PageHeader';

export default function Contact() {
  const handleSubmit = async (data: ContactRequest, reset: () => void) => {
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        throw new Error('送信に失敗しました');
      }
      toast.success('お問い合わせを送信しました。');
      reset();
    } catch (error) {
      console.error('お問い合わせ送信エラー:', error);
      toast.error('送信に失敗しました');
    }
  };

  return (
    <section className="mx-auto grid w-full max-w-[480px] gap-8">
      <PageHeader
        title="お問い合わせ"
        text="ご質問・ご意見がありましたら、こちらからお問い合わせください"
      />
      <ContactForm onSubmit={handleSubmit} buttonText="送信" />
    </section>
  );
}

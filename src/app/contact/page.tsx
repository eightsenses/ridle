'use client';
import ContactForm from '@/app/contact/_components/ContactForm';
import { ContactRequest } from '@/app/types/contact';
import React from 'react';
import toast from 'react-hot-toast';

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
    <div className="mx-auto grid max-w-[480px] gap-8">
      <ContactForm onSubmit={handleSubmit} buttonText="送信" />
    </div>
  );
}

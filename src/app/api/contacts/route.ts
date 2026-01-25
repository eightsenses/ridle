import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import MailTemplate from '@/app/contact/_components/MailTemplate';
import { createElement } from 'react';
import { ContactRequest } from '@/app/types/contact';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL as string;

export const POST = async (request: NextRequest) => {
  try {
    const req: ContactRequest = await request.json();
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [req.email],
      subject: 'お問い合わせありがとうございます',
      react: createElement(MailTemplate, { senderName: req.name, content: req.message })
    });
    await resend.emails.send({
      from: fromEmail,
      to: fromEmail,
      subject: `【Ridle】${req.name}様よりお問い合わせがありました`,
      react: createElement(MailTemplate, { senderName: req.name, content: req.message })
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

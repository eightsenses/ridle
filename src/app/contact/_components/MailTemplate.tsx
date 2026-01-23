import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Tailwind
} from '@react-email/components';
import * as React from 'react';

interface MailTemplateProps {
  senderName: string;
  content: string;
}

const MailTemplate = ({ senderName, content }: Readonly<MailTemplateProps>) => {
  return (
    <Html>
      <Head />
      <Preview>お問い合わせを承りました</Preview>
      <Tailwind>
        <Body className="bg-white font-sans text-gray-900">
          <Container className="mx-auto max-w-2xl px-4 py-8">
            <Text className="text-lg font-semibold">{senderName} 様</Text>
            <Text className="leading-relaxed">
              お問い合わせいただきありがとうございます。
              <br />
              本メールは、お問い合わせを受け付けたことをお知らせする自動返信メールです。
            </Text>
            <Text className="leading-relaxed">
              お問い合わせ内容によってはお時間を頂戴する場合や、
              <br />
              ご回答いたしかねる場合がございます。あらかじめご了承ください。
            </Text>
            <Section className="mt-8 rounded border border-gray-100 bg-gray-50 p-4">
              <Text className="mb-2 text-xs uppercase tracking-widest">お問い合わせ内容</Text>
              <Text className="m-0 text-sm leading-relaxed">{content}</Text>
            </Section>

            <Text className="mt-12 border-t pt-4 text-xs text-gray-400">Ridel（ライドる）</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default MailTemplate;

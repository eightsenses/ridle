'use client';
import AboutApp from '@/app/_components/home/AboutApp';
import Concept from '@/app/_components/home/Concept';
import Features from '@/app/_components/home/Features';
import HeroVisual from '@/app/_components/home/HeroVisual';
import Wave from '@/app/_components/home/Wave';
import HeroImagePc from '@/assets/images/home/hero@pc.jpg';
import HeroImageSp from '@/assets/images/home/hero@sp.jpg';
import MocImageLight from '@/assets/images/home/device@light.png';
import MocImageDark from '@/assets/images/home/device@dark.png';
import ConceptImage from '@/assets/images/home/message.jpg';
import FadeUp from '@/app/_components/motions/FadeUpMotion';
import TextMotion from '@/app/_components/motions/TextMotion';

export default function Home() {
  return (
    <section className="home w-full">
      <HeroVisual
        heading={
          <>
            <TextMotion className="grid w-fit">Ride Your Wave</TextMotion>
            <TextMotion className="mt-2 grid w-fit" delay={0.2}>
              Live the Story
            </TextMotion>
          </>
        }
        subtitle={
          <FadeUp delay={0.75} y={15}>
            <p>
              はじめてのライドも、次のチャレンジも。 <br />
              記録があなたの成長に変わる。
            </p>
          </FadeUp>
        }
        imagePc={HeroImagePc}
        imageSp={HeroImageSp}
      />
      <AboutApp
        title={`Ridle（ライドる）= \nRide Ripple × ライドする`}
        caption={`波に乗る楽しさを記録し、波紋のように成長サークルを管理！\nサーフ時間や目標を設定しながら、\n初心者から中級者へステップアップ目指すサーフィン記録アプリです。`}
        imageLight={MocImageLight}
        imageDark={MocImageDark}
        buttonLabel="今すぐはじめよう"
        buttonHref="/signup"
      />
      <Wave />
      <Features buttonLabel="今すぐはじめよう" buttonHref="/signup" />
      <Concept
        title={
          <>
            あなたの
            <br className="hidden md:block" />
            <span className="text-semantic-text-primary md:text-semantic-text-secondary">
              ライド
            </span>
            は
            <br />
            誰かの
            <br className="hidden md:block" />
            勇気になる
          </>
        }
        texts={[
          '初めて立てた波、小さなライド。\nその一瞬の喜びが自分を笑顔にし、仲間をワクワクさせる。',
          '誰かの挑戦が、また誰かの背中を押す。\n波紋のように広がって、海の向こうで励まし合える。',
          'Ridle（ライドる）は、そんな「ライド」を記録し、\n仲間とシェアするために生まれました。',
          '楽しみながら波に乗り、目標を重ねていく。\n初心者が一歩ずつ、自分らしいステップで成長できるように。',
          'Ridle（ライドる） - 波に乗って、成長の波紋を広げよう。'
        ]}
        imageBg={ConceptImage}
      />
    </section>
  );
}

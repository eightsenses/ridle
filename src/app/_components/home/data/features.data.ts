import Image01 from '@/assets/images/home/goal.jpg';
import Image02 from '@/assets/images/home/friend.jpg';
import GoalIcon from '@/assets/svg/goal-icon.svg';
import FriendIcon from '@/assets/svg/friend-icon.svg';
import AreaIcon from '@/assets/svg/area-icon.svg';
import SessionIcon from '@/assets/svg/session-icon.svg';
import SpotIcon from '@/assets/svg/wave-icon.svg';
import { FeatureCardProps, FeatureSubCardProps } from '@/types/home';

export const FEATURE_ITEMS: FeatureCardProps[] = [
  {
    imageSrc: Image01,
    icon: GoalIcon,
    title: '今月の目標',
    text: '今月の目標や課題を設定し、サーフ時間やライディング本数を数値で管理。グラフで進捗を可視化しながら、自分の成長を確認できます。'
  },
  {
    imageSrc: Image02,
    icon: FriendIcon,
    title: '友達とつながる',
    text: 'プロフィールで自己紹介を共有し、直近のセッションも表示。\n友達を招待して記録を見合うことで、励まし合いながら上達できるコミュニティが広がります。'
  }
];

export const FEATURE_SUB_ITEMS: FeatureSubCardProps[] = [
  {
    icon: AreaIcon,
    title: 'Area',
    subtitle: 'エリア選択',
    text: 'エリアを地域から選択すると、登録されたスポットを簡単に一覧表示。目的のスポット情報にすぐアクセス可能。'
  },
  {
    icon: SpotIcon,
    title: 'Spot',
    subtitle: 'スポット詳細',
    text: '波・風・天候をチェック可能。一言アドバイス付きで、初心者でも状況を把握しやすく、ボード選びや練習内容の参考に。'
  },
  {
    icon: SessionIcon,
    title: 'Session',
    subtitle: 'セッション記録',
    text: 'サーフィンした時間や乗れた本数を記録し、課題や気づきをメモ。成長の軌跡を振り返りやすいセッションログを作成。'
  }
];

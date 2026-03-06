'use client';
import { FC } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import StarRating from '@/app/admin/_components/StarRating';
import { Session } from '@/types/session';
import { parseRating } from '@/utils/rating';
import Link from 'next/link';

interface SessionCardProps {
  session: Session;
  className?: string;
}

const SessionCard: FC<SessionCardProps> = ({ session, className }) => {
  const dateStr = format(session.date, 'yyyy.MM.dd');

  return (
    <article className="relative">
      <Link
        href={`/admin/session/${session.id}`}
        className={cn(
          'group relative flex flex-col gap-4 rounded-sm bg-semantic-background-white p-6 md:gap-6 xl:flex-row xl:pr-12',
          'transition-all duration-200',
          'hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)]',
          className
        )}
      >
        {session.spot?.name && (
          <span className="absolute right-3 top-3 z-10 min-w-[100px] rounded-sm bg-semantic-background-primary p-1 text-center text-xs font-semibold text-semantic-text-white">
            {session.spot.name}
          </span>
        )}
        {session.thumbnailImageUrl && (
          <div className="flex-shrink-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden xl:w-[160px]">
              <Image
                src={session.thumbnailImageUrl}
                alt={`${dateStr}のセッション`}
                fill
                className="h-full w-full object-cover"
                sizes="160px"
              />
            </div>
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="text-base font-bold text-semantic-text-black">{dateStr}</p>
          <div className="flex flex-col gap-1 text-sm text-semantic-text-gray lg:flex-row lg:gap-3">
            <span>サーフタイム：{session.surfTimeMinutes}分</span>
            <span className="hidden lg:block">-</span>
            <span>ライド数：{session.rideCount}本</span>
          </div>
          {session.challengeNote && (
            <div className="flex whitespace-pre-wrap text-sm/relaxed text-semantic-text-gray">
              <div className="">メモ：</div>
              <p className="flex-1">{session.challengeNote}</p>
            </div>
          )}
          <StarRating className="mt-6 xl:mt-3" count={parseRating(session.ratings)} />
        </div>

        <ChevronRight
          className={cn(
            'absolute size-8 text-semantic-text-gray transition-all duration-200',
            'bottom-4 right-4 top-auto translate-y-0', // 位置の固定解除と再配置
            'rounded-full bg-gray-100 p-2',
            'xl:bottom-auto xl:right-3.5 xl:top-1/2 xl:size-6 xl:-translate-y-1/2',
            'xl:bg-transparent xl:p-0',
            'group-hover:right-2'
          )}
        />
      </Link>
    </article>
  );
};
export default SessionCard;

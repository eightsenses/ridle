'use client';
import { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { isSameDay, isSameMonth } from 'date-fns';
import { Session } from '@/types/session';
import SessionCard from '@/app/admin/session/_components/SessionCard';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';

const LOAD_SIZE = 10;

interface SessionListProps {
  sessions: Session[];
  selectedDate: Date | undefined;
  currentMonth: Date;
}

const SessionList: FC<SessionListProps> = ({ sessions, selectedDate, currentMonth }) => {
  const [displayCount, setDisplayCount] = useState(LOAD_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const filteredSessions = useMemo(() => {
    let result = sessions.filter((s) => isSameMonth(new Date(s.date), currentMonth));
    if (selectedDate) {
      result = result.filter((s) => isSameDay(new Date(s.date), selectedDate));
    }
    return result;
  }, [sessions, selectedDate, currentMonth]);

  // フィルター変更時に表示件数をリセット
  useEffect(() => {
    setDisplayCount(LOAD_SIZE);
  }, [selectedDate, currentMonth]);

  const hasMore = displayCount < filteredSessions.length;

  const loadMore = useCallback(() => {
    setDisplayCount((prev) => Math.min(prev + LOAD_SIZE, filteredSessions.length));
  }, [filteredSessions.length]);

  // IntersectionObserverで無限スクロールを実装
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  const visibleSessions = filteredSessions.slice(0, displayCount);

  return (
    <div className="flex flex-col">
      <div className="grid flex-1 gap-3">
        {visibleSessions.length > 0 ? (
          visibleSessions.map((session) => <SessionCard key={session.id} session={session} />)
        ) : (
          <>
            <p className="py-4 text-center text-sm text-semantic-text-gray">
              セッション記録がありません
            </p>
            <Button
              asChild
              variant="secondary"
              size="md"
              className="mx-auto flex items-center justify-center gap-1 text-center shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)]"
            >
              <Link href="/admin/session/new">
                <CirclePlus className="h-6 w-6" />
                新規作成
              </Link>
            </Button>
          </>
        )}
      </div>

      {hasMore && <div ref={sentinelRef} className="h-10" />}
    </div>
  );
};
export default SessionList;

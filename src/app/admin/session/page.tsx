'use client';
import { useState, useMemo } from 'react';
import { isSameDay, isSameMonth } from 'date-fns';
import { CirclePlus, RotateCcw } from 'lucide-react';
import AdminHeader from '@/app/admin/_components/AdminHeader';
import AdminMain from '@/app/admin/_components/AdminMain';
import AdminCalendar from '@/app/admin/_components/AdminCalendar';
import SessionList from '@/app/admin/session/_components/SessionList';
import { Button } from '@/components/ui/button';
import useSWR from 'swr';
import { useSupabaseSession } from '@/hooks/useSupabaseSession';
import StatusMessage from '@/app/_components/StatusMessage';
import Loader from '@/app/_components/Loader';
import { Session } from '@/types/session';
import Link from 'next/link';

const useAdminSession = (token?: string | null) => {
  const fetcher = async (url: string) => {
    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const res = await fetch(url, { headers });
    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.message || 'セッションが見つかりません');
    }
    const data = await res.json();
    return data.sessions;
  };
  const { data, error, isLoading } = useSWR<Session[]>(
    token ? '/api/admin/sessions' : null,
    fetcher
  );
  return { sessions: data, error, isLoading };
};

export default function AdminSession() {
  const { token } = useSupabaseSession();
  const { sessions, error, isLoading } = useAdminSession(token);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());
  const sessionDates = useMemo(() => sessions?.map((s) => new Date(s.date)), [sessions]);
  if (error) return <StatusMessage message="セッションの取得に失敗しました" />;
  if (isLoading) return <Loader />;
  if (!sessions || sessions.length === 0)
    return (
      <>
        <AdminHeader title="セッション記録" />
        <AdminMain className="flex flex-col items-center gap-4">
          <StatusMessage
            className="pb-4 text-center text-sm text-semantic-text-gray"
            message="セッション記録がありません"
          />
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
        </AdminMain>
      </>
    );

  const handleDayClick = (date: Date) => {
    if (!isSameMonth(date, calendarMonth)) {
      setCalendarMonth(date);
    }
    setSelectedDate((prev) => (prev && isSameDay(prev, date) ? undefined : date));
  };

  const handleMonthChange = (month: Date) => {
    setCalendarMonth(month);
    setSelectedDate(undefined);
  };

  return (
    <>
      <AdminHeader title="セッション記録" />
      <AdminMain className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-4 lg:sticky lg:top-0 lg:self-start">
          <div className="bg-semantic-background-thin p-6">
            <div className="mb-2 flex w-full items-center justify-between border-b border-semantic-background-subtle pb-3">
              <h2 className="text-xl font-bold text-semantic-text-default">カレンダー</h2>
              {selectedDate && (
                <Button
                  size="sm"
                  onClick={() => setSelectedDate(undefined)}
                  className="mx-0 flex w-fit items-center gap-1 py-2 text-center text-xs/none"
                >
                  <RotateCcw className="h-4 w-4" />
                  全件表示
                </Button>
              )}
            </div>
            <AdminCalendar
              sessionDates={sessionDates}
              selectedDate={selectedDate}
              month={calendarMonth}
              onMonthChange={handleMonthChange}
              onDayClick={handleDayClick}
            />
          </div>

          <Button
            asChild
            variant="secondary"
            size="sm"
            className="ml-auto mr-0 flex w-fit items-center gap-1 py-2 text-center text-sm/none shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)]"
          >
            <Link href="/admin/session/new">
              <CirclePlus className="h-4 w-4" />
              新規作成
            </Link>
          </Button>
        </div>

        <div className="min-w-0 flex-1">
          <SessionList
            sessions={sessions}
            selectedDate={selectedDate}
            currentMonth={calendarMonth}
          />
        </div>
      </AdminMain>
    </>
  );
}

'use client';
import { FC } from 'react';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';

interface SessionCalendarProps {
  sessionDates: Date[] | undefined;
  selectedDate: Date | undefined;
  month: Date;
  onMonthChange: (month: Date) => void;
  onDayClick: (date: Date) => void;
}
const today = new Date();
const SessionCalendar: FC<SessionCalendarProps> = ({
  sessionDates,
  selectedDate,
  month,
  onMonthChange,
  onDayClick
}) => {
  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={(date) => date && onDayClick(date)}
      month={month}
      onMonthChange={onMonthChange}
      endMonth={today}
      disabled={{ after: today }}
      weekStartsOn={1}
      locale={enUS}
      modifiers={{
        hasSession: sessionDates
      }}
      modifiersClassNames={{
        hasSession: 'pointer-events-auto bg-semantic-background-primary text-semantic-text-white'
      }}
      formatters={{
        formatMonthCaption: (date) => format(date, 'MMMM yyyy', { locale: enUS })
      }}
    />
  );
};
export default SessionCalendar;

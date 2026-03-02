'use client';

import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

function DatePickerCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn('relative flex flex-col gap-4', defaultClassNames.months),
        month: cn('flex w-full flex-col gap-2', defaultClassNames.month),
        nav: cn(
          'absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1',
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: 'ghost' }),
          'flex size-8 select-none items-center justify-center p-0 aria-disabled:opacity-50',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: 'ghost' }),
          'flex size-8 select-none items-center justify-center p-0 aria-disabled:opacity-50',
          defaultClassNames.button_next
        ),
        month_caption: cn(
          'flex h-8 w-full items-center justify-center px-8',
          defaultClassNames.month_caption
        ),
        caption_label: cn(
          'select-none text-sm font-medium',
          'text-md select-none font-bebas',
          defaultClassNames.caption_label
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'text-muted-foreground flex-1 select-none pb-1 font-bebas text-xs',
          defaultClassNames.weekday
        ),
        week: cn('flex w-full', defaultClassNames.week),
        day: cn(
          'relative flex h-9 w-9 items-center justify-center p-0 text-center text-sm',
          '[&_button]:h-9 [&_button]:w-9 [&_button]:p-0 [&_button]:font-normal',
          'hover:[&_button]:bg-semantic-background-subtle',
          defaultClassNames.day
        ),
        selected: cn(
          'bg-semantic-background-primary text-semantic-text-white',
          'hover:[&_button]:bg-semantic-background-primary',
          defaultClassNames.selected
        ),
        today: cn(
          'bg-semantic-background-gray font-bold text-semantic-background-white',
          defaultClassNames.today
        ),
        outside: cn('text-semantic-text-placeholder opacity-50', defaultClassNames.outside),
        disabled: cn(
          'pointer-events-none text-semantic-text-placeholder',
          defaultClassNames.disabled
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon className={cn('size-4', className)} {...props} />;
          }
          return <ChevronRightIcon className={cn('size-4', className)} {...props} />;
        }
      }}
      {...props}
    />
  );
}
export { DatePickerCalendar };

'use client';
import { useState } from 'react';
import { FieldValues, Path, Control, Controller } from 'react-hook-form';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { DatePickerCalendar } from '@/components/ui/date-picker-calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DatePickerFieldProps<T extends FieldValues> {
  label: string;
  field: Path<T>;
  control: Control<T>;
  error?: string;
  isSubmitting?: boolean;
}

const DatePickerField = <T extends FieldValues>({
  label,
  field,
  control,
  error,
  isSubmitting = false
}: DatePickerFieldProps<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Label>{label}</Label>
      <Controller
        name={field}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                disabled={isSubmitting}
                className={cn(
                  'flex w-full items-center gap-2 bg-gray-100 px-4 py-3 text-base leading-normal focus:outline-none',
                  value ? 'text-semantic-text-black' : 'text-semantic-text-placeholder'
                )}
              >
                <CalendarIcon className="h-4 w-4" />
                {value ? format(value, 'yyyy/MM/dd') : '日付を選択'}
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto rounded-none bg-semantic-background-thin p-0 shadow-none"
              align="start"
            >
              <DatePickerCalendar
                mode="single"
                selected={value}
                disabled={{ after: new Date() }}
                onSelect={(date) => {
                  onChange(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {error && <p className="mt-1 text-sm text-semantic-text-danger">{error}</p>}
    </div>
  );
};

export { DatePickerField };

'use client';

import React, { useState } from 'react';
import { FieldValues, Path, Control, Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StarRatingFieldProps<T extends FieldValues> {
  label: string;
  field: Path<T>;
  control: Control<T>;
  error?: string;
  isSubmitting?: boolean;
  max?: number;
}

const StarRatingField = <T extends FieldValues>({
  label,
  field,
  control,
  error,
  isSubmitting = false,
  max = 5
}: StarRatingFieldProps<T>) => {
  const [hovered, setHovered] = useState(0);
  return (
    <div>
      <Label>{label}</Label>
      <Controller
        name={field}
        control={control}
        render={({ field: { value, onChange } }) => (
          <div className="flex gap-1" onMouseLeave={() => setHovered(0)}>
            {[...Array(max)].map((_, i) => {
              const starValue = i + 1;
              const isFilled = starValue <= (hovered || value || 0);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={isSubmitting}
                  onMouseEnter={() => setHovered(starValue)}
                  onClick={() => onChange(starValue === value ? 0 : starValue)}
                  className="p-0.5"
                >
                  <Star
                    className={cn(
                      'h-6 w-6 transition-colors',
                      isFilled
                        ? 'fill-semantic-background-star text-semantic-background-star'
                        : 'fill-semantic-background-dashboard text-semantic-background-dashboard'
                    )}
                  />
                </button>
              );
            })}
          </div>
        )}
      />
      {error && <p className="mt-1 text-sm text-semantic-text-danger">{error}</p>}
    </div>
  );
};
export { StarRatingField };

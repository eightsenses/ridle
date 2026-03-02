'use client';
import { FC } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  count: number;
  max?: number;
  className?: string;
}

const StarRating: FC<StarRatingProps> = ({ count, max = 5, className }) => {
  return (
    <div className={cn('flex gap-1', className)}>
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-4 w-4',
            i < count
              ? 'fill-semantic-background-star text-semantic-background-star'
              : 'fill-semantic-background-dashboard text-semantic-background-dashboard'
          )}
        />
      ))}
    </div>
  );
};
export default StarRating;

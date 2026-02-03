'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const ModeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="inline-flex items-center gap-2">
      <Button
        type="button"
        variant={resolvedTheme === 'light' ? 'modeOn' : 'modeOff'}
        className="px-2 py-2"
        onClick={() => setTheme('light')}
      >
        <Sun className="h-5 w-5" />
      </Button>
      <Button
        type="button"
        variant={resolvedTheme === 'dark' ? 'modeOn' : 'modeOff'}
        className="px-2 py-2"
        onClick={() => setTheme('dark')}
      >
        <Moon className="h-5 w-5" />
      </Button>
    </div>
  );
};
export default ModeToggle;

import { Cog } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AngelesoftLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 text-foreground font-headline',
        className
      )}
    >
      <Cog className="h-6 w-6 animate-spin-slow text-accent glow" />
      <span className="text-xl font-extrabold tracking-tight">Angelesoft</span>
    </div>
  );
}

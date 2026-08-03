// File purpose: Reusable section heading (eyebrow + title + optional description) used across pages.
// `invert` flips the colors for dark (charcoal) bands; `size` 'lg' is for oversized page headings.
import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  size = 'md',
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  invert?: boolean;
  size?: 'md' | 'lg';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className={cn('eyebrow mb-4', invert && '!text-background/60')}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          'font-display leading-[1.05] tracking-tight',
          size === 'lg' ? 'text-4xl md:text-6xl' : 'text-3xl leading-[1.1] md:text-5xl',
          invert && 'text-background'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 font-display text-base italic leading-relaxed text-muted-foreground md:text-lg',
            invert && 'text-background/70'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

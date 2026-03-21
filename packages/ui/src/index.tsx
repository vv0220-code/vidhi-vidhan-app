import * as React from 'react';
import clsx from 'clsx';

export function Badge({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <span className={clsx('inline-flex rounded-full px-3 py-1 text-xs font-semibold', className)}>{children}</span>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-stone-950 md:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-stone-600">{description}</p>
    </div>
  );
}

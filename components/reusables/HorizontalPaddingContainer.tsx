import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const HorizontalPaddingContainer = ({ children, className }: Props) => {
  return (
    <div className={cn('px-5 sm:px-8 md:px-10 lg:px-16', className)}>
      {children}
    </div>
  );
};

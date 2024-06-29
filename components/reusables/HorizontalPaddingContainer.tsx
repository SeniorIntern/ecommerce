import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const HorizontalPaddingContainer = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8 md:px-10 lg:max-w-[1150px] lg:px-16 xl:max-w-[1440px]',
        className
      )}
    >
      {children}
    </div>
  );
};

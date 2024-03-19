import { type FC, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    children: ReactNode;
}

const CardBg: FC<Props> = ({ children, className }) => {
    return (
        <div
            className={cn(
                'bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 max-w-[95dvw] md:max-w-2xl rounded-xl border border-[#eaeaea] dark:border-neutral-600',
                className,
            )}
        >
            {children}
        </div>
    );
};

export default CardBg;

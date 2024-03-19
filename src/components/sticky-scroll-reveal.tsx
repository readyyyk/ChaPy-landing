'use client';

import React, { type ReactNode, useRef } from 'react';

import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import colors from 'tailwindcss/colors';

import { cn } from '@/lib/utils';

export const StickyScroll = ({
    content,
    className,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: ReactNode;
    }[];
    className?: string;
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref,
        container: ref,
        offset: ['start start', 'end start'],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc]!)) {
                    return index;
                }
                return acc;
            },
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        colors.violet[950],
        colors.indigo[950],
        colors.black + '000',
    ];
    const linearGradients = [
        'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
        'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
        'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
    ];
    console.log(
        'linear-gradient(transparent, ' +
            backgroundColors[activeCard % backgroundColors.length] +
            '44 5%,' +
            backgroundColors[activeCard % backgroundColors.length] +
            '44 95%,' +
            'transparent)',
    );
    return (
        <motion.div
            animate={{
                background:
                    'linear-gradient(transparent, ' +
                    backgroundColors[activeCard % backgroundColors.length] +
                    '44 3%,' +
                    backgroundColors[activeCard % backgroundColors.length] +
                    '44 97%,' +
                    'transparent)',
            }}
            className={cn(
                'h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 scrollbar-hide snap-proximity snap-y',
                className,
            )}
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div
                            key={item.title + index}
                            className="my-20 min-h-[60dvh] snap-center"
                        >
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-slate-300 max-w-sm mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </div>
            <motion.div
                animate={{
                    background:
                        linearGradients[activeCard % linearGradients.length],
                }}
                className={cn(
                    'hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden',
                    contentClassName,
                )}
            >
                {content[activeCard]?.content ?? null}
            </motion.div>
        </motion.div>
    );
};

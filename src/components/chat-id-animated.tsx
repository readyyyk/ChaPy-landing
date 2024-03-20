'use client';

import { type FC, useEffect, useRef } from 'react';

const ChatIdAnimated: FC = ({}) => {
    const animationDuration = 3000;
    const highlightDuration = 500;
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const getRandomLetter = (): string => {
        const rnd = Math.floor(Math.random() * chars.length);
        return chars[rnd]!;
    };
    const refs = [
        useRef<HTMLSpanElement | null>(null),
        useRef<HTMLSpanElement | null>(null),
        useRef<HTMLSpanElement | null>(null),
        useRef<HTMLSpanElement | null>(null),
        useRef<HTMLSpanElement | null>(null),
    ];
    const letters = ['R', 'e', 'a', 'd', 'K'];
    const delays = [0, 1760, 600, 1100, 2500];

    useEffect(() => {
        // intervals
        const timeouts = [] as NodeJS.Timeout[];
        const intervals = [] as NodeJS.Timeout[];

        // let start = -1;
        for (let i = 0; i < letters.length; i++) {
            // i === 0 && (start = new Date().getTime());
            const newTimeout = setTimeout(
                () => {
                    // refs[i]!.current!.style.animation =
                    //     'inWhite 2s linear infinite';
                    const intervalCallback = () => {
                        refs[i]!.current!.style.background = '#fff';

                        setTimeout(() => {
                            refs[i]!.current!.style.background = 'transparent';
                            refs[i]!.current!.textContent = getRandomLetter();
                        }, highlightDuration);
                    };
                    intervalCallback();
                    const newInterval = setInterval(
                        intervalCallback,
                        animationDuration,
                    );
                    intervals.push(newInterval);
                },
                animationDuration / 2 + delays[i]!,
            );
            timeouts.push(newTimeout);
        }
        return () => {
            for (const el of intervals) {
                clearInterval(el);
            }
            for (const el of timeouts) {
                clearTimeout(el);
            }
        };
    }, []);

    return (
        <div>
            {letters.map((el, i) => (
                <span
                    ref={refs[i]}
                    key={`letter-feature-${i}`}
                    className="text-5xl font-mono"
                    style={{
                        transition: `background ${highlightDuration}ms linear`,
                    }}
                >
                    {el}
                </span>
            ))}
        </div>
    );
};

export default ChatIdAnimated;

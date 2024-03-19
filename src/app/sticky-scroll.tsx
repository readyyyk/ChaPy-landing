import React from 'react';

import { StickyScroll } from '../components/sticky-scroll-reveal';

export default () => {
    <StickyScroll
        className="w-full h-[95dvh]"
        content={[
            {
                title: '1',
                description: 'test2',
                content: <div className={'bg-black w-64 h-40'}></div>,
            },
            {
                title: '2',
                description: 'test2',
                content: <div className={'bg-white w-64 h-40'}></div>,
            },
            {
                title: '3',
                description: 'test2',
                content: <div className={'bg-cyan-500 w-64 h-40'}></div>,
            },
            {
                title: '4',
                description: 'test2',
                content: <div className={'bg-amber-500 w-64 h-40'}></div>,
            },
        ]}
    />;
};

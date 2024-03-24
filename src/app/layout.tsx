import { type ReactNode } from 'react';

import { Ubuntu } from 'next/font/google';

import { HOST } from '@/lib/utils';
import '@/styles/globals.css';

import { CSPostHogProvider } from '../components/providers/ph.provider';

const inter = Ubuntu({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic'],
    variable: '--font-sans',
});

export const metadata = {
    metadataBase: new URL(HOST),
    title: 'ChaPy - messaging service with no data storage and anonymous access',
    description:
        'Messaging service with anonymous access and decentralized data storage. To join chat chat just enter a valid link with the chat id',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
    openGraph: {
        title: 'ChaPy - messaging service with no data storage and anonymous access',
        description:
            'Messaging service with anonymous access and decentralized data storage. To join chat chat just enter a valid link with the chat id',
        images: '/opengraph-image.png',
    },
    keywords: [
        'ChaPy',
        'chapy',
        'chat',
        'chapy chat',
        'chapy messenger',
        'confidence',
        'messaging',
        'chat management',
        'no storage',
        'no data storage',
        'chat without data storage',
        'chat without history',
        'privacy',
        'private chat',
        'anonymous',
        'anonymous chat',
        'anonymous chat with no data storage',
        'private chat',
    ],
    other: {
        'yandex-verification': 'ed83dbdb1e4610d6',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <CSPostHogProvider>
                <body className={`dark font-sans ${inter.variable}`}>
                    {children}
                </body>
            </CSPostHogProvider>
        </html>
    );
}

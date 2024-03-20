import { type ReactNode } from 'react';

import { Ubuntu } from 'next/font/google';

import '@/styles/globals.css';

const inter = Ubuntu({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic'],
    variable: '--font-sans',
});

export const metadata = {
    metadataBase: new URL('https://chapy-landing.vercel.app'),
    title: 'ChaPy - messaging service',
    description:
        'Messaging service with anonymous access and decentralized data storage. To join chat chat just enter a valid link with the chat id',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
    openGraph: {
        title: 'ChaPy - messaging service',
        description:
            'Messaging service with anonymous access and decentralized data storage. To join chat chat just enter a valid link with the chat id',
        images: '/opengraph-image.png',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`dark font-sans ${inter.variable}`}>
                {children}
            </body>
        </html>
    );
}

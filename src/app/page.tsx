import React from 'react';

import { IconBrandGithubCopilot } from '@tabler/icons-react';
import {
    ArrowRightCircleIcon,
    BetweenHorizontalStartIcon,
    BinaryIcon,
    DatabaseIcon,
    FileTextIcon,
    HardDriveIcon,
    NotepadTextDashedIcon,
    NotepadTextIcon,
    PlusIcon,
} from 'lucide-react';
// Jaldi, Kadwa
// Kablammo, La_Belle_Aurore
import { Kablammo as Font } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import aes from '@/assets/AES.png';
import logo from '@/assets/chapy192.png';
import heroImage from '@/assets/chapy-example.webp';
import { AnimatedTooltip } from '@/components/animated-tooltip';
import Btn from '@/components/btn';
import CardBg from '@/components/card-bg';
import ChatIdAnimated from '@/components/chat-id-animated';
import { LampContainer } from '@/components/lamp';
import { MacbookScroll } from '@/components/mac-scroll';

const font = Font({ weight: '400', subsets: ['latin'] });

export default function HomePage() {
    return (
        <main>
            {/*  bg-[size:36px_36px] bg-[image:linear-gradient(to_right,#77777777_1px,transparent_1px),linear-gradient(to_bottom,#77777777_1px,transparent_1px);] */}
            <section className="h-[117lvh] md:h-[190lvh] lg:h-[240lvh] snap-start">
                <div className="absolute dark:bg-grid-white/[0.2] bg-grid-background/[0.2] w-full h-[100lvh] left-0 top-0">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
                </div>
                <MacbookScroll
                    title={
                        <span>
                            {' '}
                            Communicate Freely, Completely Private with{' '}
                            <i>ChaPy</i>{' '}
                        </span>
                    }
                    badge={
                        <Image
                            src={logo}
                            alt="ChaPy"
                            width={60}
                            height={60}
                            className="opacity-90"
                        />
                    }
                    src={heroImage}
                />
            </section>
            <section className="flex items-center flex-col text-center gap-5 py-12 snap-start">
                <LampContainer>
                    <p className="text-4xl md:text-5xl font-bold text-sky-50">
                        Ready to dive in?
                    </p>

                    <h2 className="text-xl md:text-2xl mt-20 text-sky-400">
                        Experience complete privacy with open-source messaging
                        service
                        <br />
                        <u>
                            <i>Anonymous access</i>
                        </u>{' '}
                        for quick usage
                        <br />
                        <u>
                            <b>Decentralized data storage</b>
                        </u>{' '}
                        for complete confidence
                    </h2>

                    <div className={'flex gap-3 mt-10'}>
                        <Btn className="p-2 md:p-3 px-2.5 md:px-4">
                            <Link
                                href="https://chapy-beta.netlify.com/"
                                target={'_blank'}
                                className="flex items-center gap-2 text-md md:text-xl leading-tight"
                            >
                                Check it now
                                <ArrowRightCircleIcon />
                            </Link>
                        </Btn>
                        <Btn className="p-2 md:p-3 px-2.5 md:px-4">
                            <Link
                                href="https://github.com/readyyyk/ChaPy/"
                                target={'_blank'}
                                className="flex items-center gap-2 text-md md:text-xl leading-tight"
                            >
                                Check out the Repo <IconBrandGithubCopilot />
                            </Link>
                        </Btn>
                    </div>
                </LampContainer>
            </section>

            <section className="w-full bg-dot-sky-500/40 relative flex flex-col items-center justify-center pb-12 snap-start gap-8">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
                <h2 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    Features
                </h2>
                <CardBg className="grid md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">
                            <i>&quot;No Data Storage&quot;</i> policy
                        </h2>
                        <h3>
                            We never store chats history or any of user&quot;s
                            data on servers. You can even host it on your own
                            servers
                        </h3>
                    </div>
                    <div className="relative flex overflow-hidden min-h-[115px] md:ml-4">
                        <HardDriveIcon className="absolute w-12 h-12 text-red-600 animate-real-bounce-3" />
                        <FileTextIcon className="absolute w-12 h-12 text-red-700 animate-real-bounce-2" />
                        <DatabaseIcon className="absolute w-12 h-12 text-red-700 animate-real-bounce-1" />
                        <BetweenHorizontalStartIcon className="absolute w-12 h-12 text-red-600 animate-real-bounce" />
                    </div>
                </CardBg>
                <CardBg className="grid md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">E2E encryption</h2>
                        <h3>
                            AES encryption scrambles your messages before
                            sending, ensuring only the intended recipient can
                            read them. Communicate with complete privacy.
                        </h3>
                    </div>
                    <div className="relative flex overflow-hidden min-h-[115px] items-center">
                        <FileTextIcon className="w-20 h-20 absolute animate-feature-text" />
                        <Image
                            src={aes}
                            alt="AES"
                            height={60}
                            className="absolute animate-feature-aes"
                        />
                        <BinaryIcon className="w-20 h-20 absolute animate-feature-bin" />
                        {/*
                        1) text message reveals
                        2) - aes image reveals to the right of text
                           - text slides to left
                        3) both move to the center and fade out
                        4) BIN reveals
                        5) - BIN moves to left
                           - aes image reveals to the right of BIN
                        6) both move to the center and fade out
                      */}
                    </div>
                </CardBg>

                <CardBg className="grid md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">Easy Room Access</h2>
                        <h3>
                            Forget about{' '}
                            <i>
                                <s>complex signup processes</s>
                            </i>
                            {'. '}
                            Join any conversation quickly and easy using the
                            unique Id displayed within the app.
                        </h3>
                    </div>
                    <div className="relative flex overflow-hidden min-h-[115px] items-center justify-center">
                        <ChatIdAnimated />
                    </div>
                </CardBg>

                <CardBg className="grid md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">Customizable History</h2>
                        <h3>
                            Take control of
                            <b>
                                {' '}
                                <u>your</u>
                            </b>{' '}
                            chat history. Choose to
                            <b>
                                {' '}
                                <u>sync</u>
                            </b>{' '}
                            your message history with current members, set a
                            <b>
                                {' '}
                                <u>limit</u>
                            </b>{' '}
                            on the number of messages saved per chat, or
                            <b>
                                {' '}
                                <u>clear</u>
                            </b>{' '}
                            the history entirely for individual or multiple
                            chats.
                        </h3>
                    </div>
                    <div className="relative flex overflow-hidden min-h-[115px] items-center justify-center">
                        <NotepadTextIcon className="animate-hidenseek absolute w-20 h-20" />
                        <NotepadTextDashedIcon className="animate-hidenseek2 absolute w-20 h-20" />
                    </div>
                </CardBg>

                <CardBg className="grid md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">Unique Avatars</h2>
                        <h3>
                            Experience ease identifying users in ChaPy. There
                            are unique avatar{' '}
                            <b>
                                <u>generated</u>
                            </b>{' '}
                            for each individual username, letting you identify
                            people in every conversation.
                        </h3>
                    </div>
                    <div className="relative flex overflow min-h-[115px] items-center justify-center">
                        <AnimatedTooltip
                            items={[
                                {
                                    id: 0,
                                    name: 'readyk',
                                    image: 'https://r-randimg-py.fly.dev/picsum/readyk',
                                },
                                {
                                    id: 1,
                                    name: 'halone',
                                    image: 'https://r-randimg-py.fly.dev/picsum/halone',
                                },
                                {
                                    id: 2,
                                    name: 'Ирина',
                                    image: 'https://r-randimg-py.fly.dev/picsum/Ирина',
                                },
                                {
                                    id: 3,
                                    name: 'username',
                                    image: 'https://r-randimg-py.fly.dev/picsum/username',
                                },
                            ]}
                        />
                    </div>
                </CardBg>
            </section>

            <section>
                <h2 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center mt-40">
                    Testimonials
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 m-auto max-w-5xl gap-y-20 justify-items-center mt-14">
                    {[
                        {
                            name: 'somebody',
                            quote: 'Everything has its own time',
                        },
                        {
                            name: 'Everyone',
                            quote: 'Everything has ITS own time',
                        },
                        {
                            name: 'somehow',
                            quote: 'Everything has its OWN time',
                        },
                        {
                            name: 'some of bodies',
                            quote: 'Everything has its own TIME',
                        },
                        {
                            name: 'John Doe',
                            quote: "Let's be real: very little men really interested in doing great projects. And more often they are forced not to do it",
                        },
                    ].map((el, i, arr) => {
                        return (
                            <div
                                key={'testimonial' + i}
                                className={
                                    'border-2 border-neutral-600/70 relative p-5 w-96 max-w-[90dvw]' +
                                    (arr.length % 2 && i === arr.length - 1
                                        ? ' lg:col-span-2'
                                        : '')
                                }
                                style={{
                                    background: `linear-gradient(${90 * (i + 3) + 45}deg, #222222aa .6%, #11111144)`,
                                }}
                            >
                                <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                                <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                                <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                                <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                                <h2 className="text-lg">{el.quote}</h2>
                                <h3 className="text-neutral-500">{el.name}</h3>
                            </div>
                        );
                    })}
                </div>
            </section>

            <footer className="min-h-96 mx-auto mt-48 bg-grid-small-red-600 bg-center relative flex justify-center items-end overflow-hidden">
                <div className="absolute w-[200%] md:w-auto -translate-x-1/4 md:translate-x-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_bottom,transparent_40%,black_70%)]"></div>
                <h2
                    className={`mb-14 text-2xl text-center shadow bg-[radial-gradient(ellipse_at_top,#000000aa,transparent)] ${font.className}`}
                >
                    Made with patience <br /> by{' '}
                    <Link
                        href="https://github.com/readyyyk"
                        className="underline text-red-600 hover:text-indigo-400 transition-colors"
                    >
                        @Readyyyk
                    </Link>
                </h2>
            </footer>
        </main>
    );
}

import React from 'react';

import { IconBrandGithubCopilot } from '@tabler/icons-react';
import {
    ArrowRightCircleIcon,
    BetweenHorizontalStartIcon,
    BinaryIcon,
    DatabaseIcon,
    FileTextIcon,
    HardDriveIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import aes from '@/assets/AES.png';
import logo from '@/assets/chapy192.png';
import heroImage from '@/assets/chapy-example.webp';
import Btn from '@/components/btn';
import CardBg from '@/components/card-bg';
import { LampContainer } from '@/components/lamp';
import { MacbookScroll } from '@/components/mac-scroll';

export default function HomePage() {
    return (
        <main>
            {/*  bg-[size:36px_36px] bg-[image:linear-gradient(to_right,#77777777_1px,transparent_1px),linear-gradient(to_bottom,#77777777_1px,transparent_1px);] */}
            <section className="h-[117dvh] md:h-[190dvh] lg:h-[240dvh] snap-start">
                <div className="absolute dark:bg-grid-white/[0.2] bg-grid-background/[0.2] w-full h-[100dvh] left-0 top-0">
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

                    <h2 className="text-2xl mt-20 text-sky-400">
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
                                className="flex gap-2 text-lg md:text-xl leading-tight"
                            >
                                Check it now
                                <ArrowRightCircleIcon />
                            </Link>
                        </Btn>
                        <Btn className="p-2 md:p-3 px-2.5 md:px-4">
                            <Link
                                href="https://github.com/readyyyk/ChaPy/"
                                target={'_blank'}
                                className="flex gap-2 text-lg md:text-xl leading-tight"
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
                    <div className="relative flex overflow-hidden ml-4 min-h-[115px]">
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
                    <div className="relative flex overflow-hidden ml-4 min-h-[115px] items-center">
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
            </section>
        </main>
    );
}

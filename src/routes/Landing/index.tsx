import {FC} from 'react';
import {Button} from '../../components';
import {Link} from 'react-router-dom';
import Feature from './Feature.tsx';
import Testimonial from './Testimonial.tsx';


const Landing:FC = ({}) => {
    document.documentElement.classList.add('dark');
    return (
        <section className="w-full bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            <div className="container mx-auto w-full p-6">
                <a className={'fixed right-2 top-2 z-50 cursor-pointer drop-shadow-[rgba(255,255,255,.2)_0px_0px_12px] transition-all md:right-8 md:top-8'} href={'https://chapy-beta.netlify.app'}>
                    <img
                        className={'w-28 animate-[spin_30s_infinite_linear] md:w-40'}
                        src="https://chapy-beta.netlify.app/chapy192.png"
                        alt="logo"
                    />
                    <h1 className={'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold md:text-4xl'}>Cha<i>Py</i></h1>
                </a>

                <Feature cols={4} rows={13} className={'max-w-[90dvw]'} elementClassName={''}/>

                <div className="relative z-20 flex h-[70dvh] flex-col items-center justify-center text-center md:py-24 lg:py-32">
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                            Transform your online conversations
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-xl md:text-2xl lg:text-3xl">
                            Experience the most innovative, user-friendly
                            chat application that helps you connect
                            with your friends and family.
                    </p>
                    <Button variant={'filled'} className="mt-6 rounded-md px-4 py-2 text-lg">Get in touch</Button>
                </div>

                <div
                    className='container mx-auto flex max-w-5xl'
                    style={{perspective: '100vw'}}
                >
                    <div
                        className={'shadow-animate hero-transform'}
                    >
                        <picture>
                            <source media="(max-width: 768px)" srcSet="/hero-m.png"/>
                            <img
                                alt="Hero"
                                className="w-full overflow-hidden rounded-md object-cover"
                                src="/hero.png"
                            />
                        </picture>
                    </div>
                </div>

                <div className="mt-32 grid grid-cols-1 gap-y-16 p-6 text-center md:grid-cols-2 md:gap-x-16 md:gap-y-32 ">
                    <div className="flex flex-col items-center">
                        <svg
                            className=" h-16 w-16 text-green-500"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <h3 className="mt-4 text-2xl font-bold">User-friendly</h3>
                        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                            Our app is designed with simplicity
                            in mind for an amazing user experience.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            className=" h-16 w-16 text-blue-500"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17 6.1H3" />
                            <path d="M21 12.1H3" />
                            <path d="M15.1 18H3" />
                        </svg>
                        <h3 className="mt-4 text-2xl font-bold">Real-time Messaging</h3>
                        <p className="mt-2 text-zinc-500 dark:text-zinc-400">Chat instantly with anyone, anywhere, at any time.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            className=" h-16 w-16 text-red-500"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <h3 className="mt-4 text-2xl font-bold">Secure Conversations</h3>
                        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                            Your privacy is our priority. Your
                            conversations are encrypted and secure.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            className=" h-16 w-16 text-purple-500"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                            <path d="M12 7v5l4 2" />
                        </svg>
                        <h3 className="mt-4 text-2xl font-bold">Share Your History</h3>
                        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                            Share your chat history with others.
                            Keep everyone in the loop.
                        </p>
                    </div>
                </div>

                <div className="py-12 md:py-24 lg:py-32">
                    <h2 className="text-center text-3xl font-bold">What our users say</h2>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Testimonial
                            text={'"I\'ve been using this new chat application for a few months now, and I\'m really impressed. The interface is easy to use. I feel much safer communicating with my loved ones knowing that our conversations are protected."'}
                            author={'Sarah, Nurse'}
                        />
                        <Testimonial
                            text={'"I\'m a journalist, and I need to communicate with my sources in a secure environment. This new chat application has been a lifesaver - it\'s easy to use, and the security features are robust. I feel confident that my conversations are private and secure."'}
                            author={'Rachel, Journalist'}
                        />
                        <Testimonial
                            text={'"This app has transformed the way I communicate. It\'s user-friendly and secure."'}
                            author={'Jane Doe'}
                        />
                    </div>
                </div>

                <footer className="rounded-md bg-zinc-200 py-6 dark:bg-zinc-800">
                    <div className="flex justify-center space-x-4">
                        <Link className="text-zinc-900 dark:text-zinc-100" to="https://github.com/readyyyk/ChaPy/blob/main/PRIVACY_POLICY">
                            Privacy Policy
                        </Link>
                        <Link className="text-zinc-900 dark:text-zinc-100" to="https://github.com/readyyyk/ChaPy/blob/main/CODE_OF_CONDUCT">
                            Code of Conduct
                        </Link>
                        <Link className="text-zinc-900 dark:text-zinc-100" to="https://github.com/readyyyk/ChaPy/blob/main/LICENSE">
                            License
                        </Link>
                    </div>
                    <div className="mt-4 flex justify-center space-x-4">
                        <Link to="https://github.com/readyyyk/ChaPy">
                            <svg
                                className="h-6 w-6 text-zinc-900 dark:text-zinc-100"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </Link>
                        <Link to="https://t.me/cha_py">
                            <svg
                                className="h-6 w-6 text-zinc-900 dark:text-zinc-100"
                                stroke="currentColor"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 50 50"
                            >
                                <path d='M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445 c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758 c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125 c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077 C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z'></path>
                            </svg>
                        </Link>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Landing;

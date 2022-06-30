import Link from "next/link";
import HeroHeaderText from "./HeroHeaderText";
import Modal from '../Modals/index'
import Button from "../Button";


export default function Header() {
    return (
        <div className="bg-primary bg-[url('/hero-image.png')] bg-cover">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <a href="/" className="mb-6 sm:mx-auto">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                                <svg
                                    className="animate-pulse duration-1000 delay-1000 w-10 h-10 stroke-primary/40"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </a>
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute -top-10 -left-64 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 lg:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                </span>
                                <HeroHeaderText />
                            </h2>
                            <Button buttonStyle="primary" type="link" href="/shop" className="mx-auto relative top-10">
                                <span>Angebote</span>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Benefits Showcase */}
                <div className="relative px-4 sm:px-0 mt-20">
                    <div className="absolute inset-0  h-1/2" />
                    <div className="relative grid mx-auto overflow-hidden bg-light-container dark:bg-dark-container divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                        <div className="inline-block p-8 text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="#00abe1"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold tracking-wide text-gray-800 dark:text-txt-light/90">
                                Besser
                            </p>
                        </div>
                        <div className="inline-block p-8 text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="#00abe1"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold tracking-wide text-gray-800 dark:text-txt-light/90">
                                Schneller
                            </p>
                        </div>
                        <div className="inline-block p-8 text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="#00abe1"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="font-bold tracking-wide text-gray-800 dark:text-txt-light/90">
                                Individueller
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
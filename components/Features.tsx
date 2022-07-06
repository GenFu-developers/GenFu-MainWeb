import Link from "next/link";
import Button from "./Button";

export default function Feature() {
    return (
        <div className="h-screen px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mt-24 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-secondary">
                        Alles an einem Ort
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-txt-light sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        Tranzparenz - eine kostenlose Dienstleistung
                    </span>
                </h2>
                <p className="text-base text-gray-700 dark:text-txt-light/80 md:text-lg">
                    Hier bekommst du einen Einblick in unseren Businessplan. Tiefe Transparenz ist eine unserer kostenlosen Dienstleistungen.
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-200 dark:bg-indigo-400">
                            <svg
                                className="animate-pulse duration-1000 w-10 h-10 stroke-txt-dark dark:stroke-txt-light"
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
                    </div>
                    <div>
                        <h6 className="mb-3 text-xl font-bold leading-5 dark:text-txt-light">Geschäftsidee</h6>
                        <p className="mb-3 text-sm text-gray-900 dark:text-txt-light/80">
                            Unsere Idee ist es, Brücken für Firmengründer, mittelständige Unternehmen und Privatpersonen zu bauen. Mit unseren individuellen Ansätzen beginnt deine Reise in die Digitalisierung.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-200 dark:bg-indigo-400">
                            <svg
                                className="animate-pulse duration-1000 w-10 h-10 stroke-txt-dark dark:stroke-txt-light"
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
                    </div>
                    <div>
                        <h6 className="mb-3 text-xl font-bold leading-5 dark:text-txt-light">
                            When has justice
                        </h6>
                        <p className="mb-3 text-sm text-gray-900 dark:text-txt-light/80">
                            Rough pomfret lemon shark plownose chimaera southern sandfish
                            kokanee northern sea robin Antarctic cod. Yellow-and-black
                            triplefin gulper South American Lungfish mahi-mahi, butterflyfish
                            glass catfish soapfish ling gray mullet!
                        </p>
                    </div>
                </div>
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-200 dark:bg-indigo-400">
                            <svg
                                className="animate-pulse duration-1000 w-10 h-10 stroke-txt-dark dark:stroke-txt-light"
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
                    </div>
                    <div>
                        <h6 className="mb-3 text-xl font-bold leading-5 dark:text-txt-light">
                            Organisches Wachstum
                        </h6>
                        <p className="mb-3 text-sm text-gray-900 dark:text-txt-light/80">
                            Unser Denken ist und war schon immer langfristig. Aus diesem Grunde, gehen wir gerne doppelte Wege und fokussieren uns darauf aus unseren Schwächen und Fehlern die wir machen und noch machen werden, zu lernen.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-200 dark:bg-indigo-400">
                            <svg
                                className="animate-pulse duration-1000 w-10 h-10 stroke-txt-dark dark:stroke-txt-light"
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
                    </div>
                    <div>
                        <h6 className="mb-3 text-xl font-bold leading-5 dark:text-txt-light">
                            A slice of heaven
                        </h6>
                        <p className="mb-3 text-sm text-gray-900 dark:text-txt-light/80">
                            Disrupt inspire and think tank, social entrepreneur but
                            preliminary thinking think tank compelling. Inspiring, invest
                            synergy capacity building, white paper; silo, unprecedented
                            challenge B-corp problem-solvers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
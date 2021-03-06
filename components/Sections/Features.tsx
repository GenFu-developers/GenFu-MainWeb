import Link from "next/link";
import Button from "../Button/Button";
import { motion } from 'framer-motion'
import { useScroll } from "../Framer/useScroll";
import { plopAnimation } from "../Framer/animations";
import ShortenText from "../ShortenText";

const featuresData = [
    {
        title: 'Geschäftsidee',
        text: `Unsere Idee ist es, Brücken für Firmengründer, mittelständige Unternehmen und 
               Privatpersonen zu bauen. Mit unseren individuellen Ansätzen beginnt deine Reise in die 
               Digitalisierung.`,
    },
    {
        title: 'Organisation und Team',
        text: `Wir, Pablo und Hannes, sind ein eingespieltes Team und brennen für die gleiche Sache. Wir öffnen unsere Türen für alle Menschen, die danach streben ihr maximales Potential zu nutzen um der Menschheit einen Mehrwert zu geben. `,
    },
    {
        title: 'Organisches Wachstum',
        text: `Unser Denken ist und war schon immer langfristig. Aus diesem Grunde, gehen wir gerne doppelte Wege
                und fokussieren uns darauf aus unseren Schwächen und Fehlern die wir machen und noch machen werden, zu lernen.`,
    },
    {
        title: 'Community',
        text: `Der Aufbau einer Community schafft ein gesundes und innovatives Umfeld, in dem wir gemeinsam an neuen Ideen und Softwarelösungen arbeiten können. `,
    },

]

export default function Feature() {
    const [element, controls] = useScroll()
    return (
        /* @ts-ignore */
        <div ref={element} className="mb-64 h-screen px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {/* @ts-ignore */}
            <motion.div animate={controls}
                variants={plopAnimation}
                transition={{
                    delay: 0.5,
                    type: "tween",
                    duration: .8,
                }}
                className="mt-24 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-secondary">
                        Alles an einem Ort
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-txt-light sm:text-4xl md:mx-auto">
                    <label className="relative inline-block">
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
                    </label>
                </h2>
                <p className="text-base text-gray-700 dark:text-txt-light/80 md:text-lg">
                    Hier bekommst du einen Einblick in unseren Businessplan. Tiefe Transparenz ist eine unserer kostenlosen Dienstleistungen.
                </p>
            </motion.div>
            <motion.div
                className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                {featuresData.map((item) => (
                    // @ts-ignore
                    <motion.div animate={controls}
                        variants={{
                            'hidden': { x: -400, y: 100, scale: 0, opacity: 0 },
                            'show': { x: 0, y: 0, scale: 1, opacity: 1 }
                        }}
                        transition={{
                            delay: 0.5,
                            type: "tween",
                            duration: .8,
                        }}
                        className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
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
                                {item.title}
                            </h6>
                            <ShortenText text={item.text} textLength={10} />
                        </div>
                    </motion.div>
                ))
                }


            </motion.div >
        </div >
    );
};
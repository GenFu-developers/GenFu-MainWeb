import AnImage from '../AnImage/index'
import { motion } from 'framer-motion';
import { useScroll } from '../Framer/useScroll';
import { boxAnimation } from '../Framer/animations';

export default function Product() {
    const [element, controls] = useScroll()
    return (
        // @ts-ignore
        <div ref={element} className="h-[80vh] mb-96 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="my-auto grid gap-12 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center order-last">
                    <div className="max-w-xl mb-6">
                        <motion.h2
                            // @ts-ignore
                            animate={controls}
                            variants={{
                                hidden: { scale: 0, opacity: 0, y: -400 },
                                show: { scale: 1, opacity: 1, y: 0 },
                            }}
                            transition={{
                                delay: 0.02,
                                type: "tween",
                                duration: 0.8,
                            }}
                            className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-txt-light sm:text-4xl sm:leading-none">
                            Was macht uns aus?
                        </motion.h2>
                        <motion.p
                            // @ts-ignore
                            animate={controls}
                            variants={{
                                hidden: { scale: 0, opacity: 0, x: 400 },
                                show: { scale: 1, opacity: 1, x: 0 },
                            }}
                            transition={{
                                delay: 0.02,
                                type: "tween",
                                duration: 0.8,
                            }}
                            className="text-base text-gray-700 dark:text-txt-light/80 md:text-lg">
                            Wir haben uns gegründet, um alte, moralische Werte zurück zu bringen.
                            Die Rede ist von Vertrauen, Leidenschaft und Liebe.
                            <br />
                            Was das für uns bedeutet siehst du --hier--. {'(Leidenschaft Liebe Vertrauen erklärt)'}
                        </motion.p>
                    </div>
                    <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                        {/* @ts-ignore */}
                        <motion.div animate={controls}
                            variants={boxAnimation}
                            transition={{
                                delay: 0.02,
                                type: "tween",
                                duration: 0.8,
                            }}>
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-200 dark:bg-indigo-400">
                                <svg
                                    className="w-10 h-10 stroke-txt-dark dark:stroke-txt-light animate-pulse duration-1000"
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
                            <h6 className="mb-2 font-semibold text-xl md:text-2xl leading-5 dark:text-txt-light">
                                Dienstleistung
                            </h6>
                            <p className="text-md text-gray-900 dark:text-txt-light/80">
                                Wir stehen für individuelle, qualitativ hochwertige und schnelle Arbeit. Eine tiefgehende Zusammenarbeit mit unseren Kunden verspricht das gewünschte Endprodukt.
                            </p>
                        </motion.div>
                        {/* @ts-ignore */}
                        <motion.div animate={controls}
                            variants={boxAnimation}
                            transition={{
                                delay: 0.02,
                                type: "tween",
                                duration: 0.8,
                            }}>
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
                            <h6 className="mb-2 font-semibold text-xl md:text-2xl leading-5 dark:text-txt-light">
                                Kundenverhältnis
                            </h6>
                            <p className="text-md text-gray-900 dark:text-txt-light/80">
                                Bei GenFu steht der Kunde und seine Bedürfnisse an erster Stelle.
                                Kapitalismus ohne Moral ist für uns keine Wahl!
                            </p>
                        </motion.div>
                    </div>
                </div>
                <AnImage
                    className="w-10/12 h-56 shadow-lg mx-auto sm:h-96"
                    src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                />

            </div>
        </div>
    );
};
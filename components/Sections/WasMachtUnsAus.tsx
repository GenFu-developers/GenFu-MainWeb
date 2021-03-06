import AnImage from '../AnImage/index'
import { motion } from 'framer-motion';
import { useScroll } from '../Framer/useScroll';
import { boxAnimation } from '../Framer/animations';
import Modal from '../Modals/index';
import ShortenText from '../ShortenText';

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
                            Wir sind innovative Vision??re, mit dem Willen, Wissen zu vermitteln und Probleme zu l??sen.
                            Unser einmaliges Versprechen ist...
                            <Modal buttonText='mehr...' buttonStyle='none'>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-shadow-md-dark text-4xl font-black text-primary'>Was macht uns aus?</h1>
                                    <p className='border-l-2 pl-4'>
                                        Wir sind innovative Vision??re, mit dem Willen, Wissen zu vermitteln und Probleme zu l??sen.
                                        Unser einmaliges Versprechen ist, dass der Kunde immer ??ber den Stand der Entwicklung seiner Homepage informiert ist.
                                        Die aktuelle Marktsituation und neue Trends haben wir im Blick.
                                        F??r GenFu ist Transparenz das oberste Gebot. Unsere Kunden kennen unseren Businessplan und unsere Skalierung.
                                    </p>
                                </div>
                            </Modal>
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
                            {/* <p className="text-md text-gray-900 dark:text-txt-light/80">
                                Wir haben es uns zur Aufgabe gemacht, alle W-Fragen rund um das Thema Websites zu beantworten,
                                <div className=''>
                                    Websites zu erstellen, zu pflegen/Warten und insgesamt Probleme zu l??sen, die verbunden mit
                                    digitalen Dienstleistungen auftreten.
                                </div>
                            </p> */}
                            <ShortenText
                                text='Wir haben es uns zur Aufgabe gemacht, alle W-Fragen rund um das Thema 
                                    Websites zu beantworten, Websites zu erstellen, zu pflegen/Warten und 
                                    insgesamt Probleme zu l??sen, die verbunden mit digitalen Dienstleistungen 
                                    auftreten.' textLength={20} />
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
                                Kundenverh??ltnis
                            </h6>
                            <ShortenText
                                text='Eine starke Kundenbindung geh??rt f??r uns bei GenFu 
                                mit zu den fundamentalen Elementen. W??rden wir das nicht anstreben, w??re 
                                unser Unterfangen sinnlos. Vertrauen zur??ckbringen, welches durch fehlende Dienstleistungen verloren gegangen ist.' textLength={20} />
                        </motion.div>
                    </div>
                </div>
                <AnImage
                    className="w-10/12 h-56 shadow-lg mx-auto sm:h-96 my-auto"
                    src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                />

            </div>
        </div >
    );
};
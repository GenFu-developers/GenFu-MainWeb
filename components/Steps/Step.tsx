import { motion } from "framer-motion";
import { useScroll } from "../Framer/useScroll";
import { plopAnimation } from "../Framer/animations";
import Modal from "../Modals/index";
import ShortenText from "../ShortenText";

interface Step {
    title: string;
    text: string;
    icon: JSX.Element;
    idx: number;
    last?: boolean
}

export default function Step({ title, text, icon, idx, last }: Step) {
    const [element, controls] = useScroll()
    return (
        // @ts-ignore
        <div ref={element}
            className={`relative text-center ${idx % 2 === 0 ? '-top-14' : '-bottom-14'}`}>
            {/* @ts-ignore */}
            <motion.h5 animate={controls}
                variants={{
                    hidden: { y: -50, opacity: 0 },
                    show: { y: -0, opacity: 1 },
                }}
                transition={{
                    duration: .8,
                    delay: .4
                }}
                className="mb-2 text-2xl font-black text-txt-dark dark:text-txt-light">
                {title}
            </motion.h5>
            <label className="italic relative -top-3">{'SCHRITT ' + `${idx + 1}`}</label>
            {/* @ts-ignore */}
            <motion.div animate={controls}
                variants={{
                    hidden: { opacity: 0, scale: 0 },
                    show: { opacity: 1, scale: 1 }
                }}
                transition={{
                    duration: .6,
                    delay: 1.5
                }}
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-200 dark:bg-indigo-400 sm:w-20 sm:h-20">
                {icon}
            </motion.div>
            <div className="flex flex-col md:flex-row md:gap-2 text-txt-dark/70 dark:text-txt-light/70">
                <div className="mx-auto flex flex-col  relative md:-top-10 gap-5 mt-10">
                    {/* @ts-ignore */}
                    <motion.p animate={controls}
                        variants={{
                            hidden: { opacity: 0, x: 400 },
                            show: { opacity: 1, x: 0 }
                        }}
                        transition={{
                            duration: 1,
                            delay: .7
                        }}
                        className="max-w-xs mb-3 text-sm sm:mx-auto">
                        <ShortenText textLength={9} text={text} />
                    </motion.p>
                </div>
            </div>
            {/* <Modal buttonText="mehr..." buttonStyle="none" buttonClassName="mx-auto relative -top-20  ">
                <div>
                    pop up div
                </div>
            </Modal> */}
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                {idx === 2 || last ? null :
                    // @ts-ignore
                    <motion.svg animate={controls}
                        variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1 }
                        }}
                        transition={{
                            duration: 1,
                            delay: 1
                        }}
                        className="w-8 text-txt-dark/80 dark:text-txt-light/80 transform rotate-90 lg:rotate-0"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="2"
                            y1="12"
                            x2="22"
                            y2="12"
                        />
                        <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="15,5 22,12 15,19 "
                        />
                    </motion.svg>}
            </div>
        </div>
    );
};

/*
*/
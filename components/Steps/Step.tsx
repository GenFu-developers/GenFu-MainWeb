import { motion } from "framer-motion";
import { useScroll } from "../Framer/useScroll";
import { plopAnimation } from "../Framer/animations";
import Modal from "../Modals/index";
import ShortenText from "../ShortenText";

interface Step {
    title: string;
    text: {
        service: string
        customer: string,
    };
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
                SCHRITT {idx + 1}
            </motion.h5>
            <label className="italic relative -top-3">{title}</label>
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
                <div className="mx-auto flex flex-col  relative md:-top-10 gap-5">
                    {/* @ts-ignore */}
                    <motion.svg animate={controls}
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            show: { opacity: 1, scale: 1 }
                        }}
                        transition={{
                            duration: .6,
                            delay: .9
                        }}
                        className="mx-auto fill-txt-dark dark:fill-txt-light" width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.4113 28.6235C35.7388 27.928 27.5894 24.6169 26.1106 23.9923C24.6396 23.3786 24.0528 21.6781 24.0528 21.6781C24.0528 21.6781 23.3907 22.0626 23.3907 20.9826C23.3907 19.9011 24.0528 21.6781 24.7149 17.5078C24.7149 17.5078 26.552 16.9664 26.1872 12.4894H25.7458C25.7458 12.4894 26.8493 7.70272 25.7458 6.08262C24.6383 4.46253 24.2047 3.38247 21.773 2.60788C19.3452 1.83465 20.228 1.98875 18.4649 2.06785C16.6992 2.14558 15.2296 3.14927 15.2296 3.68794C15.2296 3.68794 14.126 3.76567 13.6872 4.22934C13.2457 4.693 12.5109 6.85312 12.5109 7.39315C12.5109 7.93319 12.8783 11.5661 13.2457 12.3353L12.8082 12.4853C12.4408 16.9637 14.2779 17.5065 14.2779 17.5065C14.94 21.6767 15.6022 19.8998 15.6022 20.9812C15.6022 22.0613 14.94 21.6767 14.94 21.6767C14.94 21.6767 14.3519 23.3759 12.8822 23.9909C11.4125 24.6087 3.25403 27.928 2.5906 28.6221C1.92847 29.3312 2.00247 32.5714 2.00247 32.5714H17.6288L18.7687 27.853L17.756 26.7893L19.4997 24.9551L21.2433 26.7879L20.2306 27.8516L21.3705 32.5701H36.9968C36.9968 32.5701 37.0786 29.3271 36.4087 28.6194L36.4113 28.6235Z" />
                    </motion.svg>
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
                        <ShortenText textLength={9} text={text.customer} />
                    </motion.p>
                </div>
                <div className="mx-auto flex flex-col  relative md:-top-10 gap-5">
                    {/* @ts-ignore */}
                    <motion.svg animate={controls}
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            show: { opacity: 1, scale: 1 }
                        }}
                        transition={{
                            duration: .6,
                            delay: .9
                        }}
                        className="mx-auto fill-txt-dark dark:fill-txt-light" width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 1.59534C18.8604 1.59534 18.2272 1.72142 17.6363 1.9664C17.0454 2.21138 16.5085 2.57044 16.0563 3.0231C15.6041 3.47575 15.2453 4.01313 15.0006 4.60456C14.7558 5.19598 14.6299 5.82986 14.6299 6.47002C14.6299 7.11017 14.7558 7.74405 15.0006 8.33547C15.2453 8.9269 15.6041 9.46428 16.0563 9.91693C16.5085 10.3696 17.0454 10.7287 17.6363 10.9736C18.2272 11.2186 18.8604 11.3447 19.5 11.3447C20.7916 11.3447 22.0304 10.8311 22.9437 9.91693C23.857 9.00275 24.3701 7.76286 24.3701 6.47002C24.3701 5.17717 23.857 3.93728 22.9437 3.0231C22.0304 2.10892 20.7916 1.59534 19.5 1.59534V1.59534ZM30.4688 4.03024C29.4991 4.03024 28.5691 4.41581 27.8834 5.10213C27.1977 5.78845 26.8125 6.7193 26.8125 7.6899C26.8125 8.66051 27.1977 9.59136 27.8834 10.2777C28.5691 10.964 29.4991 11.3496 30.4688 11.3496C31.4384 11.3496 32.3684 10.964 33.0541 10.2777C33.7398 9.59136 34.125 8.66051 34.125 7.6899C34.125 6.7193 33.7398 5.78845 33.0541 5.10213C32.3684 4.41581 31.4384 4.03024 30.4688 4.03024V4.03024ZM8.53125 4.03024C7.56155 4.03024 6.63157 4.41581 5.94589 5.10213C5.26021 5.78845 4.875 6.7193 4.875 7.6899C4.875 8.66051 5.26021 9.59136 5.94589 10.2777C6.63157 10.964 7.56155 11.3496 8.53125 11.3496C9.50095 11.3496 10.4309 10.964 11.1166 10.2777C11.8023 9.59136 12.1875 8.66051 12.1875 7.6899C12.1875 6.7193 11.8023 5.78845 11.1166 5.10213C10.4309 4.41581 9.50095 4.03024 8.53125 4.03024ZM12.1875 16.2121C12.192 15.5679 12.4508 14.9518 12.9074 14.4979C13.3641 14.044 13.9815 13.7893 14.625 13.7894H24.375C25.0215 13.7894 25.6415 14.0464 26.0986 14.5039C26.5557 14.9615 26.8125 15.5821 26.8125 16.2291V23.5485C26.8123 24.3163 26.6923 25.0794 26.4566 25.8101C25.9169 27.466 24.8051 28.8751 23.3208 29.7843C21.8366 30.6935 20.0771 31.0433 18.3583 30.7709C16.6396 30.4985 15.0742 29.6217 13.9432 28.2979C12.8122 26.9742 12.1897 25.2903 12.1875 23.5485V16.2121ZM9.75 16.2291C9.75 15.3386 9.98644 14.5066 10.4033 13.7894H4.875C4.22854 13.7894 3.60855 14.0464 3.15143 14.5039C2.69431 14.9615 2.4375 15.5821 2.4375 16.2291V22.3286C2.43717 23.3272 2.6818 24.3106 3.14992 25.1925C3.61803 26.0743 4.29531 26.8277 5.12227 27.3863C5.94923 27.945 6.90057 28.2919 7.89276 28.3965C8.88495 28.5011 9.88763 28.3603 10.8128 27.9864C10.1112 26.6118 9.74688 25.0896 9.75 23.546V16.2291ZM29.25 16.2291V23.5485C29.25 25.1465 28.8673 26.6543 28.1873 27.9864C29.1124 28.3603 30.115 28.5011 31.1072 28.3965C32.0994 28.2919 33.0508 27.945 33.8777 27.3863C34.7047 26.8277 35.382 26.0743 35.8501 25.1925C36.3182 24.3106 36.5628 23.3272 36.5625 22.3286V16.2291C36.5625 15.5821 36.3057 14.9615 35.8486 14.5039C35.3915 14.0464 34.7715 13.7894 34.125 13.7894H28.5968C29.0111 14.5066 29.25 15.3386 29.25 16.2291Z" />
                    </motion.svg>
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
                        className="max-w-xs  mb-3 text-sm sm:mx-auto">
                        <ShortenText textLength={9} text={text.service} />
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
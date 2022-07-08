import { motion } from "framer-motion";
import { useScroll } from "./Framer/useScroll";
import { plopAnimation } from "./Framer/animations";

const stepData = [
    {
        title: `Analysegespräch`,
        text: {
            service: 'Im Analysegespräch finden wir herraus was für ein Paket am besten für dich ist und welche Daten für die Entwicklung der Website benötigt werden.',
            customer: 'Im Analysegespräch finden wir herraus was für ein Paket am besten für dich ist und welche Daten für die Entwicklung der Website benötigt werden.'
        },
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    },
    {
        title: `Erstentwurf`,
        text: {
            service: 'Nun bekommst du einen Erstentwurf vom ungefähren aussehen und den Funktionalitäten der Website.',
            customer: 'Nun bekommst du einen Erstentwurf vom ungefähren aussehen und den Funktionalitäten der Website.'
        },
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
    },
    {
        title: `Umsetzung`,
        text: {
            service: 'Wenn du zufrieden mit dem Erstentwurf bist kommen wir zur Umsetzung und fangen an deine Website technisch zu entwickeln.',
            customer: 'Wenn du zufrieden mit dem Erstentwurf bist kommen wir zur Umsetzung und fangen an deine Website technisch zu entwickeln.'
        },
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>
    },
    {
        title: `Umsetzung`,
        text: {
            service: 'Nach vollendeter Umsetzung hast du noch die Möglichkeit die Feinheiten nachbessern zu lassen.',
            customer: 'Nach vollendeter Umsetzung hast du noch die Möglichkeit die Feinheiten nachbessern zu lassen.'
        },
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    },
    {
        title: ``,
        text: {
            service: 'Nun hast du deine fertige Website und kannst diese entweder über uns oder auf eigene Faust online stellen.',
            customer: 'Nun hast du deine fertige Website und kannst diese entweder über uns oder auf eigene Faust online stellen.'
        },
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    },
]

export default function Steps() {
    const [element, controls] = useScroll()
    const checkpointLine = (idx: number) => {
        if (idx === 0) return 'top-[3.8rem] h-36'
        if (idx === stepData.length - 1) return '-top-[4.2rem] h-20'
        return true
    }
    return (
        //@ts-ignore 
        <div ref={element} className="text-gray-600 body-font px-5 mb-40">
            {/* header */}
            {/* @ts-ignore */}
            <motion.div animate={controls} variants={plopAnimation} transition={{
                delay: 0.02,
                type: "tween",
                duration: 0.8,
            }}
                className="container px-5  mx-auto">
                <div className="text-center">
                    <h1 className="sm:text-3xl text-2xl  title-font text-txt-dark dark:text-txt-light font-bold mb-4">In 5 Schritten zu deiner Website!</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-txt-dark/70 dark:text-txt-light/70">Wir legen viel Wert darauf dass unsere Kunden wissen wie ihre Website entsteht. Im folgenden sind alle nötigen Schritte bis zum Abschluss der Website aufgelistet.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-secondary inline-flex"></div>
                    </div>
                </div>
            </motion.div>
            <div className="">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    {stepData.map((item, idx) => (
                        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3  mx-auto">
                            {/* @ts-ignore */}
                            <motion.div animate={controls}
                                variants={{
                                    hidden: { opacity: 0, x: -400 },
                                    show: { opacity: 1, x: 0 }
                                }}
                                transition={{
                                    delay: 0.4,
                                    type: "tween",
                                    duration: 0.8,
                                }}
                                className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className={`h-full relative ${checkpointLine(idx)} w-1 bg-txt-dark/50 dark:bg-txt-light/50 pointer-events-none`}></div>
                            </motion.div>
                            {/* @ts-ignore */}
                            < motion.div animate={controls}
                                variants={{
                                    hidden: { opacity: 0, x: -400 },
                                    show: { opacity: 1, x: 0 }
                                }}
                                transition={{
                                    delay: 0.4,
                                    type: "tween",
                                    duration: 0.8,
                                }}
                                className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{idx + 1}</motion.div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                {/* @ts-ignore */}
                                <motion.div animate={controls}
                                    variants={{
                                        hidden: { opacity: 0, x: -400 },
                                        show: { opacity: 1, x: 0 }
                                    }}
                                    transition={{
                                        delay: 0.4,
                                        type: "tween",
                                        duration: 0.8,
                                    }}
                                    className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    {item.icon}
                                </motion.div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-txt-dark dark:text-txt-light mb-1 text-xl">{item.title}</h2>
                                    <div className="flex flex-col lg:flex-row gap-4">
                                        {/* Company Text */}
                                        {/* @ts-ignore */}
                                        <motion.div animate={controls}
                                            variants={plopAnimation}
                                            transition={{
                                                delay: 0.4,
                                                type: "tween",
                                                duration: 0.8,
                                            }}
                                            className="flex flex-col gap-3">
                                            <svg className="fill-txt-dark/60 dark:fill-txt-light/60" width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 1.43176C16.926 1.43176 16.3577 1.54492 15.8274 1.76477C15.2972 1.98462 14.8154 2.30686 14.4095 2.71309C14.0037 3.11932 13.6817 3.60158 13.4621 4.13234C13.2424 4.66311 13.1294 5.23198 13.1294 5.80647C13.1294 6.38097 13.2424 6.94984 13.4621 7.4806C13.6817 8.01137 14.0037 8.49363 14.4095 8.89986C14.8154 9.30609 15.2972 9.62833 15.8274 9.84818C16.3577 10.068 16.926 10.1812 17.5 10.1812C18.6592 10.1812 19.7708 9.72028 20.5905 8.89986C21.4101 8.07944 21.8706 6.96672 21.8706 5.80647C21.8706 4.64623 21.4101 3.5335 20.5905 2.71309C19.7708 1.89267 18.6592 1.43176 17.5 1.43176V1.43176ZM27.3438 3.61693C26.4735 3.61693 25.6389 3.96295 25.0236 4.57888C24.4082 5.19481 24.0625 6.03019 24.0625 6.90125C24.0625 7.7723 24.4082 8.60768 25.0236 9.22361C25.6389 9.83954 26.4735 10.1856 27.3438 10.1856C28.214 10.1856 29.0486 9.83954 29.6639 9.22361C30.2793 8.60768 30.625 7.7723 30.625 6.90125C30.625 6.03019 30.2793 5.19481 29.6639 4.57888C29.0486 3.96295 28.214 3.61693 27.3438 3.61693V3.61693ZM7.65625 3.61693C6.78601 3.61693 5.95141 3.96295 5.33606 4.57888C4.7207 5.19481 4.375 6.03019 4.375 6.90125C4.375 7.7723 4.7207 8.60768 5.33606 9.22361C5.95141 9.83954 6.78601 10.1856 7.65625 10.1856C8.52649 10.1856 9.36109 9.83954 9.97645 9.22361C10.5918 8.60768 10.9375 7.7723 10.9375 6.90125C10.9375 6.03019 10.5918 5.19481 9.97645 4.57888C9.36109 3.96295 8.52649 3.61693 7.65625 3.61693ZM10.9375 14.5493C10.9415 13.9713 11.1738 13.4183 11.5836 13.011C11.9934 12.6037 12.5475 12.3751 13.125 12.3751H21.875C22.4552 12.3751 23.0116 12.6058 23.4218 13.0164C23.832 13.427 24.0625 13.984 24.0625 14.5647V21.1333C24.0624 21.8224 23.9546 22.5072 23.7431 23.163C23.2588 24.6491 22.261 25.9136 20.9289 26.7295C19.5969 27.5455 18.0179 27.8594 16.4754 27.6149C14.933 27.3705 13.5281 26.5836 12.5131 25.3956C11.4981 24.2077 10.9395 22.6964 10.9375 21.1333V14.5493ZM8.75 14.5647C8.75 13.7655 8.96219 13.0188 9.33625 12.3751H4.375C3.79484 12.3751 3.23844 12.6058 2.8282 13.0164C2.41797 13.427 2.1875 13.984 2.1875 14.5647V20.0385C2.1872 20.9347 2.40674 21.8173 2.82685 22.6087C3.24695 23.4001 3.85476 24.0762 4.5969 24.5775C5.33905 25.0789 6.19282 25.3902 7.08325 25.4841C7.97368 25.578 8.87352 25.4516 9.70375 25.1161C9.07414 23.8824 8.7472 22.5164 8.75 21.1311V14.5647ZM26.25 14.5647V21.1333C26.25 22.5674 25.9066 23.9206 25.2963 25.1161C26.1265 25.4516 27.0263 25.578 27.9168 25.4841C28.8072 25.3902 29.661 25.0789 30.4031 24.5775C31.1452 24.0762 31.7531 23.4001 32.1732 22.6087C32.5933 21.8173 32.8128 20.9347 32.8125 20.0385V14.5647C32.8125 13.984 32.582 13.427 32.1718 13.0164C31.7616 12.6058 31.2052 12.3751 30.625 12.3751H25.6638C26.0356 13.0188 26.25 13.7655 26.25 14.5647Z" />
                                            </svg>

                                            <p className="text-txt-dark/60 dark:text-txt-light/50">{item.text.service}</p>
                                        </motion.div>
                                        {/* Customer Text */}
                                        {/* @ts-ignore */}
                                        <motion.div animate={controls}
                                            variants={plopAnimation}
                                            transition={{
                                                delay: 0.4,
                                                type: "tween",
                                                duration: 0.8,
                                            }}
                                            className="flex flex-col gap-3">
                                            <svg className="fill-txt-dark/60 dark:fill-txt-light/60"
                                                width="35" height="30" viewBox="0 0 435 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M427.506 329.844C419.161 321.238 318.038 280.266 299.689 272.537C281.436 264.943 274.155 243.9 274.155 243.9C274.155 243.9 265.938 248.659 265.938 235.294C265.938 221.912 274.155 243.9 282.371 192.296C282.371 192.296 305.166 185.597 300.639 130.196H295.162C295.162 130.196 308.855 70.965 295.162 50.9175C281.42 30.87 276.039 17.505 245.865 7.92C215.74 -1.64812 226.694 0.258754 204.817 1.2375C182.907 2.19938 164.671 14.6194 164.671 21.285C164.671 21.285 150.977 22.2469 145.532 27.9844C140.055 33.7219 130.937 60.4519 130.937 67.1344C130.937 73.8169 135.496 118.772 140.055 128.289L134.626 130.146C130.067 185.563 152.862 192.279 152.862 192.279C161.078 243.883 169.294 221.895 169.294 235.277C169.294 248.642 161.078 243.883 161.078 243.883C161.078 243.883 153.781 264.909 135.544 272.52C117.308 280.164 16.0723 321.238 7.84008 329.828C-0.376023 338.603 0.542245 378.698 0.542245 378.698H194.442L208.587 320.31L196.021 307.148L217.657 284.451L239.292 307.131L226.727 320.293L240.871 378.681H434.771C434.771 378.681 435.786 338.552 427.473 329.794L427.506 329.844Z" />
                                            </svg>
                                            <p className="text-txt-dark/60 dark:text-txt-light/50">{item.text.customer}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    );
};

/*
*/
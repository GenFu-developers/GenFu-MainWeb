import React from 'react'
import { motion } from 'framer-motion'
import AnImage from './AnImage/index'
import { plopAnimation } from './Framer/animations'
import { useScroll } from './Framer/useScroll';

function Partner() {
    const [element, controls] = useScroll()
    return (
        // @ts-ignore
        <div ref={element} className="max-w-screen-xl p-4 mx-auto px-4 sm:px-6 lg:px-8  flex flex-col gap-12" id="partner">
            <div className="order-last">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                        {/* @ts-ignore */}
                        <motion.div animate={controls}
                            variants={plopAnimation}
                            transition={{
                                delay: 0.5,
                                type: "tween",
                                duration: .8,
                            }}
                        >
                            <p className="text-base leading-6 text-primary font-semibold uppercase">
                                Partner
                            </p>
                            <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                                Interactivity between team members is the key of the success.
                            </h4>
                            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
                            </p>
                        </motion.div>
                        {/* @ts-ignore */}
                        <motion.ul animate={controls}
                            variants={{
                                hidden: { scale: 0, opacity: 0, x: 600 },
                                show: { scale: 1, opacity: 1, x: 0 },
                            }}
                            transition={{
                                delay: 0.5,
                                type: "tween",
                                duration: .8,
                            }}
                            className="mt-8 md:grid md:grid-cols-2 gap-6">
                            <li
                                key={0} className="mt-6 lg:mt-0">
                                <div className="flex"
                                >
                                    <span
                                        className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Live modifications
                                    </span>
                                </div>
                            </li>
                            <li key={1} className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Data tracker
                                    </span>
                                </div>
                            </li>
                            <li key={2} className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        24/24 support
                                    </span>
                                </div>
                            </li>
                            <li key={3} className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Free tips to improve work time
                                    </span>
                                </div>
                            </li>
                        </motion.ul>
                    </div>
                    <div className="mt-10 lg:-mx-4  lg:mt-0 lg:col-start-1">
                        <div className="flex flex-col gap-7">
                            <div className="flex items-end gap-7 justify-center lg:justify-start">
                                <AnImage className="w-32 md:w-56" src="https://cdn.pixabay.com/photo/2022/06/23/09/46/mountain-7279430_960_720.jpg" alt="1" />
                                <AnImage className="w-40 md:w-64" src="https://cdn.pixabay.com/photo/2022/03/01/00/12/tree-7040298_960_720.jpg" alt="2" />
                            </div>
                            <div className="flex items-start gap-7 justify-center lg:justify-start">
                                <AnImage className="w-24 md:w-40" src="https://cdn.pixabay.com/photo/2022/06/03/03/50/beach-7239311_960_720.jpg" alt="3" />
                                <AnImage className="w-32 md:w-56" src="https://cdn.pixabay.com/photo/2022/02/25/04/11/traffic-7033509_960_720.jpg" alt="4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="lg:max-w-2xl ml-auto">
                        {/* @ts-ignore */}
                        <motion.div animate={controls}
                            variants={plopAnimation}
                            transition={{
                                delay: 0.5,
                                type: "tween",
                                duration: .8,
                            }}
                        >
                            <p className="text-base leading-6 text-primary font-semibold uppercase">
                                Partner
                            </p>
                            <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                                Interactivity between team members is the key of the success.
                            </h4>
                            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
                            </p>
                        </motion.div>
                        {/* @ts-ignore */}
                        <motion.ul animate={controls}
                            variants={{
                                hidden: { scale: 0, opacity: 0, x: 600 },
                                show: { scale: 1, opacity: 1, x: 0 },
                            }}
                            transition={{
                                delay: 0.5,
                                type: "tween",
                                duration: .8,
                            }}
                            className="mt-8 md:grid md:grid-cols-2 gap-6">
                            <li
                                key={0} className="mt-6 lg:mt-0">
                                <div className="flex"
                                >
                                    <span
                                        className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Live modifications
                                    </span>
                                </div>
                            </li>
                            <li key={1} className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Data tracker
                                    </span>
                                </div>
                            </li>
                            <li key={2} className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        24/24 support
                                    </span>
                                </div>
                            </li>
                            <li key={3} className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Free tips to improve work time
                                    </span>
                                </div>
                            </li>
                        </motion.ul>
                    </div>
                    <div className="mt-10 lg:-mx-4 lg:mt-0 lg:col-start-2">
                        <div className="flex flex-col gap-7">
                            <div className="flex items-end gap-7 justify-center lg:justify-start">
                                <AnImage className="w-32 md:w-56" src="https://cdn.pixabay.com/photo/2022/06/23/09/46/mountain-7279430_960_720.jpg" alt="1" />
                                <AnImage className="w-40 md:w-64" src="https://cdn.pixabay.com/photo/2022/03/01/00/12/tree-7040298_960_720.jpg" alt="2" />
                            </div>
                            <div className="flex items-start gap-7 justify-center lg:justify-start ml-12">
                                <AnImage className="w-24 md:w-40" src="https://cdn.pixabay.com/photo/2022/06/03/03/50/beach-7239311_960_720.jpg" alt="3" />
                                <AnImage className="w-32 md:w-56" src="https://cdn.pixabay.com/photo/2022/02/25/04/11/traffic-7033509_960_720.jpg" alt="4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Partner
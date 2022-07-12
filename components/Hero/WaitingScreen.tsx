import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/index'
import BigLogo from '../Logo/big'
import ThemeSwitcher from '../ThemeSwitchButton'
import { motion } from 'framer-motion'


function WaitingScreen() {
    const [currentForm, setCurrentForm] = useState({ 'email': '', 'select': '', })
    const [isSSRDone, setIsSSRDone] = useState(false)
    useEffect(
        function afterMount() {
            setIsSSRDone(true);
        },
        [],
    );

    return (
        <div className='min-h-screen background-light dark:background-dark pt-20'>
            <div className='absolute right-0 top-5'>
                {isSSRDone &&
                    <ThemeSwitcher />
                }
            </div>
            <BigLogo containerClassName='mx-auto' className='max-h-10 md:max-h-12 h-full lg:max-h-20 ' />
            {/* Call To Action */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-txt-dark dark:text-txt-light">Master Cleanse Reliac Heirloom</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-txt-dark/70 dark:text-txt-light/70">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
                    </div>
                    <form action='/api/waitinglist' method='POST'
                        className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full flex flex-col gap-1">
                            <Dropdown dropdownItems={[
                                { name: 'item 1', value: 'item-1' },
                                { name: 'item 2', value: 'item-2' },
                                { name: 'item 3', value: 'item-3' },
                            ]} onChange={(value: string) => {
                                setCurrentForm({
                                    email: currentForm.email,
                                    select: value,
                                })
                            }} />
                        </div>
                        <div className="relative flex-grow w-full flex-col gap-1">
                            <label className="leading-7 text-sm text-txt-dark/50 dark:text-txt-light/50">Email</label>
                            <input type="email" required name="email" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 bg-transparent focus:ring-2 focus:ring-primary text-base outline-none text-txt-dark/70 dark:text-txt-light/70 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .9 }}
                            className="mx-auto text-white bg-primary-green focus:ring-primary border-0 py-2 px-8 focus:outline-none hover:brightness-110 rounded text-lg">Absenden</motion.button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default WaitingScreen
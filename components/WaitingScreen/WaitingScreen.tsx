import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Components
import Dropdown from '../Dropdown/index'
import BigLogo from '../Logo/big'
import ThemeSwitcher from '../ThemeSwitchButton'
import Countdown from '../Countdown/index'
import DatenschutzModal from './DatenschutzModal'
import KontaktModal from './KontaktModal'
import Button from '../Button/Button'
import Modal from '../Modals/index'

import ParticlesComponent from '../Particles/WaitingscreenParticles'

function WaitingScreen() {
    const [currentForm, setCurrentForm] = useState({ email: '', select: '', newsletter: false })
    const [isSSRDone, setIsSSRDone] = useState(false)
    useEffect(
        function afterMount() {
            setIsSSRDone(true);
        },
        [],
    );


    function Content() {
        return (
            <div className=''>
                <div className='absolute right-0 top-5'>
                    {/* {isSSRDone &&
                        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 3, type: 'spring' }} >
                            <ThemeSwitcher />
                        </motion.div>
                    } */}
                </div>
                <motion.div animate={{ scale: 1, y: 0 }}
                    initial={{ scale: 0, y: -100 }}
                    transition={{ delay: .2, duration: .5, type: 'spring' }}>
                    <BigLogo containerClassName='mx-auto' className='max-h-10 md:max-h-12 h-full lg:max-h-20 ' />
                </motion.div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <Countdown />
                        <motion.div className="mt-10 flex flex-col text-center w-full mb-12"
                            animate={{ scale: 1, opacity: 1 }}
                            initial={{ scale: 0, opacity: 0 }}
                            transition={{ delay: 1.6, type: 'spring' }}>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-txt-dark dark:text-txt-light">
                                Master Cleanse Reliac Heirloom</h1>
                            <p className="lg:w-2/3 mx-auto max-w-screen-sm md:scale-125 leading-relaxed text-base text-txt-dark/70 dark:text-txt-light/70">
                                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify,
                                subway tile poke farm-to-table. Franzen you probably haven't heard of them
                                man bun deep.
                            </p>
                        </motion.div>
                        <motion.form action='/api/waitinglist' method='POST'
                            animate={{ x: 0, opacity: 1 }}
                            initial={{ x: -120, opacity: 0 }}
                            transition={{ delay: 1.8, duration: 1, type: 'spring' }}
                            className="flex flex-col flex-grow gap-5 container max-w-2xl">

                            <div className="relative flex-grow w-full flex flex-col md:flex-row gap-5">
                                <div className='w-full'>
                                    <Dropdown dropdownItems={[
                                        { name: 'Business', value: 'business' },
                                        { name: 'Selbstst??ndig', value: 'selbstst??ndig' },
                                        { name: 'Privat', value: 'privat' },
                                    ]} onChange={(value: string) => {
                                        setCurrentForm({
                                            email: currentForm.email,
                                            select: value,
                                            newsletter: currentForm.newsletter
                                        })
                                    }} />
                                </div>
                                <div className="relative flex-grow w-full flex-col gap-1">
                                    <label className="leading-7 text-sm text-txt-dark/50 dark:text-txt-light/50">Email</label>
                                    <input type="email" required name="email" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 bg-transparent focus:ring-2 focus:ring-primary text-base outline-none text-txt-dark/70 dark:text-txt-light/70 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.015 }} whileTap={{ scale: .9 }}
                                className="mx-auto text-white w-full bg-primary-green focus:ring-primary border-0 py-2 px-8 focus:outline-none hover:brightness-110 rounded text-lg">Absenden</motion.button>
                        </motion.form>
                    </div>
                </section>
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2.5 }}
                    className='flex mx-auto w-max gap-5 pb-10'>
                    <DatenschutzModal />
                    <KontaktModal />
                </motion.div>
            </div>
            // <div className='max-w-xs md:max-w-lg lg:max-w-2xl bg-red-200 flex flex-col gap-4'>
            //     <h2 className='text-7xl font-bold text-txt-light'>
            //         Lorem Header
            //     </h2>
            //     <h3 className='text-5xl font-bold text-txt-light'>
            //         Ispum Subheader Title here...
            //     </h3>
            //     <p className='text-txt-light/70 text-lg'>
            //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
            //         Tempore ab debitis molestias, perspiciatis adipisci
            //         repellendus consequuntur deserunt et provident, sequi
            //         alias perferendis sapiente quidem at, pariatur quis ducimus
            //         porro voluptas?
            //     </p>
            //     <div>
            //         <Modal buttonText='Sei der Erste!' buttonStyle='outline'>
            //             <div>
            //                 sei der erste
            //             </div>
            //         </Modal>
            //     </div>

            // </div>
        )
    }

    function ContentBackground() {
        return (
            <ParticlesComponent />
            // <div className='absolute h-full top-0 w-2/3 waitingScreenClipPath bg-dark-container/80 drop-shadow-lg -z-10'></div>
        )
    }

    return (
        <div className='min-h-screen background-dark pt-20'>
            <ContentBackground />
            <div className='z-50'>
                <Content />
            </div >
        </div>
        // <div className='h-screen'>
        //     <img className="absolute  w-full h-full object-cover bg-[url('/hero-image.png')] -z-10" alt="" />
        //     {/* Logo */}
        //     <Button buttonStyle='none' type='link' className='mx-auto' href='/'>
        //         <img className='max-w-4xl'
        //             src="/logo/GenFu-Logo-white.png" alt="logo" />
        //     </Button>
        //     <ContentBackground />
        //     <div className='z-50'>
        //         <Content />
        //     </div>
        // </div>
    )
}

export default WaitingScreen
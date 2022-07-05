import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../Button'

const tabs = [
    {
        'title': 'Vision',
        'value': `Wir haben uns entschieden neue Wege zu gehen. Lies unser Whitepaper und überzeuge dich selbst. GenFu ist nicht nur ein Dienstleister.Nein.GenFu ist eine Plattform für alle Menschen, die Innovation leben.`,
        'img': '/cyber-1.jpg',
        'href': '/#nope'
    },
    {
        'title': 'Qualität',
        'value': `Qualität vor Quantität. Unsere Kunden haben Vorrang, nicht die Gewinne von GenFu. Bei uns steht jeder Kunde im Vordergrund, nicht unsere Dienstleistung.`,
        'img': '/cyber-2.jpg'
    },
    {
        'title': 'Service',
        'value': '3 ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, consequuntur, minus quas voluptates at consectetur.',
        'img': '/cyber-3.jpg'
    },
    {
        'title': 'Nachhaltig',
        'value': '4 ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, consequuntur, minus quas voluptates at consectetur.',
        'img': '/cyber-4.jpg'
    },
]

const variants = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.9,
            ease: [0.61, 1, 0.88, 1],
        },
    },
}

var sliderInterval = setInterval(() => {
}, 15000)
export default function () {
    const [currentTab, setCurrentTab] = useState(0)
    const prevTab = () => {
        currentTab == 0 ? setCurrentTab(tabs.length - 1) : setCurrentTab(currentTab - 1)
        intervalHandle()
    }
    const nextTab = () => {
        currentTab == tabs.length - 1 ? setCurrentTab(0) : setCurrentTab(currentTab + 1)
        intervalHandle()
    }
    const intervalHandle = () => {
        if (sliderInterval) {
            clearInterval(sliderInterval)
            sliderInterval = setInterval(() => {
                nextTab()
            }, 15000)
        }
    }
    intervalHandle()
    return (
        <div className="top-0 w-full absolute h-full left-0 hero-clip-path-sm z-10 md:hero-clip-path ">
            <div className='pt-30 mx-auto flex flex-col gap-5 '>
                {tabs.map((tab, idx) => (
                    <motion.section initial="initial" animate="enter" variants={variants}
                        className={`mt-20 ${currentTab == idx ? 'slide-in-animation visible' : 'slide-out-animation hidden'}`}>
                        <img className={`brightness-50 absolute object-cover -z-10 top-0 w-screen h-full transition-all ${currentTab == idx ? 'slide-in-animation visible' : 'slide-out-animation  invisible '}`} src={tab.img} />
                        <div className={`gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-wrap md:flex-nowrap sm:py-16 lg:px-6  ${currentTab == idx ? 'slide-in-animation visible ' : 'invisible slide-out-animation'}`}>
                            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-screen-md ">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-shadow-md-dark  text-txt-light">{tab.title}</h2>
                                <p className="mb-6 font-light md:text-lg text-txt-light text-shadow-md-dark   px-5 py-4 md:py-8 bg-slate-700/40 dark:bg-slate-700/70 rounded-md border-l-8 border-primary">{tab.value}</p>
                                <div className="relative flex gap-5 z-50">
                                    <Button type="link" href="/shop" buttonStyle="success">
                                        <span>Angebote</span>
                                    </Button>
                                    <Button href="/" type="link" buttonStyle="outline" className="border-light-container">
                                        <span className="text-txt-light">mehr...</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>
            {/* navigation */}
            <div onClick={() => { nextTab() }} className='transition-color duration-300 rounded-full right-0 w-10 h-full absolute bg-black/40 top-0 hover:bg-light-container/10 blur-md'></div>
            <div onClick={() => { prevTab() }} className='transition-color duration-300 rounded-full w-10 h-full absolute bg-black/40 top-0  hover:bg-light-container/10 blur-md'></div>

            <div className='absolute w-full h-40 top-0 flex justify-center gap-4 '>
                {tabs.map((tab, idx) => (
                    <div onClick={() => {
                        setCurrentTab(idx)
                    }}
                        className={`w-12 h-3 border-light-container/20 border-2 ${currentTab == idx ? 'bg-white/20' : 'bg-black/40'} mt-24 rounded-md cursor-pointer hover:bg-black/50 transition-all duration-300`}></div>
                ))}
            </div>
        </div >

    )
}
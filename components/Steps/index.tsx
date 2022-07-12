import React from 'react'
import Step from './Step'
import { motion } from 'framer-motion'
import { useScroll } from '../Framer/useScroll'
import { plopAnimation } from "../Framer/animations";

const stepData = [
    {
        title: `Analysegespräch`,
        text: `Was soll deine Website präsentieren? Welches Paket ist das richtige für Dich?
               Welche Daten werden für die Entwicklung benötigt? 
               Diese Fragen beantworten wir gemeinsam in einem Analysegespräch, 
               um deine Website bestmöglich nach Deinen Wünschen zu gestalten.`,
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 dark:text-txt-light text-txt-dark/60" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    },
    {
        title: `Erstentwurf`,
        text: 'In spätestens 5 Werktagen hast Du Deinen ersten Entwurf vorliegen. Hier hast du die Möglichkeit Änderungswünsche und weitere Funktionen zu besprechen.',
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 dark:text-txt-light text-txt-dark/60" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
    },
    {
        title: `Umsetzung`,
        text: 'Bist du zufrieden mit dem Erstentwurf? Wir gehen hier an die Umsetzung. Hast du noch Änderungswünsche? Dann gehen wir zurück zu Schritt 2.',
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 dark:text-txt-light text-txt-dark/60" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>
    },
    {
        title: `Feintuning`,
        text: 'Nun geht es an den Feinschliff. Wir besprechen letzte Details und Änderungen und gehen dann in die Endphase der Entwicklung. ',
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 dark:text-txt-light text-txt-dark/60" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    },
    {
        title: `Hosting`,
        text: 'Die Website ist fertig! Juhu! Wir stellen nach Deiner Freigabe Deine Homepage online. Ab jetzt bist du im Netz vertreten. Du kannst Deine Website auch selbst online stellen. ',
        icon: <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 dark:text-txt-light text-txt-dark/60" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    },
]

function index() {
    const [element, controls] = useScroll()
    return (
        // @ts-ignore
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
            <div className="mt-32 grid gap-40 items-center lg:grid-cols-3 container mx-auto max-w-6xl">
                {stepData.map((item, idx) => (
                    <Step title={item.title}
                        text={item.text} icon={item.icon}
                        idx={idx} last={idx === stepData.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}

export default index
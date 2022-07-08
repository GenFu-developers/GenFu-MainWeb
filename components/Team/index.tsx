import React from 'react'
import { motion } from 'framer-motion';
import { useScroll } from '../Framer/useScroll';
import { plopAnimation } from '../Framer/animations';
import TeamCard from './Team'

const teamData = [
    {
        name: 'Hannes Tiago Luiz König',
        role: 'CEO',
        text: `Ich bin Hannes Tiago Luiz König, adoptiert kurz nach meiner Geburt aus Brasilien im Jahr 1993.Auf dem Gymnasium angefangen, doch im Halbjahr der 8ten Klasse auf die Realschule gewechselt.Ausbildung im Verkauft gestartet bei SportScheck GmbH, Erfahrungen gesammelt in mehreren Einzelhandel Shops, Großhandel und Logistik. Ebenfalls in einer Medienagentur gearbeitet und Erfahrungen in Management und Marketing gesammelt.Später eine Ausbildung als Gärtner für Gemüseanbau gestartet und mit Erfolg beendet.Eine Phase der Arbeitslos- und Planlosigkeit erfolgte bis schließlich die Planung und Umsetzung von GenFu erfolgte.`,
    },
    {
        name: 'Pablo Kurzmann',
        role: 'CEO',
        text: `Hi, ich bin Pablo. In meinen jungen Jahren gabs Umstände die mir den Weg zu einer guten traditionellen Ausbildung erschwert haben. Doch zu meinen Glück lernte ich dadurch andere Wege kennen wie ich meine Ziele erreichen kann ohne den Weg gehen zu müssen den die meisten gehen. Heute bin ich immernoch sehr jung doch entschlossener denn je. Mit der Gründung von GenFu möchte ich anderen Menschen in ähnlcihen Lebenssituationen geprägt von ungewissheit und Perspektivlosigkeit eine Möglichkeit bieten sich selbst zu verwirklichen. Seit meiner frühen Jugend verbringe ich viel Zeit am PC und habe mir über die Jahre verschiedene Programmiersprachen wie Python, Groovy und Javascript beigebracht. Nun seit Anfang 2021 habe ich angefangen mich auf Frontend developing zu spezialisieren und finde viel Freude daran. `
    }
]

export default function index() {
    const [element, controls] = useScroll()
    return (
        // @ts-ignore
        <section ref={element} className='h-screen sm:mb-96'>
            <div className="container px-6 mx-auto">
                {/* @ts-ignore */}
                <motion.div animate={controls}
                    varians={plopAnimation}
                    transition={{
                        delay: 0.02,
                        type: "tween",
                        duration: 0.8,
                    }}
                >
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Das <span className="text-primary">sind wir</span></h1>
                    <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Ursprünglich kommen wir aus völlig unterschiedlichen Bereichen.
                        Dennoch streben wir nach einem gemeinsamen Ziel: Unabhängige Selbstverwirklichung.
                        Lange haben wir uns Gedanken gemacht, wie wir unsere Stärken und Energien bündeln können und so ist "Generation Future" kurz "GenFu" entstanden.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                    {teamData.map((item, idx) => (
                        <TeamCard name={item.name} role={item.role} animationReverse={idx != 0} text={item.text} />
                    ))}

                </div>
            </div>
        </section >
    )
}
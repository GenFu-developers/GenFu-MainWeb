import { motion } from "framer-motion";

export default function Steps() {
    const hoverStyle = { scale: 1.015 }
    return (
        <section className="text-gray-600 body-font px-5 mb-40">
            {/* header */}
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center">
                    <h1 className="sm:text-3xl text-2xl  title-font text-txt-dark dark:text-txt-light font-bold mb-4">In 5 Schritten zu deiner Website!</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-txt-dark/70 dark:text-txt-light/70">Wir legen viel Wert darauf dass unsere Kunden wissen wie ihre Website entsteht. Im folgenden sind alle nötigen Schritte bis zum Abschluss der Website aufgelistet.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-secondary inline-flex"></div>
                    </div>
                </div>
            </div>
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 mx-auto -mt-16">
                <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <motion.div className="flex-grow pl-4" whileHover={hoverStyle}>
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">
                            SCHRITT 1
                            <span className="font-bold text-primary text-shadow-md-dark text-lg"> "Analysegespräch"</span>
                        </h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">Im Analysegespräch finden wir herraus was für ein Paket am besten für dich ist und welche Daten für die Entwicklung der Website benötigt werden.</p>
                    </motion.div>
                </div>
                <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <motion.div className="flex-grow pl-4" whileHover={hoverStyle}>
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">
                            SCHRITT 2
                            <span className="font-bold text-primary text-shadow-md-dark text-lg"> "Erstentwurf"</span>
                        </h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">Nun bekommst du einen Erstentwurf vom ungefähren aussehen und den Funktionalitäten der Website.</p>
                    </motion.div>
                </div>
                <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="3"></circle>
                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                    </div>
                    <motion.div className="flex-grow pl-4" whileHover={hoverStyle}>
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">
                            SCHRITT 3
                            <span className="font-bold text-primary text-shadow-md-dark text-lg"> "Umsetzung"</span>
                        </h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">Wenn du zufrieden mit dem Erstentwurf bist kommen wir zur Umsetzung und fangen an deine Website technisch zu entwickeln.</p>
                    </motion.div>
                </div>
                <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <motion.div className="flex-grow pl-4" whileHover={hoverStyle}>
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">
                            SCHRITT 4
                            <span className="font-bold text-primary text-shadow-md-dark text-lg"> "Nachbesserung"</span>
                        </h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">Nach vollendeter Umsetzung hast du noch die Möglichkeit die Feinheiten nachbessern zu lassen.</p>
                    </motion.div>
                </div>
                <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    <motion.div className="flex-grow pl-4" whileHover={hoverStyle}>
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">
                            SCHRITT 5<span className="font-bold text-primary text-shadow-md-dark text-lg"> "Endprodukt"</span>
                        </h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">Nun hast du deine fertige Website und kannst diese entweder über uns oder auf eigene Faust online stellen.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
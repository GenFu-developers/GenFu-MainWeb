import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


const variants = {
    initial: {
        scale: .5,
        y: -50,
    },
    enter: {
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.61, 1, 0.88, 1],
        },
    },
}

const PageTransition = ({ children }: { children: ReactNode }): JSX.Element => (
    <AnimatePresence>
        <motion.div initial="initial" animate="enter" variants={variants}>
            {children}
        </motion.div>
    </AnimatePresence>
)

export default PageTransition

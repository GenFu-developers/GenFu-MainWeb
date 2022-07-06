import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../Modals/Backdrop'
import { portfolioAnimation } from '../Framer/animations'
import { useScroll } from '../Framer/useScroll'

interface Props {
    src: string;
    className: string;
    alt?: string;

}

const imgHoverStyle = {
    scale: 1.115,
    transition: { duration: .2 }
}

const galleryStyle = `absolute w-full h-full`

function index({ src, className, alt }: Props) {
    const [isGallery, setIsGallery] = useState(false)
    const [element, controls] = useScroll();
    return (
        !isGallery ?
            // @ts-ignore
            <motion.img ref={element}
                variants={portfolioAnimation}
                // @ts-ignore
                animate={controls}
                transition={{
                    delay: 0.03,
                    type: "tween",
                    duration: 0.8,
                }}
                viewport={{ once: true }}
                whileHover={imgHoverStyle} alt={`${alt}`}
                whileTap={{ scale: 0.9, transition: { duration: .3 } }}
                className={`cursor-pointer rounded-lg object-cover shadow-lg ${className} ${isGallery ? galleryStyle : ''}`}
                src={src}
                onClick={() => { setIsGallery(!isGallery) }} /> :

            <Backdrop onClick={() => { setIsGallery(false) }}>
                <motion.img
                    // whileTap={{ scale: 0.9 }}
                    className={`cursor-pointer w-10/12 mx-auto h-4/6 rounded-lg object-cover`}
                    src={src}
                    onClick={() => { setIsGallery(!isGallery) }}
                />
            </Backdrop >
    )
}

export default index
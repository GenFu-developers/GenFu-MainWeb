import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../Modals/Backdrop'

interface Props {
    src: string;
    className: string;
    alt?: string;

}

const imgHoverStyle = {
    scale: 1.115,
}

const galleryStyle = `absolute w-full h-full`

function index({ src, className, alt }: Props) {
    const [isGallery, setIsGallery] = useState(false)
    return (
        !isGallery ?
            <motion.img whileHover={imgHoverStyle} initial={{ scale: 0 }} animate={{ scale: 1 }} alt={`${alt}`}
                whileTap={{ scale: 0.9 }}
                className={`rounded-lg shadow-lg ${className} ${isGallery ? galleryStyle : ''}`}
                src={src}
                onClick={() => { setIsGallery(!isGallery) }}
            /> :

            <Backdrop onClick={() => { setIsGallery(false) }}>
                <div className=' w-full h-4/6 '>
                    <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} alt={`${alt}`}
                        // whileTap={{ scale: 0.9 }}
                        className={`w-10/12 mx-auto h-full rounded-lg object-cover`}
                        src={src}
                        onClick={() => { setIsGallery(!isGallery) }}
                    />
                </div>
            </Backdrop>
    )
}

export default index
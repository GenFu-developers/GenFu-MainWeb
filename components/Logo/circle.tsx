import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    size?: {
        width: number;
        height: number;
    }
}

function circle({ size }: Props) {
    return (
        <div className={`${size ? `w-${size.width} h-${size.height}` : 'w-20 h-20'} bg-[url("/logo/GenFu-Logo-Circle-black.png")] dark:bg-[url("/logo/GenFu-Logo-Circle-white.png")]   bg-cover`}></div>

        // <img width={100} height={100} src="" alt="" />
    )
}

export default circle
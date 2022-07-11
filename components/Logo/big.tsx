import React from 'react'
import Button from '../Button/Button'
import { motion } from 'framer-motion'
import { useScroll } from '../Framer/useScroll'

interface Props {
    className?: string;
    containerClassName?: string;
}

function BigLogo({ className, containerClassName }: Props) {
    return (
        <Button type='link' buttonStyle='none' className={`${containerClassName}`}>
            <div>
                <img src="/logo/GenFu-Logo-black.png" className={'h-6 scale-150 block dark:hidden ' + className} alt="logo" />
                {/* dark mode Logo */}
                <img src="/logo/GenFu-Logo-white.png" className={'h-6 scale-150 w-full hidden dark:block ' + className} alt="logo" />
            </div>
        </Button>
    )
}

export default BigLogo
import React from 'react'
import Button from '../Button'
import { motion } from 'framer-motion'
import { useScroll } from '../Framer/useScroll'

function BigLogo() {
    return (
        <Button type='link' buttonStyle='none'>
            <div >
                <img src="/GenFu-Logo-normal.png" className='h-6 scale-150 block dark:hidden' alt="logo" />
                {/* dark mode Logo */}
                <img src="/GenFu-Logo-white.png" className='h-6 scale-150 w-full hidden dark:block' alt="logo" />
            </div>
        </Button>
    )
}

export default BigLogo
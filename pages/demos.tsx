import React from 'react'
import DemoCard from '../components/Demo/DemoCard'
import Navbar from '../components/Menu/Navbar'
import { motion } from 'framer-motion'

function Demos() {
    return (
        <div className='background-light dark:background-dark min-h-screen pt-32'>
            <Navbar />
            <div className='grid grid-rows-1 px-5'>
                {Array.from(new Array(10).keys()).map((demoCard) => (
                    <div className="group mx-auto " >
                        <motion.img
                            className='demo-card h-96 max-w-xs object-cover'
                            src="https://images.unsplash.com/photo-1569335048491-5fb94951e885?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                        >
                        </motion.img>
                        <h2 className="" data-cta="Take a walk →">Day Hikes</h2>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Demos
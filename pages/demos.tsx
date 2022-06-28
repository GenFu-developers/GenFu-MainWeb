import React from 'react'
import DemoCard from '../components/Demo/DemoCard'
import Navbar from '../components/Navbar'

function Demos() {
    return (
        <div className='bg-background-light dark:bg-background-dark min-h-screen'>
            <Navbar />
            <div className='flex gap-5 justify-center flex-wrap'>
                {Array.from(new Array(10).keys()).map((demoCard) => (
                    <DemoCard />
                ))}
            </div>
        </div>
    )
}

export default Demos
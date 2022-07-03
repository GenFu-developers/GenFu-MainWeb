import React from 'react'
import Feedback from '../components/Feedback/index'
import Footer from '../components/Footer'
import Navbar from '../components/Menu/Navbar'

function feedback() {
    return (
        <div className='background-light dark:background-dark overflow-x-hidden'>
            <Navbar />
            <div className='h-screen'>
                <Feedback />
            </div>
            <Footer />
        </div>
    )
}

export default feedback
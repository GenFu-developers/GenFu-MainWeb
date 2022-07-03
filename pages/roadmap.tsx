import React from 'react'
import Roadmap from '../components/Roadmap/index'
import Navbar from '../components/Menu/Navbar'
import Footer from '../components/Footer'

function roadmap() {
    return (
        <div className='background-light dark:background-dark overflow-x-hidden'>
            <Navbar />
            <div className='mt-40 px-5 md:px-10'>
                <Roadmap />
            </div>
            <Footer />
        </div>
    )
}

export default roadmap
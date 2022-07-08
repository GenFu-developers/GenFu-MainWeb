import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Menu/Navbar'
import Sidebar from '../components/Whitepaper/sidebar'
function whitepaper() {
    return (
        <div className='background-light dark:background-dark overflow-x-hidden'>
            <Navbar />
            <div className='flex'>
                {/* <Sidebar /> */}
                <div className='h-screen'>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default whitepaper
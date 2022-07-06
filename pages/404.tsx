import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Menu/Navbar'

function FourOhFour() {
    return (
        <div>
            <Navbar />
            <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
                <div className="w-full lg:w-1/2">
                    <img className="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" />
                    <img className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" />
                    <img className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white">Ouhps! Sieht aus als währe hier nichts.</h1>
                    <p className="py-4 text-base text-gray-800 dark:text-white">Tut uns leid, wir konnten die Seite die du sucht nicht finden.</p>
                    <Button type='link' href='/' buttonStyle='outline' className='border-txt-dark dark:border-txt-light'>
                        <span className='text-txt-dark dark:text-txt-light'>Home</span>
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default FourOhFour
import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Menu/Navbar'

function Impressum() {
    return (
        <div className='background-light dark:background-dark'>
            <Navbar />
            <div className='h-screen flex flex-col gap-5 container pt-36 px-2 mx-auto'>
                <h1 className='text-4xl'>Impressum</h1>
                <p className='border-l-2 border-txt-dark dark:border-txt-light ml-5 pl-3 max-w-md text-lg'>Wir befinden uns gerade in der Gründungsphase. D.h. Businessplan überarbeitet, Vorskalierung abgeschlossen und nun eine UG gründen.</p>
                <div className='ml-5 flex gap-10 justify-start mt-4'>
                    <p className='text-start leading-8'>
                        Hannes Tiago Luiz König
                        <br />
                        Wildeckstraße 32
                        <br />
                        70469 Stuttgart
                    </p>
                    <p className='text-start leading-8'>
                        Pablo Kurzmann
                        <br />
                        Riesstraße 100
                        <br />
                        80993 München
                    </p>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Impressum
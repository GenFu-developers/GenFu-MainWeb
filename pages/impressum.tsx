import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Menu/Navbar'

function Impressum() {
    return (
        <div className='background-light dark:background-dark'>
            <Navbar />
            <div className='h-screen flex flex-col gap-5 text-center max-w-xs md:max-w-md lg:max-w-screen-md pt-40 mx-auto'>
                <h1 className='text-4xl'>Impressum</h1>
                <p className='mx-auto max-w-md text-lg'>Wir befinden uns gerade in der Gründungsphase. D.h. Businessplan überarbeitet, Vorskalierung abgeschlossen und nun eine UG gründen.</p>
                <div className='flex gap-10 justify-center mt-4'>
                    <div >
                        <p className='text-start leading-8'>
                            Hannes Tiago Luiz König
                            <br />
                            Wildeckstraße 32
                            <br />
                            70469 Stuttgart
                        </p>
                    </div>
                    <div className='text-start leading-8'>
                        <p>
                            Pablo Kurzmann
                            <br />
                            Riesstraße 100
                            <br />
                            80993 München
                        </p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Impressum
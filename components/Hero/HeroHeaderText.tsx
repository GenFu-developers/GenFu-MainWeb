import React, { useState } from 'react'
import Button from '../Button/Button'
import AnImage from '../AnImage/index'

function HeroHeaderText() {
    return (
        <div className="px-4 z-40 mt-80 relative h-max top-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="mx-auto max-w-xs md:max-w-lg lg:max-w-screen-md mb-6 relative flex flex-col gap-6">
                        <div className='flex flex-col'>
                            <h2 className="max-w-lg mb-6 w-max py-1 rounded-full   font-sans text-3xl  font-bold tracking-tight text-shadow-md-dark text-txt-light sm:text-4xl sm:leading-none">
                                Let us handle
                                <br className="hidden md:block" />
                                your next{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    destination
                                </span>
                            </h2>
                            <p className="bg-slate-700/40 dark:bg-slate-700/70 rounded-md border-l-8 border-primary font-light md:text-lg text-txt-light text-shadow-md-dark px-5 py-4 md:py-8">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <Button type='link' buttonStyle='outline' className='border-txt-dark dark:border-txt-light'>
                            <div className='flex'>
                                <span className='text-txt-dark dark:text-txt-light'>mehr...</span>
                                <svg
                                    className="inline-block w-3 ml-2 fill-txt-dark dark:fill-txt-light"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <AnImage
                            className="mb-6  shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        />
                        <AnImage
                            className=" w-20 h-20  shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        />
                    </div>
                    <div className="px-3">
                        <AnImage
                            className="w-40 h-40  shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroHeaderText
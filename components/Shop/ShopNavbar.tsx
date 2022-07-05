import React from 'react'
import Button from '../Button'

interface Props {
    path?: { title: string; href: string }[]
}

function ShopNavbar({ path }: Props) {
    return (
        <div className="bg-light-container dark:bg-dark-container shadow-md mt-20">
            <div className="container flex items-center px-6 py-4 mx-auto overflow-y-auto whitespace-nowrap">
                <div className='flex items-center'>
                    <Button type='link' href='/' buttonStyle='none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-txt-dark/70 dark:fill-txt-light/70" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Button>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-txt-dark/70 dark:fill-txt-light/70" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>

                    <Button type='link' buttonStyle='none' href="/shop" className="text-txt-dark/70 dark:text-txt-light/70 flex">
                        <span className="text-txt-dark/70 dark:text-txt-light/70 flex my-auto">
                            Shop
                        </span>
                    </Button>

                    <span className="text-txt-dark/70 dark:text-txt-light/70">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </div>
                {path ? path.map((navItem, i) => (
                    <div className='flex items-center'>
                        <Button type='link' buttonStyle='none' href={navItem.href} className={`text-txt-dark/70 dark:text-txt-light/70 ${i + 1 == path.length ? 'text-primary' : ''} hover:underline`}>
                            <span>{`${navItem.title}`}</span>
                        </Button>
                        {i + 1 == path.length ? null :
                            <span className=" text-gray-500 dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        }
                    </div>
                )) : null
                }
            </div>
        </div>
    )
}

export default ShopNavbar
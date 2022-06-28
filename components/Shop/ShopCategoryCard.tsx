import React from 'react'
import { ShopCategory } from '../../typings';
import Link from 'next/link';
import { urlFor } from '../../sanity';
import { motion } from 'framer-motion'
import Button from '../Button';


function ShopCategoryCard({ name, slug, description, mainImage }: ShopCategory) {
    return (
        <motion.div whileHover={{ scale: 1.025 }} className="">
            <div className="w-96 bg-background-light dark:bg-background-dark shadow-xl rounded-lg">
                <div className="card-body px-4 py-6 text-center flex flex-col gap-5">
                    <h2 className="text-2xl text-txt-dark dark:text-txt-light">{name}</h2>
                    <p className='text-txt-dark/60 dark:text-txt-light/60'>{description}</p>
                    <div className="card-actions justify-end">
                        <Button type='link' buttonStyle='primary' href={`/shop/${slug.current}`} className="mx-auto">
                            <div>
                                Erkunden
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default ShopCategoryCard
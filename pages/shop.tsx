import React from 'react'
import Navbar from '../components/Navbar'
import { sanityClient } from '../sanity'
import { ShopCategory } from '../typings'
import ShopCategoryCard from '../components/Shop/ShopCategoryCard'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import ShopNavbar from '../components/Shop/ShopNavbar'

interface Props {
    shopCategorys: [ShopCategory]
}

function Shop({ shopCategorys }: Props) {
    return (
        <div className='background-light dark:background-dark'>
            <Navbar shadow={false} />
            <ShopNavbar path={[{ title: 'Kategorien', href: '/shop' }]} />
            <motion.div className="min-h-screen" initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                }
            }}>
                <div className="py-16">
                    <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                        <div className="mx-auto flex flex-wrap justify-evenly gap-5">
                            {shopCategorys.map((category) => (
                                <ShopCategoryCard name={category.name} description={category.description} mainImage={category.mainImage} slug={category.slug} />
                            ))}
                        </div>
                    </div>
                </div>

            </motion.div >
            <Footer />
        </div >
    )
}

export default Shop

export const getServerSideProps = async () => {
    const query = `*[_type == "shop-category"]{
        _id,
        name,
        description,
        mainImage,
        slug {
            current
        }
    }`;

    const shopCategorys = await sanityClient.fetch(query);
    return {
        props: {
            shopCategorys: shopCategorys,
        }
    }
}

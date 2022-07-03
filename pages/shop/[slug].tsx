import { GetStaticProps } from 'next';
import React from 'react'
import { sanityClient, urlFor } from '../../sanity';
import { ShopCategory, ShopItem } from '../../typings';
import ShopItemComponent from '../../components/Shop/ShopItem';
import Button from '../../components/Button';
import Modal from '../../components/Modals/index';
import Footer from '../../components/Footer';
import Termin from '../../components/Termin/index'
import ShopNavbar from '../../components/Shop/ShopNavbar'
import Navbar from '../../components/Menu/Navbar'


interface Props {
    shopItems: ShopItem[];
    slug: string
}

export default function ({ shopItems, slug }: Props) {
    const selectedShoItems: ShopItem[] = []

    const deleteSelectedShopItem = (target: ShopItem) => {
        var i = 0
        selectedShoItems.map((shopItem) => {
            if (shopItem._id === target._id) delete selectedShoItems[i]
        })
    }

    const selectedCallback = (isSelected: boolean, shopItem: ShopItem) => {
        if (isSelected) return selectedShoItems.push(shopItem)
        else if (!isSelected) return deleteSelectedShopItem(shopItem)
    }


    return (
        <div className='background-light dark:background-dark'>
            <Navbar shadow={false} />
            <ShopNavbar path={[{ title: 'Kategorien', href: '/shop' }, { title: slug, href: '/shop/' + slug }]} />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="p-8 rounded shadow-xl sm:p-16 relative flex flex-col">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-txt-light sm:text-4xl sm:leading-none">
                                Bestimme selbst
                                <br className="hidden md:block" />
                                oder lass  <span className='text-primary'>dich beraten</span>
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700 dark:text-txt-light/70">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                                perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
                                error sit voluptatem accusantium doloremque rem aperiam.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5 flex-col">
                        <Modal buttonText="Analysegespräch" buttonStyle="primary" buttonClassName="mx-auto" >
                            <Termin />
                        </Modal>
                        <div className='flex justify-center gap-5 translate-y-4'>
                            <div className='flex flex-col'>
                                <p className='text-txt-dark dark:text-txt-light'>wähle dein/e Wunschpaket/e aus und vereinbare einen Analysetermin.</p>
                                <span className='text-xs text-txt-dark/50 dark:text-txt-light/50'>*der Termin ist unverbindlich und die ausgewählten Pakete dienen nur als orientierung.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-8 px-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto mb-20'>
                {shopItems.map((shopItem: ShopItem) => (
                    <ShopItemComponent selectCallback={selectedCallback} shopItem={shopItem} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "shop-category"]{
                    _id,
                    slug {
                    current
                    }
                }`
    const shopCategorys = await sanityClient.fetch(query);
    const paths = shopCategorys.map((shopCategory: ShopCategory) => ({
        params: {
            slug: shopCategory.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const query = `*[_type == "shop-item" && $slug in category[]->slug.current]{
                    _id,
                    name,
                    description,
                    category,
                    mainImage,
                    slug {
                    current
                    },
                    price,
                    discount,
                    productContent,
                    priceInterval
                }`;

    const shopItems = await sanityClient.fetch(query, { slug: params?.slug })

    if (!shopItems) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            shopItems: shopItems,
            slug: params?.slug
        }
    }
}
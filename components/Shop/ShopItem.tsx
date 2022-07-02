import React, { useState } from 'react'
import { urlFor } from '../../sanity'
import { ShopItem } from '../../typings'
import { motion } from 'framer-motion'
import Button from '../Button'
import Tooltip from '../Tooltip/index';
interface Props {
    shopItem: ShopItem;
    selectCallback: Function;
}

function ShopItem({ shopItem, selectCallback }: Props) {
    const [isSelected, setIsSelected] = useState(false)
    const toggleIsSelected = () => {
        isSelected ? setIsSelected(false) : setIsSelected(true);
        selectCallback(isSelected, shopItem)
    }

    return (

        <motion.div className={`block rounded-lg shadow-lg  text-txt-dark dark:text-txt-light w-96 h-full ${isSelected ? 'shadow-lg shadow-green-500' : ''}`}>
            <div className="p-6 border-b border-gray-300 dark:border-slate-700 text-center">
                <p className="uppercase mb-4 text-sm">
                    <strong>{shopItem.name}</strong>
                </p>
                <h3 className="text-2xl mb-6">
                    <strong>€ {shopItem.price}</strong>
                    <small className="text-txt-dark/70 dark:text-txt-light/70 ml-1 text-sm">{shopItem.priceInterval}</small>
                </h3>

                <Button type='button' buttonStyle='success' className='mx-auto' callback={() => { toggleIsSelected() }}>
                    <div>
                        Auswählen
                    </div>
                </Button>

            </div>
            <div className="p-6">
                <ul className="list-inside">
                    {shopItem.productContent.map((item) => (
                        <li className="mb-4 flex items-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                </path>
                            </svg>
                            {item.tooltip ?

                                <Tooltip text={item.text} tooltip={item.tooltip} />
                                : <p>{item.text}</p>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

export default ShopItem;
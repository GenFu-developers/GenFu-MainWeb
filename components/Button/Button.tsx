import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

interface Props {
    children?: JSX.Element;
    buttonStyle: 'outline' | 'primary' | 'secondary' | 'warning' | 'success' | 'none'
    type: 'link' | 'button';
    callback?: Function;
    href?: string;
    className?: string;
    loading?: boolean
}

function Button({ buttonStyle, callback, type, href, className, children, loading }: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const basicStyle = 'rounded-md '
    const style = {
        outline: basicStyle + 'border-2 text-txt-dark dark:text-txt-light',
        primary: basicStyle + 'bg-primary',
        secondary: basicStyle + 'bg-secondary',
        warning: basicStyle + 'bg-red-500',
        success: basicStyle + 'bg-primary-green',
        none: basicStyle + 'text-txt-dark dark:text-txt-light',
    }
    return (
        <motion.div className={`${style[buttonStyle]} py-2 px-4 w-max cursor-pointer ${className ? className : ''}`}
            onClick={() => { if (callback) return callback() }}
            whileTap={{ scale: .9 }} whileHover={{ scale: 1.025, filter: 'brightness(110%)' }}>
            {type == 'button' ?
                /* type === Button */
                <div>{children ? children : null}</div>
                :
                /* type === Link */
                <Link href={href ? href : '/'}>{<div>{children ? children : null}</div>}</Link>
            }
        </ motion.div>
    )
}

export default Button
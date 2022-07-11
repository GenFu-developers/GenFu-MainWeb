import React, { useState } from "react";
import { motion } from 'framer-motion'
import { useScroll } from '../Framer/useScroll'

interface ItemProps {
    title: string;
    children: JSX.Element;
    last?: boolean;
}

const Item = ({ title, children, last }: ItemProps) => {
    const [element, controls] = useScroll()
    const [isOpen, setIsOpen] = useState(false);
    return (
        // @ts-ignore
        <motion.div ref={element} animate={controls}
            variants={{
                hidden: { opacity: 0, scale: 0 },
                show: { opacity: 1, scale: 1 },
            }}
            transition={{
                duration: .6,
                delay: .2
            }}
            className={`${!last ? 'border-b' : ''} border-txt-dark/20 dark:border-txt-light/20`}>
            {/* @ts-ignore */}
            <button type="button" aria-label="Open item" title="Open item"
                className="text-txt-dark dark:text-txt-light flex items-center justify-between w-full p-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
                {/* @ts-ignore */}
            </button>
            {isOpen && (
                <motion.div
                    animate={['hidden', 'show']}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        show: { opacity: 1, y: 0 }
                    }}
                    transition={{
                        duration: 5
                    }}
                    className="p-4 pt-0">
                    <p className="text-txt-dark/70 dark:text-txt-light/70">{children}</p>
                </motion.div>
            )}
        </motion.div>
    );
};

interface Props {
    data: {
        title: string;
        value: string
    }[]
}

export default function Collaps({ data }: Props) {
    return (
        <div className="space-y-4">
            {data.map((item, idx) => (
                <Item title={item.title} last={idx == data.length - 1}>
                    <p>{item.value}</p>
                </Item>
            ))}
        </div>

    )
}
import React from 'react'
import Link from 'next/link'
import { Post } from '../../typings'
import { urlFor } from '../../sanity'

import { motion } from 'framer-motion'

function BlogListEntry(props: Post) {
    const monthDict = ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez',]
    const rawDate = new Date(props._createdAt)
    const date = {
        day: rawDate.getDate(),
        month: monthDict[rawDate.getMonth()],
        year: rawDate.getFullYear()
    }
    return (
        <motion.div whileHover={{
            scale: 1.1,
            transition: {
                delay: .2
            }
        }}>
            <Link href={`/blog/${props.slug.current}`} target="_blank" >
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm group">
                    <div className="h-64 overflow-hidden">
                        <img
                            src={urlFor(props.mainImage).url()!}
                            className="object-cover w-full h-full group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-in-out"
                            alt=""
                        />
                    </div>
                    <div className="p-5 border border-t-0 h-full">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                aria-label="Category"
                                title="traveling"
                            >
                                Kategorie
                            </a>
                            <span className="text-gray-600 float-right"> {date.day} {date.month} {date.year}</span>
                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            {props.title}
                        </a>
                        <p className="mb-2 text-gray-700">
                            {props.description}
                        </p>
                        <Link
                            href={`/blog/${props.slug.current}`}
                            target="_blank"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default BlogListEntry;
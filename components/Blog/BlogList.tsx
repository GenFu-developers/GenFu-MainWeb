import React from 'react';
import Link from 'next/link';
import { Post } from '../../typings'
import BlogListEntry from './BlogListEntry'
import { motion } from 'framer-motion'

interface Posts {
    posts: [Post]
}

export default function Blog({ posts }: Posts) {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <motion.div initial="hidden" animate="visible" variants={{
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
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {posts.map((post) => (<BlogListEntry title={post.title} author={post.author} description={post.description} _createdAt={post._createdAt} _id={post._id} body={post.body} mainImage={post.mainImage} slug={post.slug} />))}
                </div>
            </motion.div>
        </div>
    );
};
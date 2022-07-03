import React from 'react'
import Navbar from '../components/Menu/Navbar'
import BlogList from '../components/Blog/BlogList'
/* Sanity imports */
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Footer from '../components/Footer'

interface Posts {
    posts: [Post]
}

function Blog({ posts }: Posts) {
    return (
        <div className='bg-background-light dark:bg-background-dark'>
            <Navbar />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                    <a href="/"
                        aria-label="View"
                        className="inline-block mb-5 rounded-full sm:mx-auto">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400"
                                stroke="#00abe1"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Bleib auf dem neuesten Stand
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg sm:px-4">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                    <hr className="w-full my-8 border-gray-300" />
                </div>
            </div>
            <div className="w-full -mt-32">
                <BlogList posts={posts} />
            </div>
            <Footer />
        </div>
    )
}

export default Blog;

export const getServerSideProps = async () => {
    const query = `*[_type == "post"]{
    _id,
    _createdAt,
    title,
    author-> {
        name,
        image
    },
    description,
    mainImage,
    slug,
    body
  }`;

    const posts = await sanityClient.fetch(query);
    return {
        props: {
            posts,
        }
    }
}


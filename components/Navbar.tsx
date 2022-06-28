import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import { useTheme } from 'next-themes'
import NavLink from './NavLink';
import Button from './Button';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])
    const { systemTheme, theme, setTheme } = useTheme();
    const switchTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;
        function getThemeImage() {
            const translateString = '-translate-y-2 -translate-x-3'
            if (currentTheme === "dark") {
                return (
                    <svg className={'w-6 h-6 ' + translateString} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2L11.25 4C11.25 4.41421 11.5858 4.75 12 4.75C12.4142 4.75 12.75 4.41421 12.75 4L12.75 2ZM12.75 20C12.75 19.5858 12.4142 19.25 12 19.25C11.5858 19.25 11.25 19.5858 11.25 20L11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22L12.75 20ZM12 6.25C8.82436 6.25 6.25 8.82436 6.25 12C6.25 15.1756 8.82436 17.75 12 17.75C15.1756 17.75 17.75 15.1756 17.75 12C17.75 8.82436 15.1756 6.25 12 6.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM5.03033 3.96916C4.73744 3.67627 4.26257 3.67626 3.96967 3.96915C3.67678 4.26205 3.67677 4.73692 3.96967 5.02981L5.46969 6.52986C5.76258 6.82276 6.23745 6.82276 6.53035 6.52987C6.82324 6.23698 6.82325 5.7621 6.53036 5.46921L5.03033 3.96916ZM18.5303 17.4692C18.2374 17.1763 17.7626 17.1763 17.4697 17.4692C17.1768 17.7621 17.1768 18.2369 17.4697 18.5298L18.9697 20.0298C19.2626 20.3227 19.7374 20.3227 20.0303 20.0298C20.3232 19.7369 20.3232 19.2621 20.0303 18.9692L18.5303 17.4692ZM3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L5.46967 17.4697C5.76256 17.1768 6.23744 17.1768 6.53033 17.4697C6.82322 17.7626 6.82322 18.2374 6.53033 18.5303L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303ZM17.4697 6.53033C17.1768 6.23744 17.1768 5.76256 17.4697 5.46967L18.9697 3.96967C19.2626 3.67678 19.7374 3.67678 20.0303 3.96967C20.3232 4.26256 20.3232 4.73744 20.0303 5.03033L18.5303 6.53033C18.2374 6.82322 17.7626 6.82322 17.4697 6.53033Z" fill="white" />
                    </svg>
                )
            }

            else {
                return (
                    <svg className={'w-6 h-6 ' + translateString} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setTheme('dark')}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5001 3C18.5001 4.25 17.2501 5.5 16.0001 5.5C17.2501 5.5 18.5001 6.75 18.5001 8C18.5001 6.75 19.7501 5.5 21.0001 5.5C19.7501 5.5 18.5001 4.25 18.5001 3ZM21.5001 11C21.5001 12.25 20.2501 13.5 19.0001 13.5C20.2501 13.5 21.5001 14.75 21.5001 16C21.5001 14.75 22.7501 13.5 24.0001 13.5C22.7501 13.5 21.5001 12.25 21.5001 11ZM12.0001 10.5C13.2501 10.5 14.5001 9.25 14.5001 8C14.5001 9.25 15.7501 10.5 17.0001 10.5C15.7501 10.5 14.5001 11.75 14.5001 13C14.5001 11.75 13.2501 10.5 12.0001 10.5ZM2.55769 17.1452C-0.614191 11.0034 3.80565 3.24956 10.7953 3.18631C11.1076 3.18348 11.389 3.37454 11.5016 3.66589C11.6141 3.95682 11.5347 4.28692 11.3025 4.49495L11.3019 4.49543L11.3019 4.49547L11.3019 4.49549L11.3014 4.49586L11.2953 4.50146C11.2887 4.50754 11.2777 4.51779 11.2626 4.53211C11.2323 4.56077 11.186 4.60564 11.1266 4.66592C11.0077 4.7866 10.8373 4.9683 10.6398 5.20452C10.2434 5.67866 9.74601 6.36308 9.33582 7.20603C8.52098 8.88055 8.05855 11.1491 9.3855 13.6981C10.696 16.2153 12.8932 17.0293 14.8464 17.2108C15.8271 17.3019 16.7294 17.2297 17.3891 17.1331C17.7176 17.0851 17.9826 17.0315 18.1629 16.9906C18.2529 16.9702 18.3216 16.953 18.3662 16.9414C18.3884 16.9356 18.4047 16.9312 18.4146 16.9285L18.4246 16.9257L18.4248 16.9256L18.4253 16.9255C18.7126 16.8421 19.022 16.9374 19.2126 17.1681C19.4033 17.399 19.4384 17.7211 19.3019 17.9876C17.6093 21.2929 14.1518 22.5833 10.8289 22.322C7.5167 22.0617 4.16328 20.2541 2.55769 17.1452Z" fill="black" />
                    </svg>
                )
            }
        }
        return (
            <Button type='button' buttonStyle='none' className='my-auto w-6 h-6 ' callback={switchTheme}>
                {getThemeImage()}
            </Button>
        )
    };


    return (
        <div className="bg-background-light dark:bg-background-dark shadow-md">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8">
                <div className="relative grid items-center grid-cols-2 lg:grid-cols-3 w-full text-txt-dark dark:text-txt-light">
                    {/* NavLinks left */}
                    <div className='hidden lg:flex'>
                        <NavLink name='Home' href='/' dropDownLinks={[
                            { 'name': 'Angebot', 'href': '/#angebot' },
                            { 'name': 'partner', 'href': '/#partner' }
                        ]} />
                    </div>
                    <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                    >
                        <div className="inline-flex items-center lg:mx-auto cursor-pointer">
                            <svg
                                className="w-8 text-teal-accent-400"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="white"
                            >
                                <rect x="3" y="1" width="7" height="12" />
                                <rect x="3" y="17" width="7" height="6" />
                                <rect x="14" y="1" width="7" height="6" />
                                <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                                GenFu Webservice
                            </span>
                        </div>
                    </Link>

                    <ul className="items-center hidden ml-auto space-x-8 lg:flex">
                        <li className=''>
                            <Link
                                href="/blog"
                                aria-label="Sign in"
                                title="Sign in"
                                className="my-auto mx-auto font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                <div className="font-medium tracking-wide  transition-colors duration-200   link link-underline link-underline-black cursor-pointer">
                                    Blog
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/demos"
                                className=""
                                aria-label="Demos"
                                title="Demos"
                            >
                                <Button type='link' href='/demos' buttonStyle='primary'>
                                    <h1>Demos</h1>
                                </Button>

                            </Link>
                        </li>
                        <li>
                            <Button type='link' href='/shop' buttonStyle='success'>
                                <div className='flex gap-1'>
                                    <svg className='my-auto' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.33 5H11.5L11.11 2.67C11.0314 2.31747 10.8589 1.9928 10.6106 1.73046C10.3624 1.46811 10.0477 1.2779 9.70003 1.18C9.35074 1.06763 8.98688 1.00698 8.62003 1H6.38003C6.01317 1.00698 5.64931 1.06763 5.30003 1.18C4.95236 1.2779 4.6377 1.46811 4.38944 1.73046C4.14119 1.9928 3.96861 2.31747 3.89003 2.67L3.50003 5H1.67003C1.59126 4.99952 1.5135 5.01766 1.44308 5.05293C1.37266 5.0882 1.31156 5.13961 1.26478 5.20297C1.21799 5.26633 1.18683 5.33984 1.17384 5.41753C1.16085 5.49521 1.1664 5.57487 1.19003 5.65L3.07003 11.95C3.16574 12.2543 3.35599 12.5202 3.61316 12.7091C3.87032 12.8979 4.18099 12.9998 4.50003 13H10.5C10.8174 12.9977 11.1258 12.8948 11.3809 12.7061C11.6361 12.5175 11.8248 12.2527 11.92 11.95L13.8 5.65C13.8234 5.57567 13.8291 5.4969 13.8166 5.41998C13.8042 5.34306 13.7739 5.27012 13.7282 5.20698C13.6826 5.14383 13.6228 5.09224 13.5537 5.0563C13.4845 5.02036 13.4079 5.00108 13.33 5V5ZM4.52003 5L4.88003 2.83C4.91949 2.65282 5.01104 2.4915 5.14291 2.36676C5.27477 2.24202 5.44093 2.15957 5.62003 2.13C5.86603 2.052 6.12203 2.009 6.38003 2H8.62003C8.88103 2.008 9.14003 2.051 9.39003 2.13C9.56912 2.15957 9.73528 2.24202 9.86715 2.36676C9.99901 2.4915 10.0906 2.65282 10.13 2.83L10.48 5H4.48003H4.52003Z" fill="white" />
                                    </svg>
                                    Shop
                                </div>
                            </Button>
                        </li>
                        <li>
                            {renderThemeChanger()}
                        </li>
                    </ul>
                    <div className="ml-auto lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <div>

                                                    <svg
                                                        className="w-8 text-deep-purple-accent-400"
                                                        viewBox="0 0 24 24"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeMiterlimit="10"
                                                        stroke="currentColor"
                                                        fill="none"
                                                    >
                                                        <rect x="3" y="1" width="7" height="12" />
                                                        <rect x="3" y="17" width="7" height="6" />
                                                        <rect x="14" y="1" width="7" height="6" />
                                                        <rect x="14" y="11" width="7" height="12" />
                                                    </svg>
                                                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                        Company
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    href="/"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Product
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Features
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Pricing
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/"
                                                    aria-label="Sign in"
                                                    title="Sign in"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Über Uns
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    Demos
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar
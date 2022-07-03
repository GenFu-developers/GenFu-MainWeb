import Link from "next/link";
import HeroHeaderText from "./HeroHeaderText";
import Modal from '../Modals/index'
import Button from "../Button";
import AlertComponent from '../Alert/LandingPageAlert'
import Feedback from '../Feedback/index'

import { sanityClient } from '../../sanity'
import { Alert } from "../../typings";

interface Props {
    alert: Alert
}

export default function Header({ alert }: Props) {
    return (
        <div>
            <AlertComponent alert={alert} />
            {/* <img className="absolute w-full h-full left-0 top-0 hero-clip-path" src="/hero-image.png" alt="" /> */}

            <img className=" z-0 absolute w-full h-full left-0 top-0 hero-clip-path brightness-50" src="https://cdn.pixabay.com/photo/2022/06/29/06/37/data-7291059_960_720.jpg" alt="" />
            {/*  */}
            <div className="h-screen">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                            <a href="/" className="mb-6 sm:mx-auto">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                                    <svg
                                        className="animate-pulse duration-1000 delay-1000 w-10 h-10 stroke-primary/40"
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
                            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-16">
                                <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto -mt-14">
                                    <HeroHeaderText />
                                </h2>
                                <Button buttonStyle="primary" type="link" href="/#überUns" className="mx-auto relative top-10 px-20">
                                    <span>Über Uns</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <section className="">
                        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl flex sm:py-16 lg:px-6">
                            <div className="mt-4  z-50">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
                                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                                <Button type="link" buttonStyle="success">
                                    <span>Angebote</span>
                                </Button>
                            </div>
                            <img className="w-full z-50 hidden md:block" src="/hero-illustration.svg" />
                        </div>
                    </section>
                    {/* Benefits Showcase */}

                </div>
            </div>
        </div>
    );
};

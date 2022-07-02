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
            <div className="bg-primary bg-[url('/hero-image.png')] bg-cover h-screen">
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
                                <Button buttonStyle="primary" type="link" href="/shop" className="mx-auto relative top-10">
                                    <span>Angebote</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Benefits Showcase */}

                </div>
            </div>
        </div>
    );
};

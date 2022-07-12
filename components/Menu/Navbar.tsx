import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import MenuButton from './MenuButton'
import BigLogo from "../Logo/big";
import ContactCall from '../ContactCall/index'
import AuthButtons from '../Auth/AuthButtons'
import ThemeSwitcher from "../ThemeSwitchButton";
import { useSession } from "next-auth/react";

interface Props {
    shadow?: boolean
}

/* Nav Links */
const navigation = {
    links: [
        { title: "Home", path: "/" },
        { title: "Partner", path: "/#partner" },
        { title: "Roadmap", path: "/roadmap" },
        { title: "Whitepaper", path: "/whitepaper" },
    ],
    buttons: [
        { title: "Demos", path: '/demos', style: 'primary' },
        { title: "Angebote", path: '/shop', style: 'success' },
    ]
}

const mobileNavVariants = {
    initial: {
        y: -50,
        opacity: 0,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.61, 1, 0.88, 1],
        },
    },
}

export default ({ shadow }: Props) => {
    const router = useRouter()
    const { data: session } = useSession()

    const [menuState, setMenuState] = useState(false)
    const [isSSRDone, setIsSSRDone] = useState(false)
    useEffect(
        function afterMount() {
            setIsSSRDone(true);
        },
        [],
    );
    if (shadow === undefined) shadow = true
    return (
        <header className={`z-50 w-full top-0 max-h-20 fixed  bg-light-container dark:bg-dark-container text-txt-dark dark:text-txt-light ${shadow ? 'shadow-lg' : ''}`}>
            <div className="xl:container flex p-5 mx-auto items-center">
                <nav className="gap-5 hidden md:flex  items-center text-base md:ml-auto w-full">
                    {navigation.links.map((item, idx) => (
                        <Button key={idx} type="link" buttonStyle="none" href={item.path}>
                            <label className={`text-txt-dark dark:text-txt-light hover:text-txt-dark/70  dark:hover:text-txt-light/70 ${router.pathname === item.path ? 'border-b-2 border-primary' : ''}`}>{item.title}</label>
                        </Button>
                    ))}
                </nav>
                <div className="w-full md:justify-center md:hidden mmd:flex scale-125 ml-20 md:ml-0">
                    <BigLogo />
                </div>
                <div className=" hidden md:flex gap-5  w-full justify-end">
                    {navigation.buttons.map((navItem) => (
                        <Button type="link" href={navItem.path} buttonStyle={navItem.style == 'success' || navItem.style == 'none' || navItem.style == 'outline' ? navItem.style : 'primary'}>
                            <label>
                                {navItem.title}
                            </label>
                        </Button>
                    ))}
                    {isSSRDone ? ThemeSwitcher() : null}
                </div>
                <MenuButton callback={() => { setMenuState(!menuState) }} className="block  md:hidden absolute right-4" />
                <div>
                    {/* mobile menu */}
                    {menuState &&
                        <motion.div initial="initial" animate="enter" variants={mobileNavVariants}
                            className="z-50  pt-5 md:hidden absolute left-0 flex flex-col items-center top-20 w-full pb-5 bg-background-light dark:bg-dark-container shadow-lg">
                            <div className="flex gap-5">
                                {navigation.buttons.map((navItem) => (
                                    <Button type="link" href={navItem.path} buttonStyle={navItem.style == 'success' || navItem.style == 'none' || navItem.style == 'outline' ? navItem.style : 'primary'}>
                                        <label>{navItem.title}</label>
                                    </Button>
                                ))}
                                {isSSRDone ? ThemeSwitcher() : null}
                            </div>
                            {navigation.links.map((navItem) => (
                                <Button buttonStyle="none" type="link" href={navItem.path} >
                                    <label className="text-txt-dark dark:text-txt-light">{navItem.title}</label>
                                </Button>
                            ))}
                        </motion.div>
                    }
                </div>
            </div>
            <ContactCall />
        </header>
    )
}
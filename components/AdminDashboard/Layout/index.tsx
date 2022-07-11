import { Session } from 'next-auth';
import React, { useState } from 'react'
import Button from '../../Button/Button';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer/index'

interface Props {
    children: JSX.Element;
    session: Session | null;
    user?: {
        name?: string | null;
        image?: string | null;
    }
}

function Layout({ children, session }: Props) {
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    return (
        <div className='background-light dark:background-dark h-screen '>
            <div className='overflow-hidden h-screen pl-24 pt-24 pr-4 pb-4 rounded-lg'>
                <Sidebar
                    user={{ name: session?.user?.name, image: session?.user?.image }} />

                <Navbar
                    user={{ name: session?.user?.name, image: session?.user?.image }} />
                <div className='w-full  overflow-y-auto bg-light-container dark:bg-dark-container h-full'>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
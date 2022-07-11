import { Session } from 'next-auth';
import React from 'react'
import Button from '../../Button/Button';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

interface Props {
    children: JSX.Element;
    session: Session | null;
}

function Layout({ children, session }: Props) {

    return (
        <div className='background-light dark:background-dark min-h-screen'>
            <div className='grid overflow-hidden grid-cols-5 grid-rows-5 place-items-center  gap-y-10 gap-x-10 gap-2 gap h-screen'>
                <Sidebar gridClassName="row-start-1 row-span-5" />
                <Navbar gridClassName="row-start-1 row-span-1 col-start-2 col-span-5"
                    user={{ name: session?.user?.name, image: session?.user?.image }} />
                <div className='row-start-2 row-span-5 col-start-2 col-span-5 p-4 overflow-y-auto bg-light-container dark:bg-dark-container w-full h-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
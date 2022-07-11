import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'
import PermissionRoles from '../../../lib/PermissionRoles';
import Button from '../../Button/Button'
import CircleLogo from '../../Logo/circle'

interface Props {
    user?: {
        name?: string | null;
        image?: string | null;
    }
}

const basePath = 'studio'

const navLinks = [
    {
        name: 'Übersicht',
        path: `/${basePath}/uebersicht`,
        role: 'staff',
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    },
    {
        name: 'Postfach',
        path: `/${basePath}/postfach`,
        role: 'staff',
    },
    {
        name: 'Analysegespräch',
        path: `/${basePath}/analysegespraech`,
        role: 'staff',
    },
    {
        name: 'Bestellungen',
        path: `/${basePath}/bestellungen`,
        role: 'staff',
    },
    {
        name: 'Accounts',
        path: `/${basePath}/accounts`,
        role: 'admin',
    },
    {
        name: 'Analysen',
        path: `/${basePath}/analysen`,
        role: 'admin',
    },

]

interface Props {
    name?: String;
    path?: string;
    role?: 'admin' | 'staff';
}


function Sidebar({ user }: Props) {
    const router = useRouter()
    const { data: session } = useSession()

    function SidebarNavItem({ name, path, role }: Props) {
        // @ts-ignore
        if (PermissionRoles[session?.user?.role] >= PermissionRoles[role]) {
            return (
                <Button type='link' className='w-full' buttonStyle={router.pathname === path ? 'primary' : 'none'} href={path}>
                    <label className={''}>{name}</label>
                </Button>
            )
        }
        return (null)
    }
    return (
        <div className="absolute left-0 top-20 flex flex-col justify-between w-20 h-screen bg-light-container dark:bg-dark-container shadow-lg dark:shadow-white ">
            <div>
                <div className="inline-flex items-center justify-center w-full h-16">
                    {/* <label className="block w-10 h-10 bg-gray-200 rounded-lg"></label> */}
                    <img className='w-10 h-10 rounded-lg '
                        src={`${user?.image}`} alt="" />
                </div>

                <div className="border-t border-gray-100">
                    <nav className="flex flex-col p-2">
                        {navLinks.map((item) => (
                            <div className="py-4">
                                <a
                                    href=""
                                    className="flex justify-center px-2 py-1.5 text-primary rounded bg-blue-50 dark:bg-blue-200 group relative"
                                >
                                    {item.icon}

                                    <label
                                        className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100"
                                    >
                                        General
                                    </label>
                                </a>
                            </div>
                        ))
                        }
                    </nav>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100">
                <form action="/logout">
                    <button
                        type="submit"
                        className="flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 group relative"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>

                        <label
                            className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100"
                        >
                            Logout
                        </label>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Sidebar
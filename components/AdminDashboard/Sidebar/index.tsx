import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'
import PermissionRoles from '../../../lib/PermissionRoles';
import Button from '../../Button/Button'
import CircleLogo from '../../Logo/circle'

interface Props {
    gridClassName: string;
}


const navLinks = [
    {
        name: 'Home',
        path: '/workspace/home',
        role: 'staff',
    },
    {
        name: 'Analysegespräch',
        path: '/workspace/analysegespraech',
        role: 'staff',
    },
    {
        name: 'Postfach',
        path: '/workspace/postfach',
        role: 'staff',
    },
    {
        name: 'Bestellungen',
        path: '/workspace/bestellungen',
        role: 'staff',
    },
    {
        name: 'Accounts',
        path: '/workspace/accounts',
        role: 'admin',
    },
    {
        name: 'Analytics',
        path: '/workspace/analytics',
        role: 'admin',
    },
]

interface Props {
    name?: String;
    path?: string;
    role?: 'admin' | 'staff';
}


function Sidebar({ gridClassName }: Props) {
    const router = useRouter()
    const { data: session } = useSession()

    function SidebarNavItem({ name, path, role }: Props) {
        // @ts-ignore
        if (PermissionRoles[session?.user?.role] >= PermissionRoles[role]) {
            return (
                <Button type='link' className='w-full' buttonStyle={router.pathname === path ? 'primary' : 'none'} href={path}>
                    <span className={''}>{name}</span>
                </Button>
            )
        }
        return (null)
    }
    return (
        <div className={`[ ${gridClassName} ] h-max py-10 w-full bg-light-container dark:bg-dark-container rounded-lg shadow-md`}>
            <div className='flex flex-col place-items-center text-4xl font-black'>
                <Button type='link' buttonStyle='none' href='/workspace/home'>
                    <CircleLogo size={{
                        width: 20,
                        height: 20
                    }} />
                </Button>
                <h2>Workspace</h2>
            </div>

            {/* Nav Links */}
            <div className={`flex flex-col items-center gap-4 mt-4`}>
                {navLinks.map((item) => (
                    <SidebarNavItem name={item.name} path={item.path} role={item.role} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
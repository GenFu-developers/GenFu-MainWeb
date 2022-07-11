import React from 'react'
import Button from '../../Button/Button'
import CircleLogo from '../../Logo/circle'
import ThemeSwitcher from '../../ThemeSwitchButton/index'


interface Props {
    user?: {
        name?: string | null;
        image?: string | null;
    }
    gridClassName: string
}

function Navbar({ user, gridClassName }: Props) {
    return (
        <nav className={`[ ${gridClassName} ] container w-full bg-light-container dark:bg-dark-container px-5 py-2 rounded-lg shadow-md`}>
            <div className='flex justify-between'>
                <div className='flex place-items-center text-4xl font-black'>
                    <Button type='link' buttonStyle='none' href='/workspace/home'>
                        <CircleLogo size={{
                            width: 10,
                            height: 10
                        }} />
                    </Button>
                    <h2>Workspace</h2>
                </div>


                <div className='flex gap-5'>
                    {/* user profile */}
                    <div className='flex place-items-center gap-2'>
                        {/* @ts-ignore */}
                        <p>Hi, <span className="font-bold">{user.name}</span>!</p>
                        <img className='rounded-full w-10 h-10' src={`${user?.image}`} alt="img" />
                    </div>
                    <ThemeSwitcher />
                    {/* Home Button */}
                    <Button type='link' buttonStyle='none' href='/'>
                        <svg className='w-8 h-8 fill-txt-dark/70 dark:fill-txt-light/70'
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><g transform="translate(1024 0) scale(-1 1)"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5z" /></g></svg>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
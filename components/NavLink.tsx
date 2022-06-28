import React from 'react'
import Link from 'next/link';
import Button from './Button';


interface Props {
    name: string;
    href: string;
    dropDownLinks?: {
        name: string;
        href: string;
    }[];
}

function NavLink({ name, dropDownLinks, href }: Props) {
    return (
        <div className="flex justify-center group w-max">
            <div>
                <div className="dropdown relative">
                    <Button type='link' buttonStyle='none' href={href}>
                        <div className='flex py-2'>
                            <p className='text-txt-dark dark:text-txt-light'>{name}</p>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="caret-down"
                                className={`w-2 ml-2 transition-transform duration-600 group-hover:rotate-180 group-hover:mt-1 fill-txt-dark dark:fill-txt-light`}
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                            </svg>
                        </div>
                    </Button>

                    {/*  */}
                    <ul
                        className={`-translate-y-2 dropdown-menu w-36 absolute bg-background-light dark:bg-background-dark text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden group-hover:flex group-hover:flex-col m-0 bg-clip-padding border-none`}
                        aria-labelledby="dropdownMenuButton2">
                        {/* className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" */}
                        {dropDownLinks?.map((dropDownLink) => (
                            <li>
                                <Link href={dropDownLink.href}>
                                    <div className="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 dark:text-txt-light/80 hover:scale-95 transition-transform duration-600">
                                        {dropDownLink.name}
                                    </div>
                                </Link>
                            </li>
                        ))}


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavLink
import { useState, useRef, useEffect } from "react"
import { useTheme } from "next-themes";
import Button from "./Button";

// Profile Dropdown

export default () => {
    const renderThemeChanger = () => {
        const { systemTheme, theme, setTheme } = useTheme();
        const switchTheme = () => {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
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

    const [menuState, setMenuState] = useState(false)
    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "/" },
        { title: "Partner", path: "/#partner" },
        { title: "Vorgang", path: "/#vorgang" },
        { title: "Über uns", path: "/#über-uns" },
        { title: "Angebote", path: "/shop" },
    ]
    return (
        <nav className="bg-light-container dark:bg-dark-container shadow-lg">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto">
                <div className="flex-none lg:flex-initial">
                    <a href="/">
                        {/* <img
                            src="https://www.floatui.com/logo.svg"
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        /> */}
                        <span className="text-3xl font-black text-txt-dark dark:text-txt-light">GenFu</span>
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={`bg-light-container dark:bg-dark-container absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-txt-dark/70 dark:text-txt-light/70  hover:text-gray-900">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6 scale-90 md:scale-100">
                        <form className="flex items-center space-x-2 border rounded-md p-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none stroke-txt-dark dark:stroke-txt-light" fill="none" viewBox="0 0 24 24" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-full outline-none appearance-none placeholder-gray-500 text-xs md:text-md text-gray-500 bg-transparent sm:w-auto"
                                type="text"
                                placeholder="Search"
                            />
                        </form>
                        {renderThemeChanger()}
                        <button
                            className="outline-none text-txt-dark/70 dark:text-txt-light/70 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
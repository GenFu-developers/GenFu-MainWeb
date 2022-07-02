import React, { useState } from 'react'

interface Props {
    children: JSX.Element;
    containerClassList: string;
    closeBtnColor?: string;
}

function index({ children, containerClassList, closeBtnColor }: Props) {
    const [closed, setClosed] = useState(false)
    return (
        <div>
            {!closed &&
                <div className={`w-full ${containerClassList}`}>
                    <div className="container relative flex px-6 basis-3/4 justify-center py-2 mx-auto">
                        <div className="flex">
                            {children}
                        </div>
                        <button className="absolute -right-40 p-1 self-end transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
                            onClick={() => { setClosed(true) }}>
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6L18 18" stroke={closeBtnColor ? closeBtnColor : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>}
        </div>
    )
}

export default index
import React, { useState } from 'react'


function HeroHeaderText() {
    const tabs = [
        {
            'title': 'Vision',
            'value': '2 ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, consequuntur, minus quas voluptates at consectetur.'
        },
        {
            'title': 'Qualität',
            'value': '1 ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, consequuntur, minus quas voluptates at consectetur.'
        },
        {
            'title': 'Service',
            'value': '3 ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, consequuntur, minus quas voluptates at consectetur.'
        },
        {
            'title': 'Nachhaltig',
            'value': '4 ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, consequuntur, minus quas voluptates at consectetur.'
        },
    ]
    const [activeTab, setActiveTab] = useState(tabs[0])
    const basicTextStyle = 'flex gap-2 items-center text-shadow-md-dark text-txt-light text-xl md:text-3xl lg:text-4xl cursor-pointer transition-colors duration-500'
    return (
        <div className='flex flex-col items-center gap-3 scale-110 lg:scale-125 mx-auto font-bold'>
            <div className='flex flex-col gap-1 md:gap-3'>
                <div className='flex gap-1 md:gap-3'>
                    <span className={`${basicTextStyle} ${activeTab.title === tabs[0].title ? ' text-secondary' : ''}`}
                        onClick={() => { setActiveTab(tabs[0]) }}>
                        {`${tabs[0].title} `}
                        <svg className='mt-px scale-75 lg:scale-100' width="20" height="21" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1745 23.4244L18.2239 15.375H0.250118V11.625H18.2239L10.1745 3.57563L12.8257 0.924377L25.4014 13.5L12.8257 26.0756L10.1745 23.4244Z" fill="white" />
                        </svg>
                    </span>
                    {''}
                    <span className={`${basicTextStyle} ${activeTab.title === tabs[1].title ? 'text-secondary' : ''}`}
                        onClick={() => { setActiveTab(tabs[1]) }}>
                        {`${tabs[1].title}`}
                        <svg className='mt-px scale-75 lg:scale-100' width="20" height="21" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1745 23.4244L18.2239 15.375H0.250118V11.625H18.2239L10.1745 3.57563L12.8257 0.924377L25.4014 13.5L12.8257 26.0756L10.1745 23.4244Z" fill="white" />
                        </svg>
                    </span>
                    <span className={`${basicTextStyle} ${activeTab.title === tabs[2].title ? 'text-secondary' : ''}`}
                        onClick={() => { setActiveTab(tabs[2]) }}>
                        {`${tabs[2].title}`}
                    </span>
                </div>
                <span className={`mx-auto ${basicTextStyle} ${activeTab.title === tabs[3].title ? 'text-secondary' : ''}`}
                    onClick={() => { setActiveTab(tabs[3]) }}>
                    {tabs[3].title}</span>
            </div>
            <p className="text-base px-2 text-center text-txt-light/70 md:text-md mb-5 font-medium">
                {activeTab.value}
            </p>
        </div>
    )
}

export default HeroHeaderText
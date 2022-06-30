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
        <div className='flex flex-col items-center gap-3 scale-110 lg:scale-125 mx-auto'>
            <div className='flex flex-col gap-1 md:gap-3'>
                <div className='flex gap-1 md:gap-3'>
                    <span className={`${basicTextStyle} ${activeTab.title === tabs[0].title ? 'text-secondary' : ''}`}
                        onClick={() => { setActiveTab(tabs[0]) }}>
                        {`${tabs[0].title} `} &#8211;
                    </span>
                    {''}
                    <span className={`${basicTextStyle} ${activeTab.title === tabs[1].title ? 'text-secondary' : ''}`}
                        onClick={() => { setActiveTab(tabs[1]) }}>
                        {`${tabs[1].title}`}
                    </span>
                    <span className='-translate-y-px md:-translate-y-2'>&#8594;</span>
                    <span className={`${basicTextStyle} ${activeTab.title === tabs[2].title ? 'text-secondary' : ''}`}
                        onClick={() => { setActiveTab(tabs[2]) }}>
                        {`${tabs[2].title}`}
                    </span>
                </div>
                <span className={`mx-auto ${basicTextStyle} ${activeTab.title === tabs[3].title ? 'text-secondary' : ''}`}
                    onClick={() => { setActiveTab(tabs[3]) }}>
                    {tabs[3].title}</span>
            </div>
            <p className="text-base px-2 text-center text-txt-light md:text-lg font-medium">
                {activeTab.value}
            </p>
        </div>
    )
}

export default HeroHeaderText
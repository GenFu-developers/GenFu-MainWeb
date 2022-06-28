import React, { useState } from 'react'


function HeroHeaderText() {
    const tabs = [
        {
            'title': 'Qualität',
            'value': '1 ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, consequuntur, minus quas voluptates at consectetur.'
        },
        {
            'title': 'Vision',
            'value': '2 ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, consequuntur, minus quas voluptates at consectetur.'
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
    const basicTextStyle = 'text-txt-light cursor-pointer transition-colors duration-500'
    return (
        <div className='flex flex-col gap-3'>
            <div>
                <span className={`${basicTextStyle} ${activeTab.title === tabs[0].title ? 'text-secondary' : ''}`}
                    onClick={() => { setActiveTab(tabs[0]) }}>
                    {tabs[0].title}
                </span>
                &#8594;
                <span className={`${basicTextStyle} ${activeTab.title === tabs[1].title ? 'text-secondary' : ''}`}
                    onClick={() => { setActiveTab(tabs[1]) }}>
                    {tabs[1].title}
                </span>
                &#8594;
                <span className={`${basicTextStyle} ${activeTab.title === tabs[2].title ? 'text-secondary' : ''}`}
                    onClick={() => { setActiveTab(tabs[2]) }}>
                    {tabs[2].title}
                </span>
                <br />
                <span className={`${basicTextStyle} ${activeTab.title === tabs[3].title ? 'text-secondary' : ''}`}
                    onClick={() => { setActiveTab(tabs[3]) }}>
                    {tabs[3].title}</span>
            </div>
            <p className="text-base text-txt-light/80 md:text-lg font-medium">
                {activeTab.value}
            </p>
        </div>
    )
}

export default HeroHeaderText
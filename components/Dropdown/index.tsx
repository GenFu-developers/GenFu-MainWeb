import React from 'react'

interface Props {
    onChange: Function;
    dropdownItems: {
        name: string;
        value: string;
    }[]
}

function Dropdown({ dropdownItems, onChange }: Props) {

    return (
        <div className="w-full space-y-0.5">
            <label htmlFor="basic" className="text-xs font-medium text-txt-dark/50 dark:text-txt-light/50">
                Dropdown
            </label>
            <select onChange={(e) => { onChange(e) }}
                id="dropdown" name="dropdown"
                className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 bg-transparent text-txt-dark/70 dark:text-txt-light/70 focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out">
                {
                    dropdownItems.map((item) => (
                        <option selected value={item.value}>{item.name}</option>
                    ))
                }
            </select>
        </div>

    )
}

export default Dropdown
import React, { useState } from 'react'

function Analysetermin() {
    const [isSubmit, setIsSubmit] = useState()
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[550px]">
                <form action="/api/analysetermin" method="POST">
                    <div className="mb-5">
                        <label
                            form='name'
                            className="mb-3 block text-base font-medium text-txt-dark dark:text-txt-light"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="..."
                            id="name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        <label
                            form='name'
                            className="mb-3 block text-base font-medium text-txt-dark dark:text-txt-light"
                        >
                            Firmen Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="..."
                            id="name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            form="phone"
                            className="mb-3 block text-base font-medium text-txt-dark dark:text-txt-light">
                            Telefonnummer
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="..."
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            form="email"
                            className="mb-3 block text-base font-medium text-txt-dark dark:text-txt-light"
                        >
                            Email-Adresse
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="..."
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    form="date"
                                    className="mb-3 block text-base font-medium text-txt-dark dark:text-txt-light"
                                >
                                    Datum
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    form="time"
                                    className="mb-3 block text-base font-medium text-txt-dark dark:text-txt-light"
                                >
                                    Uhrzeit
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            form='customerNotion'
                            className="mb-3 block text-base font-medium text-txt-dark dark:text-txt-light"
                        >
                            Vorstellungen <span className='text-txt-dark/50 dark:text-txt-light/50'>{`(optional)`}</span>
                        </label>
                        <textarea
                            name="customerNotions"
                            placeholder="..."
                            id="name"
                            className="w-full min-h-20 rounded-md border border-[#e0e0e0] bg-white p-2 h-32 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div>
                        <p className='px-5 text-sm mb-5 text-txt-dark/70 dark:text-txt-light/70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam cupiditate libero doloribus sapiente, nulla eum consectetur veritatis. Dolor, veniam facilis.</p>
                        <button
                            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] text-center text-base font-semibold text-white outline-none mx-auto py-3 cursor-pointer" >Analysetermin vereinbaren</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Analysetermin

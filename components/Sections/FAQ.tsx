import Collaps from "../Collaps";

const FAQHeader = {
    title: 'The quick, brown fox jumps over a lazy dogy',
    subtitle: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.`,
}

const FAQData = [
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
        value: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.`,
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
        value: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.`,
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
        value: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.`,
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
        value: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.`,
    },
    {
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
        value: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.`,
    },
]


export default function Faq() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center">
                    <a href="/" className="mb-6 sm:mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-200 dark:bg-indigo-400">
                            <svg
                                className="w-10 h-10 stroke-txt-dark dark:stroke-txt-light animate-pulse duration-1000"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-txt-dark dark:text-txt-light sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20  lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                            </span>{' '}
                            {FAQHeader.title}
                        </h2>
                        <p className="text-base text-txt-dark/60 dark:text-txt-light/70 md:text-lg">
                            {FAQHeader.subtitle}
                        </p>
                    </div>
                </div>
                <Collaps data={FAQData} />

            </div>
        </div>
    );
};
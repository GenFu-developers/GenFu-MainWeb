import Button from "./Button";

interface RenderStep {
    title: string;
    text: string;
    number: number;
}

const stepsData = [
    {
        title: 'title 1',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat distinctio laudantium nihil sequi unde blanditiis in obcaecati atque possimus dolorem, est, beatae iusto dicta eos nostrum commodi quibusdam. Non.',
        number: 1
    },
    {
        title: 'title 2',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat distinctio laudantium nihil sequi unde blanditiis in obcaecati atque possimus dolorem, est, beatae iusto dicta eos nostrum commodi quibusdam. Non.',
        number: 2
    },
    {
        title: 'title 3',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat distinctio laudantium nihil sequi unde blanditiis in obcaecati atque possimus dolorem, est, beatae iusto dicta eos nostrum commodi quibusdam. Non.',
        number: 3
    },
    {
        title: 'title 4',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat distinctio laudantium nihil sequi unde blanditiis in obcaecati atque possimus dolorem, est, beatae iusto dicta eos nostrum commodi quibusdam. Non.',
        number: 4
    },
    {
        title: 'title 5',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat distinctio laudantium nihil sequi unde blanditiis in obcaecati atque possimus dolorem, est, beatae iusto dicta eos nostrum commodi quibusdam. Non.',
        number: 5
    },
    {
        title: 'title 6',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat distinctio laudantium nihil sequi unde blanditiis in obcaecati atque possimus dolorem, est, beatae iusto dicta eos nostrum commodi quibusdam. Non.',
        number: 6
    },
]

export default function Steps() {


    return (
        <section className="text-gray-600 body-font px-5 mb-10">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">STEP 1</h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                </div>
                <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">STEP 2</h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                    </div>
                </div>
                <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="3"></circle>
                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">STEP 3</h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                    </div>
                </div>
                <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">STEP 4</h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                </div>
                <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-txt-dark dark:text-txt-light mb-1 tracking-wider">FINISH</h2>
                        <p className="leading-relaxed text-txt-dark/60 dark:text-txt-light/60">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
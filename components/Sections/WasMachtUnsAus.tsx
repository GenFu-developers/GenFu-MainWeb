import AnImage from '../AnImage/index'

export default function Product() {
    return (
        <div className="px-4 py-16 lg:-mt-40 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center order-last">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-txt-light sm:text-4xl sm:leading-none">
                            Was macht uns aus?
                        </h2>
                        <p className="text-base text-gray-700 dark:text-txt-light/80 md:text-lg">
                            Wir haben uns gegründet, um alte, moralische Werte zurück zu bringen.
                            Die rede ist von Vertrauen, Leidenschaft und Liebe.
                            <br />
                            Was das für uns bedeutet siehst du --hier--. {'(leidenschaft liebe vertrauen erklärt)'}
                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                        <div>
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-200 dark:bg-indigo-400">
                                <svg
                                    className="w-10 h-10 stroke-txt-dark dark:stroke-txt-light animate-pulse duration-1000"
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
                            <h6 className="mb-2 font-semibold text-xl md:text-2xl leading-5 dark:text-txt-light">
                                Unternehmenskultur
                            </h6>
                            <p className="text-md text-gray-900 dark:text-txt-light/80">
                                Die Bindung zu unseren Mitarbeitern, steht wie die Bindung zu unseren Kunden an erster Stelle.
                                Deshalb liegen uns folgende Dinge am Herzen
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-200 dark:bg-indigo-400">
                                <svg
                                    className="animate-pulse duration-1000 w-10 h-10 stroke-txt-dark dark:stroke-txt-light"
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
                            <h6 className="mb-2 font-semibold text-xl md:text-2xl leading-5 dark:text-txt-light">
                                Kundenverhältnis
                            </h6>
                            <p className="text-md text-gray-900 dark:text-txt-light/80">
                                Kapitalismus ohne moralische Werte ist für uns nicht vorstellbar. Deshalb steht bei GenFu der Kunde und seine Bedürfnisse an erster Stelle.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <AnImage
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <section className="text-secondary dark:text-white body-font lg:pt-28">
                <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
                    <div className="flex flex-col w-full mb-10 text-left lg:text-center">
                        <h1 className="mb-6 text-4xl font-black tracking-tighter text-blueGray-800 dark:text-white md:text-5xl lg:text-7xl title-font">
                            Make Resumes / Apply for Jobs
                        <br className="hidden lg:block" />
                            Post an opening at your company
                    </h1>
                        <p className="mx-auto text-lg leading-snug tracking-tight text-blueGray-500 dark:text-blueGray-400 lg:w-1/2 dark:text-blueGray-300">
                            Create multiple versions of your resume and appy for jobs
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-white dark:text-blueGray-300 body-font" id="features">
                <div className="container px-5 py-24 mx-auto lg:px-20">
                    <div className="flex flex-col w-full mb-12 text-left lg:text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-blueGray-800 dark:text-white md:text-8xl lg:text-6xl title-font">
                            Lorem ipsum dolor sit amet,
                            <br className="hidden lg:block" />
                            consectetur adipiscing elit.
                        </h1>
                        <p className="mx-auto text-lg leading-snug tracking-tight text-blueGray-500 dark:text-blueGray-400 lg:w-1/2">

                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/3">
                            <div className="flex flex-col h-full p-8 rounded-lg">
                                <div className="flex inline-flex items-center mb-3">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full text-primary bg-secondary">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="ml-4 text-2xl font-black dark:text-white text-blueGray-800">Aliquam</h2>
                                </div>
                                <span className="inline-block w-20 h-1 mt-6 mb-4 rounded-xl bg-gradient-to-r from-lightBlue-400 to-lightBlue-500"></span>
                                <div className="flex-grow">
                                    <p className="text-lg leading-snug tracking-tight x-auto text-blueGray-500 dark:text-blueGray-400 dark:text-blueGray-300">
                                        Aliquam ut auctor elit. Duis id euismod quam, vitae facilisis tortor. Integer ac turpis risus. Donec volutpat venenatis quam
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="flex flex-col h-full p-8 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full text-primary bg-secondary">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="ml-4 text-2xl font-black dark:text-white text-blueGray-800">
                                        Donec
                                    </h2>
                                </div>
                                <span className="inline-block w-20 h-1 mt-6 mb-4 rounded-xl bg-gradient-to-r from-lightBlue-400 to-lightBlue-500"></span>
                                <div className="flex-grow">
                                    <p className="text-lg leading-snug tracking-tight x-auto text-blueGray-500 dark:text-blueGray-400 dark:text-blueGray-300">
                                        Donec a tellus aliquet, euismod velit a, tincidunt dui. Fusce blandit lectus ac molestie faucibus
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="flex flex-col h-full p-8 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full text-primary bg-secondary">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="ml-4 text-2xl font-black dark:text-white text-blueGray-800">
                                        Curabitur
                                    </h2>
                                </div>
                                <span className="inline-block w-20 h-1 mt-6 mb-4 rounded-xl bg-gradient-to-r from-lightBlue-400 to-lightBlue-500"></span>
                                <div className="flex-grow">
                                    <p className="text-lg leading-snug tracking-tight x-auto text-blueGray-500 dark:text-blueGray-400 dark:text-blueGray-300">
                                        Curabitur lobortis tempor ligula, consectetur volutpat metus aliquet et. Nunc consequat ligula
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;

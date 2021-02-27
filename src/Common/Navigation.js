import { useState } from 'react';
import NavigationLinks from './NavigationLinks';

const Navigation = () => {

    const [displaySection, setDisplaySection] = useState(() => ({
        profile: false,
        menu: false
    }));

    const toggleMenu = (e) => {
        e.preventDefault();
        setDisplaySection({
            ...displaySection,
            menu: !displaySection.menu
        });
    }

    return (
        <div>
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">

                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="/" title='Home' className="bg-gray-900 text-white px-3 py-2 text-sm font-bold">Home</a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <NavigationLinks />
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="inline-flex items-center justify-center p-2 text-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {displaySection.menu === true ? (
                    <div className="md:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="/" title='Home' className="bg-gray-900 text-white px-3 py-2 text-sm font-bold">Home</a>
                        </div>
                        <div className="pt-4 pb-3 border-t border-white">
                            <div className="mt-3 px-2 space-y-1">
                                <a href="#" className="block px-3 py-2 rounded-md text-white">Your Profile</a>
                                <a href="#" className="block px-3 py-2 rounded-md text-white">Settings</a>
                                <a href="#" className="block px-3 py-2 rounded-md text-white">Sign out</a>
                            </div>
                        </div>
                    </div>
                ) : ''}
            </nav>
        </div>
    )
}

export default Navigation;

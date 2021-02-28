import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className='text-white border-t'>
            <div
                className='container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap '>
                <div className='flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left'>
                    <a className='flex items-center justify-center font-medium text-gray-900 title-font md:justify-start'>
                        <div className='w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500'>
                        </div>
                        <h2
                            className='text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400'>
                            No Name
                            </h2>
                    </a>
                </div>
                <div className='flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 '>
                    <div className='w-full px-4 lg:w-1/3 md:w-1/2'>
                        <h1 className='mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font'>
                            Product
                        </h1>
                        <nav className='mb-10 list-none'>
                            <li>
                                <a href='/resumes' className='text-sm text-gray-600 hover:text-gray-800'>Resumes</a>
                            </li>
                        </nav>
                    </div>
                    <div className='w-full px-4 lg:w-1/3 md:w-1/2'>
                        <h1 className='mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font'>
                            Company
</h1>
                        <nav className='mb-10 list-none'>
                            <li>
                                <a href='/' className='text-sm text-gray-600 hover:text-gray-800'>Home</a>
                            </li>
                            <li>
                                <a href='/about' className='text-sm text-gray-600 hover:text-gray-800'>About</a>
                            </li>
                        </nav>
                    </div>
                    <div className='w-full px-4 lg:w-1/3 md:w-1/2'>
                        <h1 className='mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font'>
                            Legal
                            </h1>
                        <nav className='mb-10 list-none'>
                            <li>
                                <a href='privacy-policy' className='text-sm text-gray-600 hover:text-gray-800'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href='tos' className='text-sm text-gray-600 hover:text-gray-800'>Terms Of Service</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <div className='container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row'>
                    <p className='text-sm text-center text-gray-200 sm:text-left '>
                        &copy; {(new Date()).getFullYear()}
                    </p>
                    <span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start'>
                        <a
                            href='https://www.github.com/iJKTen'
                            target='_blank'
                            rel='nofollow noreferrer'
                            className='text-white hover:text-blue-500'>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a
                            rel='nofollow noreferrer'
                            target='_blank'
                            href='https://www.twitter.com/MyFriendJai'
                            className='ml-4 text-white hover:text-blue-500'>
                            <svg fill='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                className='w-5 h-5' viewBox='0 0 24 24'>
                                <path
                                    d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'>
                                </path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

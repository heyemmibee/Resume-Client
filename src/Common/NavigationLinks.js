import { Fragment, useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import NavigationAuthLinks from './NavigationAuthLinks';

const NavigationLinks = () => {

    const authContext = useContext(AuthContext);

    const [displaySection, setDisplaySection] = useState(() => ({
        profile: false,
        menu: false
    }));

    const toggleProfile = (e) => {
        e.preventDefault();
        setDisplaySection({
            ...displaySection,
            profile: !displaySection.profile
        });
    }

    if (authContext.user.accessToken === '') {
        return (
            <Fragment>
                <a
                    href='/login'
                    title='Home'
                    className='bg-gray-900 text-white px-3 py-2 text-sm font-bold'>
                    Login
                </a>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div>
                <a
                    href='/resumes'
                    title='Home'
                    className='text-white px-3 py-2 text-sm font-bold text-2xl'>
                    Resumes
                </a>
            </div>
            <div className='ml-3 relative'>
                <div>
                    <button
                        onClick={toggleProfile}
                        className='text-white px-3 py-2 mt-1 text-sm font-bold text-2xl'
                        id='user-menu'
                        aria-haspopup='true'>
                        <span className='sr-only'>Open user menu</span>
                        Profile
                    </button>
                </div>
                {displaySection.profile === true ? (
                    <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5' role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
                        <NavigationAuthLinks className='text-primary' />
                    </div>
                ) : ''}
            </div>
        </Fragment>
    );
}

export default NavigationLinks;

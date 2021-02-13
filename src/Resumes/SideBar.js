import { Fragment } from 'react';

const SideBar = ({ title, subHeading }) => {
    return (
        <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
                <h3
                    className='text-lg font-medium leading-6 text-gray-900'>
                    {title}
                </h3>
                {subHeading !== undefined ?
                    <p className='mt-1 text-sm text-gray-600'>
                        Add your career information.
                    </p> : <Fragment />
                }
            </div>
        </div>
    )
}

export default SideBar;

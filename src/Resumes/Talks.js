import { Fragment } from 'react';

const Talks = (props) => {
    return (
        <Fragment>
            {props.talks.map((item, index) => (
                <div
                    key={index}
                    className='px-4 py-5 bg-white sm:p-6'>
                    <div
                        className='grid grid-cols-6 gap-6'>
                        <div
                            className='col-span-6 sm:col-span-4'>
                            <label
                                htmlFor={`t_title${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Title
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.title}
                                type='text'
                                name={`t_title${index}`}
                                data-customkey='title'
                                id={`t_title${index}`}
                                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-4'>
                            <label
                                htmlFor={`t_year${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Year
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.year}
                                type='number'
                                name={`t_year${index}`}
                                id={`t_year${index}`}
                                data-customkey='year'
                                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`t_event${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Event
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.event}
                                type='text'
                                id={`t_event${index}`}
                                name={`t_event${index}`}
                                data-customkey='event'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                            </input>
                        </div>
                        <div
                            className='col-span-6'>
                            <label
                                htmlFor={`t_url${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Url
                            </label>
                            <div
                                className="mt-1 flex rounded-md shadow-sm">
                                <span
                                    className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    http://
                                </span>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.url}
                                    type='url'
                                    name={`t_url${index}`}
                                    data-customkey='url'
                                    id={`t_url${index}`}
                                    className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                                    placeholder='www.example.com'
                                />
                            </div>
                        </div>
                        <div
                            className='col-span-6 sm:col-span-6 lg:col-span-2'>
                            <label
                                htmlFor={`t_summary${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Summary
                            </label>
                            <textarea
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.summary}
                                name={`t_summary${index}`}
                                id={`t_summary${index}`}
                                data-customkey='summary'
                                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                        </div>
                        <button
                            className='inline-block w-6'
                            onClick={(e) => props.componentRemoved(e, props.resumeKey, index)}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M20 12H4'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
            <div className='col-span-6'>
                <button
                    onClick={(e) => props.componentAdded(e, props.resumeKey)}
                    className='w-42 flex flex-row justify-between'>
                    <div
                        className='w-6'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2' d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                        </svg>
                    </div>
                    <div> add talks</div>
                </button>
            </div >
        </Fragment>
    )
}

export default Talks;

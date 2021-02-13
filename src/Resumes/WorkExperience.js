import { Fragment } from 'react';

const WorkExperience = (props) => {
    return (
        <Fragment>
            {
                props.experience.map((item, index) => (
                    <div
                        key={index}
                        className='px-4 py-5 bg-white sm:p-6'>
                        <div
                            className='grid grid-cols-6 gap-6'>
                            <div
                                className='col-span-6 sm:col-span-4'>
                                <label
                                    htmlFor={`we_title${index}`}
                                    className='block text-sm font-medium text-gray-700'>
                                    Title
                                </label>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.title}
                                    type='text'
                                    name={`we_title${index}`}
                                    data-customkey='title'
                                    id={`we_title${index}`}
                                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                            </div>
                            <div
                                className='col-span-6 sm:col-span-4'>
                                <label
                                    htmlFor={`we_description${index}`}
                                    className='block text-sm font-medium text-gray-700'>
                                    Description
                                </label>
                                <textarea
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.description}
                                    name={`we_description${index}`}
                                    id={`we_description${index}`}
                                    data-customkey='description'
                                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                            </div>
                            <div
                                className='col-span-6 sm:col-span-3'>
                                <label
                                    htmlFor={`we_employmentType${index}`}
                                    className='block text-sm font-medium text-gray-700'>
                                    Employment Type
                                </label>
                                <select
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={props.employment_type}
                                    id={`we_employmentType${index}`}
                                    name={`we_employmentType${index}`}
                                    data-customkey='employment_type'
                                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                                    <option>Full-Time</option>
                                    <option>Part Time</option>
                                    <option>Self Employed</option>
                                </select>
                            </div>
                            <div
                                className='col-span-6'>
                                <label
                                    htmlFor={`we_from${index}`}
                                    className='block text-sm font-medium text-gray-700'>
                                    From
                                </label>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={props.from}
                                    type='date'
                                    name={`we_from${index}`}
                                    data-customkey='from'
                                    id={`we_from${index}`}
                                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                            </div>
                            <div
                                className='col-span-6 sm:col-span-6 lg:col-span-2'>
                                <label
                                    htmlFor={`to${index}`}
                                    className='block text-sm font-medium text-gray-700'>
                                    To
                                </label>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={props.to}
                                    type='date'
                                    name={`to${index}`}
                                    id={`to${index}`}
                                    data-customkey='to'
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
                ))
            }
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
                    <div> add work experience</div>
                </button>
            </div >
        </Fragment>
    )
}

export default WorkExperience;

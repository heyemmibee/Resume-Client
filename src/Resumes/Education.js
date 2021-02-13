import { Fragment } from 'react';

const Education = (props) => {
    return (
        <Fragment>
            {props.education.map((item, index) => (
                <div
                    key={index}
                    className='px-4 py-5 bg-white sm:p-6'>
                    <div
                        className='grid grid-cols-6 gap-6'>
                        <div
                            className='col-span-6 sm:col-span-4'>
                            <label
                                htmlFor={`e_school${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                School
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.school}
                                type='text'
                                name={`e_school${index}`}
                                data-customkey='school'
                                id={`e_school${index}`}
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-4'>
                            <label
                                htmlFor={`e_degree${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Degree
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.degree}
                                type='text'
                                name={`e_degree${index}`}
                                id={`e_degree${index}`}
                                data-customkey='degree'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_field_of_study${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Field of Study
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.field_of_study}
                                type='text'
                                id={`e_field_of_study${index}`}
                                name={`e_field_of_study${index}`}
                                data-customkey='field_of_study'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_grade${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Grade
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.grade}
                                type='number'
                                id={`e_grade${index}`}
                                name={`e_grade${index}`}
                                data-customkey='grade'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-6 lg:col-span-2'>
                            <label
                                htmlFor={`e_from${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                From
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.from}
                                type='date'
                                name={`e_from${index}`}
                                id={`e_from${index}`}
                                data-customkey='from'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-6 lg:col-span-2'>
                            <label
                                htmlFor={`e_to${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                To
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.to}
                                type='date'
                                name={`e_to${index}`}
                                id={`e_to${index}`}
                                data-customkey='to'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_activities_and_socities${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Activities &apm; Socities
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.activities_and_socities}
                                type='text'
                                id={`e_activities_and_socities${index}`}
                                name={`e_activities_and_socities${index}`}
                                data-customkey='activities_and_socities'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_graduated${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Graduated
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                checked={item.graduated}
                                type='checkbox'
                                id={`e_graduated${index}`}
                                name={`e_graduated${index}`}
                                data-customkey='graduated'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
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
                    <div> add education</div>
                </button>
            </div >
        </Fragment>
    )
}

export default Education;

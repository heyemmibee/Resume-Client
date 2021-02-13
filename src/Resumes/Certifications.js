import { Fragment } from 'react';

const Certifications = (props) => {
    return (
        <Fragment>
            {props.certifications.map((item, index) => (
                <div
                    key={index}
                    className='px-4 py-5 bg-white sm:p-6'>
                    <div
                        className='grid grid-cols-6 gap-6'>
                        <div
                            className='col-span-6 sm:col-span-4'>
                            <label
                                htmlFor={`lc_title${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Title
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.title}
                                type='text'
                                name={`lc_title${index}`}
                                data-customkey='title'
                                id={`lc_title${index}`}
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-4'>
                            <label
                                htmlFor={`lc_issuingorg${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Issuing Organization
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.issuing_organization}
                                type='text'
                                name={`lc_issuingorg${index}`}
                                id={`lc_issuingorg${index}`}
                                data-customkey='issuing_organization'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`lc_credential_id${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Credential Id
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.credential_id}
                                type='text'
                                id={`lc_credential_id${index}`}
                                name={`lc_credential_id${index}`}
                                data-customkey='credential_id'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6'>
                            <label
                                htmlFor={`lc_credential_url${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Credential Url
                            </label>
                            <div
                                className="mt-1 flex rounded-md shadow-sm">
                                <span
                                    className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    http://
                                </span>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.credential_url}
                                    type='url'
                                    name={`lc_credential_url${index}`}
                                    data-customkey='credential_url'
                                    id={`lc_credential_url${index}`}
                                    className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                                    placeholder='www.example.com'
                                />
                            </div>
                        </div>
                        <div
                            className='col-span-6 sm:col-span-6 lg:col-span-2'>
                            <label
                                htmlFor={`lc_issue_date${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Issue Date
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.issue_date}
                                type='date'
                                name={`lc_issue_date${index}`}
                                id={`lc_issue_date${index}`}
                                data-customkey='issue_date'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-6 lg:col-span-2'>
                            <label
                                htmlFor={`lc_expiration_date${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Expiration Date
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.expiration_date}
                                type='date'
                                name={`lc_expiration_date${index}`}
                                id={`lc_expiration_date${index}`}
                                data-customkey='expiration_date'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div
                            className='col-span-6 sm:col-span-6 lg:col-span-2'>
                            <label
                                htmlFor={`lc_credential_expires${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Expiration Date
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                checked={item.credential_expires}
                                type='checkbox'
                                name={`lc_credential_expires${index}`}
                                id={`lc_credential_expires${index}`}
                                data-customkey='credential_expires'
                                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
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
                    <div> add licenses &amp; certifications</div>
                </button>
            </div >
        </Fragment>
    )
}

export default Certifications;

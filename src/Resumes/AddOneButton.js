const AddOneButton = (props) => {
    return (
        <div
            className='col-span-6 bg-secondary px-4 py-5 bg-white space-y-6 sm:p-6'>
            <button
                onClick={(e) => props.componentAdded(e, props.resumeKey)}
                className={`flex flex-row ${props.className}`}>
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
                <div className='pl-2'>{props.title}</div>
            </button>
        </div >
    )
}

export default AddOneButton;

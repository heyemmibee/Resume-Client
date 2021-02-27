const RemoveOneButton = (props) => {
    return (
        <button
            className={`flex flex-row ${props.className}`}
            onClick={(e) => props.componentRemoved(e, props.resumeKey, props.index)}>
            <div className='w-6'>
                <svg
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='text-red'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                </svg>
            </div>
            <div className='pl-2'>{props.title}</div>
        </button>
    )
}

export default RemoveOneButton;

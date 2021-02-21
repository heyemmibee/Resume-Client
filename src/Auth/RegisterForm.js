const RegisterForm = ({ onClick, registration, onChange, isTaken, status, uniqueError }) => {

    const usernameOptions = {};
    const emailOptions = {};

    if (uniqueError.username.length !== 0) {
        usernameOptions['aria-describedby'] = 'errUsername';
        usernameOptions['aria-invalid'] = true;
    }

    if (uniqueError.email.length !== 0) {
        emailOptions['aria-describedby'] = 'errEmail';
        emailOptions['aria-invalid'] = true;
    }

    return (
        <form
            className='m-2.5 p-2.5 rounded-xl bg-secondary'
            onSubmit={onClick}>
            <div className='pb-1'>

                <label
                    className='text-primary font-bold'
                    htmlFor='username'>
                    Username
                </label>
                <input
                    className={`w-full ${uniqueError.username.length !== 0 ? 'border-2 border-error' : ''}`}
                    required
                    minLength='3'
                    maxLength='14'
                    id='username'
                    name='username'
                    type='text'
                    value={registration.username}
                    onChange={onChange}
                    onBlur={isTaken}
                    {...usernameOptions}
                />
                {uniqueError.username.length !== 0 &&
                    <span
                        className='text-error font-bold'
                        id={usernameOptions['aria-describedby']}>{uniqueError.username}</span>}
            </div>
            <div className='pb-1'>
                <label
                    className='text-primary font-bold'
                    htmlFor='email'>
                    Email
                </label>
                <input
                    className={`w-full ${uniqueError.email.length !== 0 ? 'border-2 border-error' : ''}`}
                    required
                    id='email'
                    name='email'
                    type='email'
                    value={registration.email}
                    onChange={onChange}
                    onBlur={isTaken}
                    {...emailOptions}
                />
                {uniqueError.email.length !== 0 &&
                    <span
                        className='text-error font-bold'
                        id={emailOptions['aria-describedby']}>{uniqueError.email}</span>}
            </div>
            <div className='pb-1'>
                <label
                    className='text-primary font-bold'
                    htmlFor='password'>
                    Password
                </label>
                <input
                    className='w-full'
                    required
                    id='password'
                    name='password'
                    type='password'
                    value={registration.password}
                    onChange={onChange}
                />
            </div>
            <div className='pb-1'>
                <label
                    className='text-primary font-bold'
                    htmlFor='password_confirmation'>
                    Confirm Password
                </label>
                <input
                    className='w-full'
                    required
                    id='password_confirmation'
                    name='password_confirmation'
                    type='password'
                    value={registration.password_confirmation}
                    onChange={onChange}
                />
            </div>
            <div className='pt-4 pb-4 flex justify-center'>
                <button
                    className={`inline-flex items-center px-4 py-2 ${status === 'STARTED' ? 'cursor-not-allowed' : ''}
                    font-medium rounded-md text-secondary bg-primary hover:bg-primary`}
                    type='submit'>
                    Submit
                    <svg
                        className={`animate-spin -mr-1 ml-3 h-5 w-5 text-secondary ${status === 'STARTED' ? 'block' : 'hidden'}`}
                        fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'>
                        </path>
                    </svg>
                </button>
            </div>
        </form >
    );
}

export default RegisterForm;

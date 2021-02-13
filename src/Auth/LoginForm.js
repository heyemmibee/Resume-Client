const LoginForm = ({ form, onChange, onSubmit, status }) => {
    return (
        <form
            className='m-2.5 p-2.5 rounded-xl bg-secondary'
            onSubmit={onSubmit}>
            <div className='pb-1'>
                <label
                    className='text-primary font-bold'
                    htmlFor='email'>
                    Email
                </label>
                <input
                    className='w-full'
                    required
                    id='email'
                    type='email'
                    value={form.email}
                    onChange={onChange}
                />
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
                    type='password'
                    value={form.password}
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
        </form>
    )
}

export default LoginForm;
import GoogleOAuthButton from './GoogleOAuthButton';

const RegisterForm = ({ onClick, registration, onChange, isTaken, status, uniqueError }) => {

    const emailOptions = {};
    if (uniqueError.email.length !== 0) {
        emailOptions['aria-describedby'] = 'errEmail';
        emailOptions['aria-invalid'] = true;
    }

    return (
        <section className="flex flex-col items-center h-screen md:flex-row">
            <div className="container mx-auto">
                <div className="flex justify-center px-2 py-6 ">
                    <div className="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl bg-secondary">
                        <div className="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
                            <div className="relative z-10 m-12 text-left ">
                                <h2
                                    className="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400">
                                    No Name
                                </h2>
                                <h2 className="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font">
                                    Create an account.
                                </h2>
                                <div
                                    className="w-full mt-10 mb-8 text-base leading-relaxed text-gray-900 sm:md:w-3/3 lg:text-1xl ">
                                    If you do login for testing purposes then please know that I may delete the
                                    mongo database and start from fresh. You can also use a temporary email address
                                    from https://temp-mail.org/. If you do decide to login with Google then I only store
                                    your email and a google id which google uses to uniquely identifies you and I cannot do
                                    anything with it. The access token that google gives is not used to make any calls to your
                                    Google account and even if I did Google would reject my calls because the app does not require any
                                    special scopes, or you can check my code on GitHub to know I am not lying!
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full px-8 py-24 bg-white border-gray-100 rounded-lg lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                            <div className="relative z-10 text-left ">
                                <div className="flex justify-enter lg:py-6">
                                    <GoogleOAuthButton />
                                </div>
                                <form
                                    onSubmit={onClick}>
                                    <div className="mt-4">
                                        <label
                                            className='block text-base font-medium leading-relaxed text-gray-700'
                                            htmlFor='email'>
                                            Email
                                            </label>
                                        <input
                                            className={`w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray ${uniqueError.email.length !== 0 ? 'border-2 border-error' : ''}`}
                                            required
                                            id='email'
                                            type='email'
                                            value={registration.email}
                                            onChange={onChange}
                                            onBlur={isTaken}
                                            placeholder='Your email'
                                            autoComplete='email-address'
                                            {...emailOptions}
                                        />
                                        {uniqueError.email.length !== 0 &&
                                            <span
                                                className='text-error font-bold'
                                                id={emailOptions['aria-describedby']}>{uniqueError.email}</span>
                                        }
                                    </div>
                                    <div className="mt-4">
                                        <label
                                            className='text-base font-medium leading-relaxed text-gray-700'
                                            htmlFor='password'>
                                            Password
                                            </label>
                                        <input
                                            className='block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500'
                                            required
                                            id='password'
                                            name='password'
                                            type='password'
                                            value={registration.password}
                                            onChange={onChange}
                                            placeholder='Your password'
                                            autoComplete='new-password'
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label
                                            className='text-base font-medium leading-relaxed text-gray-700'
                                            htmlFor='password_confirmation'>
                                            Confirm Password
                                            </label>
                                        <input
                                            className='block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500'
                                            required
                                            id='password_confirmation'
                                            name='password_confirmation'
                                            type='password'
                                            value={registration.password_confirmation}
                                            onChange={onChange}
                                            placeholder='Confirm password'
                                            autoComplete='new-password'
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            className={`flex flex-row px-4 py-2 ${status === 'STARTED' ? 'cursor-not-allowed' : ''}
                    font-medium rounded-md text-secondary bg-primary hover:bg-primary w-full text-center`}
                                            type='submit'>
                                            <div className='flex-grow'>
                                                Create Account
                                            </div>
                                            <svg
                                                className={`flex-none animate-spin -mr-1 ml-3 h-5 w-5 text-secondary ${status === 'STARTED' ? 'block' : 'hidden'}`}
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
                                <p className="mt-8 text-center">Already have an account? <a href='/login'
                                    className="font-semibold text-black hover:text-black">Sign In</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterForm;

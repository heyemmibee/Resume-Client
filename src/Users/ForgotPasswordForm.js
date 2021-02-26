const ForgotPasswordForm = ({ onSubmit, onFieldChanged, obj, status }) => {
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
                                    Forgot Password
                                    </h2>
                                <div
                                    className="w-full mt-10 mb-8 text-base leading-relaxed text-gray-900 sm:md:w-3/3 lg:text-1xl ">
                                    If you cannot recall your password then you have come to the right page.
                                    Enter your email address and click 'Send Password REset Link' button
                                    to receive an email with a link which will allow you to change your password.
                                    The link will be active for 15 minutes.
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full px-8 py-24 bg-white border-gray-100 rounded-lg lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                            <div className="relative z-10 text-left ">
                                <form className='mt-6' onSubmit={onSubmit}>
                                    <div className="mt-6">
                                        <label
                                            htmlFor='email'
                                            className='block text-base font-medium leading-relaxed text-gray-700'>
                                            Email
                                        </label>
                                        <input
                                            className='w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 '
                                            required
                                            id='email'
                                            type='email'
                                            value={obj.email}
                                            placeholder='Your email'
                                            onChange={onFieldChanged}
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            className={`flex flex-row px-4 py-2 ${status === 'STARTED' ? 'cursor-not-allowed' : ''}
                    font-medium rounded-md text-secondary bg-primary hover:bg-primary w-full text-center`}
                                            type='submit'>
                                            <div className='flex-grow'>
                                                Send Password Reset Link
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
                                <hr className='w-full my-6 border-gray-300' />
                                <p className='mt-8 text-center'>Need an account? <a href='/register'
                                    className='font-semibold text-blue-500 hover:text-blue-700'>Sign Up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPasswordForm;

import { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../context/authContext';
import {
    useLocation,
    useHistory
} from "react-router-dom";

const RegisterForm = ({ onClick, registration, onChange, isTaken, status, uniqueError }) => {

    const emailOptions = {};
    if (uniqueError.email.length !== 0) {
        emailOptions['aria-describedby'] = 'errEmail';
        emailOptions['aria-invalid'] = true;
    }

    const authContext = useContext(AuthContext);
    const history = useHistory();
    const location = useLocation();

    const onGoogleLoginSuccess = (res) => {
        console.log(res)
        const user = {
            email: res?.profileObj.email,
            accessToken: res?.tokenId,
            oauth: true
        }

        const { from } = location.state || { from: { pathname: "/resumes" } };
        authContext.login(user, () => {
            history.replace(from);
        });
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
                                    your email and a google id which uniquely identifies you.
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full px-8 py-24 bg-white border-gray-100 rounded-lg lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                            <div className="relative z-10 text-left ">
                                <div className="flex justify-enter lg:py-6">
                                    <GoogleLogin
                                        clientId='264076976216-eidm9cpvm3s14u2e0ch5boeo0b2o0n2t.apps.googleusercontent.com'
                                        render={(renderProps) => (
                                            <button
                                                onClick={renderProps.onClick} disabled={renderProps.disabled}
                                                className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-lg hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                                                <div className="flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink='"http://www.w3.org/1999/xlink"'
                                                        className="w-6 h-6"
                                                        viewBox="0 0 48 48">
                                                        <defs>
                                                            <path id="a"
                                                                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                                        </defs>
                                                        <clipPath id="b">
                                                            <use xlinkHref="#a" overflow="visible" />
                                                        </clipPath>
                                                        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                                        <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                                        <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                                        <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                                    </svg>
                                                    <span className="ml-4">
                                                        Log in with Google
                                                    </span>
                                                </div>
                                            </button>
                                        )}
                                        onSuccess={onGoogleLoginSuccess}
                                        onFailure={() => { console.log('error') }}
                                        cookiePolicy={'single_host_origin'}
                                    />
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
                                    <div className="mt-4">
                                        <button
                                            className={`inline-flex px-4 py-2 ${status === 'STARTED' ? 'cursor-not-allowed' : ''}
                    font-medium rounded-md text-secondary bg-primary hover:bg-primary w-full text-center`}
                                            type='submit'>
                                            Create Account
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

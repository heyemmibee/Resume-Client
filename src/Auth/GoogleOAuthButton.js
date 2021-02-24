import { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../context/authContext';
import {
    useLocation,
    useHistory
} from "react-router-dom";

const GoogleOAuthButton = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();
    const location = useLocation();

    const onGoogleLoginSuccess = (res) => {
        console.log(res)
        const user = {
            email: res?.profileObj.email,
            accessToken: res?.tokenId
        }

        const { from } = location.state || { from: { pathname: "/resumes" } };
        authContext.login(user, () => {
            history.replace(from);
        });
    }

    return (
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
    )
}

export default GoogleOAuthButton;

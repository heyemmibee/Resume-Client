import { Fragment } from 'react';
import LoginForm from './LoginForm';
import { useState, useContext } from 'react';
import { login } from './AuthAPI';
import { NotificationContext, NotificationType } from '../context/notificationContext';
import { AuthContext } from '../context/authContext';
import {
    useLocation,
    useHistory
} from "react-router-dom";

const Login = () => {

    const notificationContext = useContext(NotificationContext);
    const authContext = useContext(AuthContext);
    const history = useHistory();
    const location = useLocation();

    const [loginData, setLoginData] = useState(() => ({
        email: '',
        password: ''
    }));

    const state = Object.freeze({
        "INITIAL": "INITIAL",
        "STARTED": "STARTED",
        "SUCCESS": "SUCCESS",
        "ERROR": "ERROR"
    });

    const [status, setStatus] = useState(() => ({
        state: state.INITIAL
    }));

    const fieldChanged = (e) => {
        const tempLogin = {
            ...loginData,
            [e.target.id]: e.target.value.trim()
        };

        setLoginData(tempLogin);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const logMeIn = async () => {
            try {
                setStatus({
                    state: state.STARTED
                });
                const { statusCode, data } = await login(loginData.email, loginData.password);

                if (statusCode !== 200) {
                    notificationContext.setNotification({
                        message: data.message,
                        type: NotificationType.ERROR
                    });
                    setStatus({
                        state: state.ERROR
                    });
                    return;
                }
                const loggedInuser = {
                    ...data
                };
                const { from } = location.state || { from: { pathname: "/resumes" } };
                notificationContext.clearNotification();
                setStatus({
                    state: state.SUCCESS
                });
                authContext.login(loggedInuser, () => {
                    history.replace(from);
                });
            } catch (err) {
                notificationContext.setNotification({
                    message: 'There was an error',
                    type: NotificationType.ERROR
                });
                setStatus({
                    state: state.ERROR
                });
            }
        }

        logMeIn();
    }

    return (
        <Fragment>
            <div className='md:w-3/4 mx-auto'>
                <LoginForm
                    status={status.state}
                    form={loginData}
                    onChange={fieldChanged}
                    onSubmit={onSubmit}
                />
            </div>
        </Fragment>
    )
}

export default Login;

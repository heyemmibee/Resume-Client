import { useState, useContext, Fragment } from 'react';
import RegisterForm from './RegisterForm';
import { NotificationContext, NotificationType } from '../context/notificationContext';
import { registerUser, getByUsername, getByEmail } from './AuthAPI';
import { AuthContext } from '../context/authContext';
import {
    useLocation,
    useHistory
} from "react-router-dom";

const Registration = () => {

    const notificationContext = useContext(NotificationContext);
    const authContext = useContext(AuthContext);
    const history = useHistory();
    const location = useLocation();

    const initialState = {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'user'
    }

    const state = Object.freeze({
        "INITIAL": "INITIAL",
        "STARTED": "STARTED",
        "SUCCESS": "SUCCESS",
        "ERROR": "ERROR"
    });

    const [registration, setRegistration] = useState(() => initialState);

    const [status, setStatus] = useState(() => ({
        state: state.INITIAL
    }));

    const createUser = (e) => {
        e.preventDefault();

        const register = async () => {
            setStatus({
                state: state.STARTED
            });

            try {
                const { statusCode, data } = await registerUser(registration);

                if (statusCode === 200) {
                    const { from } = location.state || { from: { pathname: "/resumes" } };
                    setStatus({
                        state: state.SUCCESS
                    });
                    setRegistration(initialState);
                    notificationContext.setNotification({
                        message: 'Account created successfully.',
                        type: NotificationType.SUCCESS
                    });
                    authContext.login(data, () => {
                        history.replace(from);
                    });
                } else {
                    setStatus({
                        state: state.ERROR
                    });
                }
            } catch (err) {
                setStatus({
                    state: state.ERROR
                });
                notificationContext.setNotification({
                    message: err.message,
                    type: NotificationType.ERROR
                })
            }
        }

        register();
    }

    const fieldChanged = (e) => {
        const tempRegistration = {
            ...registration,
            [e.target.id]: e.target.value.trim()
        };
        setRegistration(tempRegistration);
    }

    const isUsernameTaken = (e) => {

        const checkUsername = async () => {
            try {
                const { statusCode } = await getByUsername(e.target.value.trim());
                if (statusCode === 200) {
                    notificationContext.setNotification({
                        message: 'Username is taken!',
                        type: NotificationType.ERROR
                    })
                }
            } catch (err) {
                setStatus({
                    state: state.ERROR
                });
                notificationContext.setNotification({
                    message: err.message,
                    type: NotificationType.ERROR
                })
            }
        }

        checkUsername();
    }

    return (
        <Fragment>
            <div className='md:w-2/4 mx-auto'>
                <RegisterForm
                    status={status.state}
                    registration={registration}
                    onClick={createUser}
                    onChange={fieldChanged}
                    isUsernameTaken={isUsernameTaken}
                />
            </div>
        </Fragment>
    )
}

export default Registration;

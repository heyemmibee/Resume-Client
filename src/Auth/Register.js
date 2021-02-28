import { useState, useContext, Fragment } from 'react';
import RegisterForm from './RegisterForm';
import { NotificationContext, NotificationType } from '../context/notificationContext';
import { registerUser, isEmailAvailable } from './AuthAPI';
import {
    useLocation,
    useHistory
} from 'react-router-dom';

const Registration = () => {

    const notificationContext = useContext(NotificationContext);
    const history = useHistory();
    const location = useLocation();

    const initialState = {
        email: '',
        password: '',
        password_confirmation: '',
        role: 'user'
    }

    const state = Object.freeze({
        'INITIAL': 'INITIAL',
        'STARTED': 'STARTED',
        'SUCCESS': 'SUCCESS',
        'ERROR': 'ERROR'
    });

    const [registration, setRegistration] = useState(() => initialState);
    const [uniqueError, setUniqueError] = useState(() => ({
        email: '',
        username: ''
    }));

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
                    const { from } = location.state || { from: { pathname: '/login' } };
                    setStatus({
                        state: state.SUCCESS
                    });
                    setRegistration(initialState);
                    notificationContext.setNotification({
                        message: 'Account created successfully.',
                        type: NotificationType.SUCCESS
                    });
                    history.replace(from);
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

    const isTaken = (e) => {
        const checkEmail = async () => {
            try {
                const { statusCode } = await isEmailAvailable(e.target.value);
                setUniqueError({
                    ...uniqueError,
                    [e.target.id]: statusCode === 200 ? 'Email is taken' : ''
                })
            } catch (err) {
                notificationContext.setNotification({
                    message: err.message,
                    type: NotificationType.ERROR
                })
            }
        }

        checkEmail();
    }

    return (
        <Fragment>
            <div className='md:w-3/4 mx-auto'>
                <RegisterForm
                    status={status.state}
                    registration={registration}
                    onClick={createUser}
                    onChange={fieldChanged}
                    isTaken={isTaken}
                    uniqueError={uniqueError}
                />
            </div>
        </Fragment>
    )
}

export default Registration;

import { useState, useContext, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import { NotificationContext, NotificationType } from '../context/notificationContext';
import { registerUser, getByUsername, getByEmail } from './AuthAPI';
import { useLocalStorage } from '../hooks'

const Registration = () => {

    const notificationContext = useContext(NotificationContext);
    const [, setLocalStorage] = useLocalStorage('currentUser', '');

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
                    notificationContext.setNotification({
                        message: 'Account created successfully.',
                        type: NotificationType.SUCCESS
                    })
                    setLocalStorage(data);
                    setRegistration(initialState);
                    setStatus({
                        state: state.SUCCESS
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
            {
                status.state === state.SUCCESS ?
                    <Redirect to='/resumes' />
                    :
                    <div className='md:w-2/4 mx-auto'>
                        <RegisterForm
                            status={status.state}
                            registration={registration}
                            onClick={createUser}
                            onChange={fieldChanged}
                            isUsernameTaken={isUsernameTaken}
                        />
                    </div>
            }
        </Fragment>
    )
}

export default Registration;

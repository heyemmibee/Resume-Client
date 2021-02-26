import { useState, useContext } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import { forgotPassword } from './UserAPI';
import { NotificationContext, NotificationType } from '../context/notificationContext';

const ForgotPassword = () => {

    const notificationContext = useContext(NotificationContext);
    const state = Object.freeze({
        "INITIAL": "INITIAL",
        "STARTED": "STARTED",
        "SUCCESS": "SUCCESS",
        "ERROR": "ERROR"
    });

    const [status, setStatus] = useState(() => ({
        state: state.INITIAL
    }));
    const [email, setEmail] = useState(() => ({ email: '' }));

    const onFieldChanged = (e) => {
        setEmail({ email: e.target.value });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const submitForm = async () => {
            try {
                setStatus({
                    state: state.STARTED
                });
                const { statusCode, data } = await forgotPassword(email);
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
                notificationContext.setNotification({
                    message: 'Reset password link is on your way',
                    type: NotificationType.INFORMATION
                });
                setStatus({
                    state: state.SUCCESS
                });
            }
            catch (err) {
                notificationContext.setNotification({
                    message: 'There was an error',
                    type: NotificationType.ERROR
                });
                setStatus({
                    state: state.ERROR
                });
            }
        }

        submitForm();
    }

    return (
        <div className='md:w-3/4 mx-auto'>
            <ForgotPasswordForm
                status={status.state}
                onSubmit={onFormSubmit}
                onFieldChanged={onFieldChanged}
                obj={email}
            />
        </div>
    )
}

export default ForgotPassword;

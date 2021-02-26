import { useState, useContext } from 'react';
import ResetPasswordForm from './ResetPasswordForm';
import { resetPassword } from './UserAPI';
import { NotificationContext, NotificationType } from '../context/notificationContext';
import { useParams, useHistory, useLocation } from "react-router-dom";

const ResetPassword = () => {

    const history = useHistory();
    const location = useLocation();
    const { userId, token } = useParams();
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
    const [resetObj, setResetObj] = useState(() => ({
        password: '',
        password_confirmation: ''
    }));

    const onFieldChanged = (e) => {
        setResetObj({
            ...resetObj,
            [e.target.id]: e.target.value
        });
    }

    const onResetPassword = (e) => {
        e.preventDefault();

        const submitForm = async () => {
            try {
                setStatus({
                    state: state.STARTED
                });
                const { from } = location.state || { from: { pathname: "/login" } };
                const { statusCode, data } = await resetPassword(userId, token, resetObj);
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
                    message: 'Password changed successfully',
                    type: NotificationType.INFORMATION
                });
                setStatus({
                    state: state.SUCCESS
                });
                history.replace(from);
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
            <ResetPasswordForm
                obj={resetObj}
                onSubmit={onResetPassword}
                onFieldChanged={onFieldChanged}
                status={status}
            />
        </div>
    )
}

export default ResetPassword;

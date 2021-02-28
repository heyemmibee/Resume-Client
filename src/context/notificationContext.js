import { useState, createContext } from 'react';

export const NotificationType = Object.freeze({
    'NONE': 'NONE',
    'SUCCESS': 'SUCCESS',
    'ERROR': 'ERROR',
    'WARNING': 'WARNING',
    'INFORMATION': 'INFORMATION',
    'LOADING': 'LOADING'
});

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const initialNotification = {
        message: '',
        type: NotificationType.NONE
    };
    const [notification, setNotification] = useState(() => initialNotification);

    const clearNotification = () => {
        setNotification(initialNotification)
    }

    return (
        <NotificationContext.Provider
            value={{
                notification,
                setNotification,
                clearNotification,
                NotificationType
            }}>
            {children}
        </NotificationContext.Provider>
    )
}

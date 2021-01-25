import { useState, createContext } from 'react';

export const NotificationType = Object.freeze({
    'NONE': 'NONE',
    "SUCCESS": "SUCCESS",
    "ERROR": "ERROR",
    "WARNING": "WARNING",
    "INFORMATION": "INFORMATION",
    "LOADING": "LOADING"
});

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(() => ({
        message: '',
        type: NotificationType.NONE
    }));

    return (
        <NotificationContext.Provider
            value={{
                notification,
                setNotification,
                NotificationType
            }}>
            {children}
        </NotificationContext.Provider>
    )
}

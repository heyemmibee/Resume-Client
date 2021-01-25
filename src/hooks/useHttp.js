import { useState, useEffect } from 'react';
import { NotificationContext, NotificationType } from '../context/notificationContext';

const useHttp = (fn) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {

            const { statusCode, data } = await fn();

            if (statusCode !== 200) {
                // NotificationContext.setNotification({
                //     message: '',
                //     type: NotificationType.ERROR
                // });
                return;
            }
            setData(data);
        }

        // NotificationContext.setNotification({
        //     message: '',
        //     type: NotificationType.LOADING
        // });
        getData();
    }, [fn]);

    return data;
};

export default useHttp;

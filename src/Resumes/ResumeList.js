import { useState, useEffect } from 'react';
import { NotificationContext, NotificationType } from '../context/notificationContext';
import { useLocalStorage } from '../hooks';
import ResumeItem from './ResumeItem';
import { index as GetResumes } from './ResumeAPI';

const ResumeList = () => {
    const [resumes, setResumes] = useState([]);
    const [user,] = useLocalStorage('currentUser');

    useEffect(() => {
        const getData = async (accessToken) => {

            const { statusCode, data } = await GetResumes(accessToken);

            if (statusCode !== 200) {
                NotificationContext.setNotification({
                    message: '',
                    type: NotificationType.ERROR
                });
                return;
            }
            setResumes(data);
        }

        getData(user.accessToken);
    }, [user]);

    return (
        <div>
            <ResumeItem
                resumes={resumes}
            />
        </div>
    )
}

export default ResumeList;

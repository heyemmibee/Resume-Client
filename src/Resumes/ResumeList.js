import { useCallback } from 'react';
import { useLocalStorage, useHttp } from '../hooks';
import ResumeItem from './ResumeItem';
import { index as GetResumes } from './ResumeAPI';

const ResumeList = () => {
    const [user,] = useLocalStorage('currentUser');
    const memoizedFn = useCallback(() => {
        return GetResumes(user.accessToken);
    }, [user.accessToken]);

    const resumes = useHttp(memoizedFn);

    return (
        <ResumeItem
            resumes={resumes}
        />
    )
}

export default ResumeList;
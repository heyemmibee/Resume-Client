import { useCallback } from 'react';
import { useLocalStorage, useHttp } from '../hooks';
import ResumeListItem from './ResumeListItem';
import { index as GetResumes } from './ResumeAPI';

const ResumeList = () => {
    const [user,] = useLocalStorage('currentUser');
    const memoizedFn = useCallback(() => {
        return GetResumes(user.accessToken);
    }, [user.accessToken]);

    const resumes = useHttp(memoizedFn, []);

    return (
        <ResumeListItem
            resumes={resumes}
        />
    )
}

export default ResumeList;

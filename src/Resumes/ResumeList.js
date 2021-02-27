import { Fragment, useCallback } from 'react';
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
        <Fragment>
            <div className='md:w-3/4 mx-auto'>
                <a
                    className='pl-6 text-white font-bold text-xl'
                    href='/resumes/new'
                    title='Create a new resume'>
                    Create a new Resume
                </a>
                <ResumeListItem
                    resumes={resumes}
                />
            </div>
        </Fragment >
    )
}

export default ResumeList;

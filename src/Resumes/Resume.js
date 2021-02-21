import { useContext, useCallback, Fragment } from 'react';
import { useHttp } from '../hooks';
import { useParams } from "react-router-dom";
import { get as GetResume } from './ResumeAPI';
import { AuthContext } from '../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Resume = () => {

    const authContext = useContext(AuthContext);
    const { id } = useParams();

    const memoizedFn = useCallback(() => {
        return GetResume(authContext.user.accessToken, id);
    }, [authContext.user.accessToken, id]);

    const resume = useHttp(memoizedFn, {
        'pronouns': '',
        'name': '',
        'contact': {
            'email': '',
            'phone': ''
        },
        'location': {
            'city': '',
            'state': ''
        },
        'resume_name': '',
        'headline': '',
        'summary': '',
        'links': {
            'dribble': '',
            'facebook': '',
            'github': '',
            'twitter': '',
            'website': ''
        },
        'experience': [],
        'talks': [],
        'licenses_and_certifications': [],
        'awards': [],
        'education': [],
        'side_projects': []
    });

    const formatDate = (s) => {
        const dt = new Date(s);
        return dt.toLocaleDateString();
    }

    const dateDifference = (from, to) => {
        if (from === '') {
            from = Date.now()
        }

        const fromDt = new Date(from);
        const toDt = new Date(to);
        const diff = Math.floor(fromDt.getTime() - toDt.getTime());
        let secs = Math.floor(diff / 1000);
        let mins = Math.floor(secs / 60);
        let hours = Math.floor(mins / 60);
        let days = Math.floor(hours / 24);
        let months = Math.floor(days / 31);
        const years = Math.floor(months / 12);
        months = Math.floor(months % 12);
        days = Math.floor(days % 31);
        hours = Math.floor(hours % 24);
        mins = Math.floor(mins % 60);
        secs = Math.floor(secs % 60);

        if (years > 0) {
            return `${years} years ${months} mos`;
        }
        return `${months} mos`;
    }

    return (
        <Fragment>
            <div
                className='flex flex-col items-center justify-between md:w-3/4 mx-auto rounded-xl p-4 m-1'>
                <div className='text-red w-full text-center'>
                    <p className='font-bold text-5xl'>{resume.name}</p>
                    <p className='text-four font-bold text-xl'>{resume.headline}</p>
                </div>
                <div className='text-secondary w-full text-center my-4'>
                    <p>
                        <a
                            title={`${resume.name} email`}
                            href={`mailto:${resume.contact.email}`}>
                            {resume.contact.email}
                        </a>
                    </p>
                    <p>
                        <a
                            title={`${resume.name} phone`}
                            href={`tel:${resume.contact.phone}`}>
                            {resume.contact.phone}
                        </a>
                    </p>
                    <p>{resume.location.city}, {resume.location.state}</p>
                </div>
            </div>
            <div
                className='flex flex-col items-center justify-between md:w-3/4 mx-auto rounded-xl p-4 m-1'>
                <div className='w-full text-center'>
                    {resume.links.dribble !== '' && (
                        <a
                            title='dribbble link'
                            className='px-4 text-tertiary'
                            rel='nofollow noreferrer'
                            target='_blank'
                            href={resume.links.dribble}>
                            <FontAwesomeIcon icon={["fab", "dribbble"]} size='3x' />
                        </a>
                    )}
                    {resume.links.facebook !== '' && (
                        <a
                            title='facebook link'
                            className='px-4 text-tertiary'
                            rel='nofollow noreferrer'
                            target='_blank'
                            href={resume.links.facebook}>
                            <FontAwesomeIcon icon={["fab", "facebook"]} size='3x' />
                        </a>
                    )}
                    {resume.links.github !== '' && (
                        <a
                            title='github link'
                            className='px-4 text-tertiary'
                            rel='nofollow noreferrer'
                            target='_blank'
                            href={resume.links.github}>
                            <FontAwesomeIcon icon={["fab", "github"]} size='3x' />
                        </a>
                    )}
                    {resume.links.twitter !== '' && (
                        <a
                            title='twitter link'
                            className='px-4 text-tertiary'
                            rel='nofollow noreferrer'
                            target='_blank'
                            href={resume.links.twitter}>
                            <FontAwesomeIcon icon={["fab", "twitter"]} size='3x' />
                        </a>
                    )}
                    {resume.links.website !== '' && (
                        <a
                            title='website link'
                            className='px-4 text-tertiary'
                            rel='nofollow noreferrer'
                            target='_blank'
                            href={resume.links.website}>
                            <FontAwesomeIcon icon={["fab", "firefox-browser"]} size='3x' />
                        </a>
                    )}
                </div>
            </div>
            {
                resume.experience && resume.experience.length > 0 ? (
                    <div
                        className='flex flex-col md:w-3/4 mx-auto rounded-xl p-4 m-1'>
                        <div className='text-tertiary font-bold'>Work Experience</div>
                        {resume.experience.map(item => (
                            <div
                                key={item.title}
                                className='md:grid md:grid-cols-3 md:gap-6 my-2'>
                                <div className='md:col-span-1'>
                                    <p className='text-four font-bold'>
                                        {formatDate(item.from)} - {item.current === true ? 'Current' : formatDate(item.to)}
                                    </p>
                                    <p className='text-four font-bold'>
                                        {dateDifference(item.to, item.from)}
                                    </p>
                                </div>
                                <div className='mt-5 md:mt-0 md:col-span-2'>
                                    <p className='text-yellow font-bold'>{item.title}</p>
                                    <p className='text-yellow font-bold'>{item.company} {item.employment_type}</p>
                                    <p className='text-secondary whitespace-pre-wrap'>{item.responsibilities}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : ''
            }
            {
                resume.awards && resume.awards.length > 0 ? (
                    <div
                        className='flex flex-col md:w-3/4 mx-auto rounded-xl p-4 m-1'>
                        <div className='text-tertiary font-bold'>Awards</div>
                        {resume.awards.map(item => (
                            <div
                                key={item.title}
                                className='md:grid md:grid-cols-3 md:gap-6 my-2'>
                                <div className='md:col-span-1'>
                                    <p className='text-four font-bold'>{item.year}</p>
                                </div>
                                <div className='mt-5 md:mt-0 md:col-span-2'>
                                    <p className='text-yellow font-bold'>
                                        {item.url === '' ? `${item.title}` : (
                                            <a href={item.url}>{item.title}</a>
                                        )}
                                    </p>
                                    <p className='text-yellow'>Presented by: {item.presented_by}</p>
                                    <p className='text-secondary'>{item.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : ''
            }
            {
                resume.talks && resume.talks.length > 0 ? (
                    <div
                        className='flex flex-col md:w-3/4 mx-auto rounded-xl p-4 m-1'>
                        <div className='text-tertiary font-bold'>Talks</div>
                        {resume.talks.map(item => (
                            <div
                                key={item.title}
                                className='md:grid md:grid-cols-3 md:gap-6 my-2'>
                                <div className='md:col-span-1'>
                                    <p className='text-four font-bold'>{item.year}</p>
                                </div>
                                <div className='mt-5 md:mt-0 md:col-span-2'>
                                    <p className='text-yellow font-bold'>
                                        {item.url === '' ? `${item.title}` : (
                                            <a target='_blank'
                                                rel='nofollow noreferrer'
                                                href={item.url}>
                                                {item.title}
                                            </a>
                                        )}
                                    </p>
                                    <p className='text-yellow'>{item.event}</p>
                                    <p className='text-secondary'>{item.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : ''
            }
            {
                resume.licenses_and_certifications && resume.licenses_and_certifications.length > 0 ? (
                    <div
                        className='flex flex-col md:w-3/4 mx-auto rounded-xl p-4 m-1'>
                        <div className='text-tertiary font-bold'>Licenses / Certifications</div>
                        {resume.licenses_and_certifications.map(item => (
                            <div
                                key={item.title}
                                className='md:grid md:grid-cols-3 md:gap-6 my-2'>
                                <div className='md:col-span-1'>
                                    <p className='text-four font-bold'>{formatDate(item.issue_date)} - {formatDate(item.expiration_date)}</p>
                                </div>
                                <div className='mt-5 md:mt-0 md:col-span-2'>
                                    <p className='text-yellow font-bold'>
                                        {item.credential_url === '' ? `${item.title}` : (
                                            <a
                                                target='_blank'
                                                rel='nofollow noreferrer'
                                                href={item.credential_url}>{item.title}</a>
                                        )}
                                    </p>
                                    <p className='text-secondary'>{item.issuing_organization}</p>
                                    <p className='text-secondary'>{item.credential_id}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : ''
            }
            {
                resume.education && resume.education.length > 0 ? (
                    <div
                        className='flex flex-col md:w-3/4 mx-auto rounded-xl p-4 m-1'>
                        <div className='text-tertiary font-bold'>Education</div>
                        {resume.education.map(item => (
                            <div
                                key={item.school}
                                className='md:grid md:grid-cols-3 md:gap-6 my-2'>
                                <div className='md:col-span-1'>
                                    <p className='text-four font-bold'>
                                        {formatDate(item.from)} - {formatDate(item.to)}
                                    </p>
                                </div>
                                <div className='mt-5 md:mt-0 md:col-span-2'>
                                    <p className='text-yellow font-bold'>{item.school}</p>
                                    <p className='text-yellow'>{item.degree}, {item.field_of_study}</p>
                                    {item.grade !== '' && <p className='text-secondary'>GPA: {item.grade}</p>}
                                    <p className='text-secondary'>{item.activities_and_socities}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : ''
            }
            {
                resume.side_projects && resume.side_projects.length > 0 ? (
                    <div
                        className='flex flex-col md:w-3/4 mx-auto rounded-xl p-4 m-1'>
                        <div className='text-tertiary font-bold'>Side Projects</div>
                        {resume.side_projects.map(item => (
                            <div
                                key={item.title}
                                className='md:grid md:grid-cols-3 md:gap-6 my-2'>
                                <div className='md:col-span-1'>
                                    <p className='text-four font-bold'>{item.year}</p>
                                </div>
                                <div className='mt-5 md:mt-0 md:col-span-2'>
                                    <p className='text-yellow font-bold'>
                                        {item.url === '' ? `${item.title}` : (
                                            <a
                                                target='_blank'
                                                rel='nofollow noreferrer'
                                                href={item.url}>{item.title}</a>
                                        )}
                                    </p>
                                    <p className='text-yellow'>{item.event}</p>
                                    <p className='text-secondary'>{item.summary}</p>
                                    <p className='text-secondary'>{item.github_url}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : ''
            }
        </Fragment >
    )
}

export default Resume;

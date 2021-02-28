import { useEffect, useState, useContext, useCallback } from 'react';
import SideBar from './SideBar';
import CareerInformation from './CareerInformation';
import WorkExperience from './WorkExperience';
import Talks from './Talks';
import Certifications from './Certifications';
import Awards from './Awards';
import Education from './Education';
import SideProject from './SideProject';
import ResumeFormBorder from './ResumeFormBorder';
import validate from './ResumeFormValidation';
import { AuthContext } from '../context/authContext';
import { useHistory } from 'react-router-dom';
import { useHttp } from '../hooks';
import { useParams } from 'react-router-dom';
import { get as GetResume, create, update } from './ResumeAPI';
import { ResumeFormInfoSection, ResumeFormDataSection } from './ResumeFormSection';

const ResumeForm = () => {

    const authContext = useContext(AuthContext);
    const history = useHistory();
    const { id } = useParams();

    const [resume, setResume] = useState(() => ({
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
    }));

    const memoizedFn = useCallback(() => {
        return GetResume(authContext.user.accessToken, id);
    }, [authContext.user.accessToken, id]);
    const resumeEditObj = useHttp(memoizedFn, resume);

    useEffect(() => {
        if (id !== undefined) {
            const { _id, ...newResume } = {
                ...resumeEditObj
            }
            setResume(newResume);
        }
    }, [id, resumeEditObj]);

    const socialLinkChanged = (e, key) => {
        setResume({
            ...resume,
            links: {
                ...resume.links,
                [key]: e.target.value
            }
        });
    }

    const componentChanged = (e, key, indexChanged) => {
        setResume({
            ...resume,
            [key]: resume[key].map((item, index) => {
                if (indexChanged === index) {
                    let value = e.target.value;
                    if (e.target.type === 'checkbox') {
                        value = e.target.checked;
                    }

                    return {
                        ...item,
                        [e.target.getAttribute('data-customkey')]: value
                    }
                }
                return item;
            })
        });
    }

    const componentAdded = (e, key, objToAdd) => {
        e.preventDefault();
        setResume({
            ...resume,
            [key]: [...resume[key], objToAdd]
        })
    }

    const componentRemoved = (e, key, indexToRemove) => {
        e.preventDefault();
        setResume({
            ...resume,
            [key]: resume[key].filter((item, index) => index !== indexToRemove)
        })
    }

    const objectChanged = (e, key) => {
        setResume({
            ...resume,
            [key]: {
                ...resume[key],
                [e.target.name]: e.target.value
            }
        })
    }

    const createNewResume = (e) => {
        e.preventDefault();

        const validateForm = async () => {

            const executeFunction = async (fn) => {
                const { statusCode } = await fn();
                if (statusCode === 201) {
                    history.push('/resumes');
                }
            }

            const validatedResume = await validate(resume);
            if (id === undefined) {
                executeFunction(() => create(authContext.user.accessToken, validatedResume));
            } else {
                executeFunction(() => update(authContext.user.accessToken, id, validatedResume));
            }
        }

        try {
            validateForm();
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='my-10'>
            <form onSubmit={createNewResume}>
                <div className='mt-10 sm:mt-0'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <SideBar
                            title='Resume Details'
                            subHeading='You can create multiple resumes which you can use for different job applications'
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <div className='shadow overflow-hidden sm:rounded-md'>
                                <div className='px-4 py-5 space-y-6 sm:p-6 bg-secondary'>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='resume_name' className='lbl'>Resume name</label>
                                        <input
                                            value={resume.resume_name}
                                            onChange={(e) => setResume({ ...resume, [e.target.name]: e.target.value })}
                                            type='text'
                                            name='resume_name'
                                            id='resume_name'
                                            className='input-txt'
                                            placeholder='Name this resume'
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ResumeFormBorder />

                <div className='mt-10 sm:mt-0'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <SideBar
                            title='Personal Information'
                            subHeading='Please provide this information so you can be contacted.'
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <div className='shadow sm:rounded-md sm:overflow-hidden'>
                                <div className='px-4 py-5 space-y-6 sm:p-6 bg-secondary'>
                                    <div className='grid grid-cols-6 gap-6'>
                                        <div className='col-span-6 sm:col-span-3'>
                                            <label htmlFor='pronouns' className='lbl'>Pronoun</label>
                                            <input
                                                value={resume.pronouns}
                                                onChange={(e) => setResume({ ...resume, [e.target.name]: e.target.value })}
                                                type='text'
                                                name='pronouns'
                                                id='pronouns'
                                                className='input-txt'
                                                placeholder='They/Them'
                                            />
                                        </div>
                                        <div className='col-span-6 sm:col-span-3'>
                                            <label htmlFor='name' className='lbl'>Name</label>
                                            <input
                                                value={resume.name}
                                                onChange={(e) => setResume({ ...resume, [e.target.name]: e.target.value })}
                                                type='text'
                                                name='name'
                                                id='name'
                                                autoComplete='given-name'
                                                className='input-txt'
                                                required
                                            />
                                        </div>
                                        <div className='col-span-6 sm:col-span-3'>
                                            <label htmlFor='email' className='lbl'>Email</label>
                                            <input
                                                value={resume.contact.email}
                                                onChange={(e) => objectChanged(e, 'contact')}
                                                type='text'
                                                name='email'
                                                id='email'
                                                autoComplete='email'
                                                className='input-txt'
                                                required
                                            />
                                        </div>
                                        <div className='col-span-6 sm:col-span-3'>
                                            <label htmlFor='phone' className='lbl'>Phone</label>
                                            <input
                                                value={resume.contact.phone}
                                                onChange={(e) => objectChanged(e, 'contact')}
                                                type='text'
                                                name='phone'
                                                id='phone'
                                                autoComplete='phone'
                                                className='input-txt'
                                                required
                                            />
                                        </div>
                                        <div className='col-span-6 sm:col-span-3'>
                                            <label htmlFor='city' className='lbl'>City</label>
                                            <input
                                                value={resume.location.city}
                                                onChange={(e) => objectChanged(e, 'location')}
                                                type='text'
                                                name='city'
                                                id='city'
                                                autoComplete='city'
                                                className='input-txt'
                                                required
                                            />
                                        </div>
                                        <div className='col-span-6 sm:col-span-3'>
                                            <label htmlFor='state' className='lbl'>State</label>
                                            <input
                                                value={resume.location.state}
                                                onChange={(e) => objectChanged(e, 'location')}
                                                type='text'
                                                name='state'
                                                id='state'
                                                autoComplete='state'
                                                className='input-txt'
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ResumeFormBorder />

                <div className='mt-10 sm:mt-0'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <SideBar
                            title='Professional Summary'
                            subHeading='Add your professional summary.'
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>

                            <div className='shadow overflow-hidden sm:rounded-md'>
                                <div className='px-4 py-5 sm:p-6 bg-secondary'>
                                    <div className='grid grid-cols-6 gap-6'>
                                        <div className='col-span-6 sm:col-span-6'>
                                            <label htmlFor='headline' className='lbl'>Headline</label>
                                            <input
                                                value={resume.headline}
                                                onChange={(e) => setResume({ ...resume, [e.target.name]: e.target.value })}
                                                type='text'
                                                name='headline'
                                                id='headline'
                                                className='input-txt'
                                                required
                                                placeholder='Passionate full snack developer...'
                                            />
                                        </div>
                                        <CareerInformation
                                            links={resume.links}
                                            socialLinkChanged={socialLinkChanged}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ResumeFormBorder />

                <ResumeFormInfoSection
                    sidebarTitle='Work Experience'
                    sidebarHeading='Add your work experience'>
                    <ResumeFormDataSection>
                        <WorkExperience
                            experience={resume.experience}
                            componentChanged={componentChanged}
                            componentRemoved={componentRemoved}
                            componentAdded={componentAdded}
                            resumeKey='experience'
                        />
                    </ResumeFormDataSection>
                </ResumeFormInfoSection>

                <ResumeFormBorder />

                <ResumeFormInfoSection
                    sidebarTitle='Talks'
                    sidebarHeading='List your presentation or talks at events or meetups'>
                    <ResumeFormDataSection>
                        <Talks
                            talks={resume.talks}
                            componentChanged={componentChanged}
                            componentRemoved={componentRemoved}
                            componentAdded={componentAdded}
                            resumeKey='talks'
                        />
                    </ResumeFormDataSection>
                </ResumeFormInfoSection>

                <ResumeFormBorder />

                <ResumeFormInfoSection
                    sidebarTitle='Licenses / Certifications'
                    sidebarHeading='List your licenses or certifications'>
                    <ResumeFormDataSection>
                        <Certifications
                            certifications={resume.licenses_and_certifications}
                            componentChanged={componentChanged}
                            componentRemoved={componentRemoved}
                            componentAdded={componentAdded}
                            resumeKey='licenses_and_certifications'
                        />
                    </ResumeFormDataSection>
                </ResumeFormInfoSection>

                <ResumeFormBorder />

                <ResumeFormInfoSection
                    sidebarTitle='Awards'
                    sidebarHeading='List all the awards received by a company'>
                    <ResumeFormDataSection>
                        <Awards
                            awards={resume.awards}
                            componentChanged={componentChanged}
                            componentRemoved={componentRemoved}
                            componentAdded={componentAdded}
                            resumeKey='awards'
                        />
                    </ResumeFormDataSection>
                </ResumeFormInfoSection>

                <ResumeFormBorder />

                <ResumeFormInfoSection
                    sidebarTitle='Education'
                    sidebarHeading='List your education details'>
                    <ResumeFormDataSection>
                        <Education
                            education={resume.education}
                            componentChanged={componentChanged}
                            componentRemoved={componentRemoved}
                            componentAdded={componentAdded}
                            resumeKey='education'
                        />
                    </ResumeFormDataSection>
                </ResumeFormInfoSection>

                <ResumeFormBorder />

                <ResumeFormInfoSection
                    sidebarTitle='Side Projects'
                    sidebarHeading='List your side projects'>
                    <ResumeFormDataSection>
                        <SideProject
                            side_projects={resume.side_projects}
                            componentChanged={componentChanged}
                            componentRemoved={componentRemoved}
                            componentAdded={componentAdded}
                            resumeKey='side_projects'
                        />
                    </ResumeFormDataSection>
                </ResumeFormInfoSection>

                <ResumeFormBorder />

                <div
                    className='px-4 py-3 bg-gray-50 text-right sm:px-6 bg-tertiary rounded-md'>
                    <button
                        type='submit'
                        className='bg-primary text-secondary inline-flex justify-center py-2 px-8  text-md font-bold rounded-md'>
                        {id === undefined ? 'Create Resume' : 'Update Resume'}
                    </button>
                    <button
                        className={`flex flex-row px-4 py-2 
                    font-medium rounded-md text-secondary bg-primary hover:bg-primary w-full text-center text-md font-bold`}
                        type='submit'>
                        <div className='flex-grow'>
                            {id === undefined ? 'Create Resume' : 'Update Resume'}
                        </div>
                        <svg
                            role='img'
                            className={`flex-none animate-spin -mr-1 ml-3 h-5 w-5 text-secondary 
                            fill='none' viewBox='0 0 24 24'`}>
                            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                            <path
                                className='opacity-75'
                                fill='currentColor'
                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'>
                            </path>
                        </svg>
                    </button>
                </div>
            </form >
        </div >
    )
}

export default ResumeForm;

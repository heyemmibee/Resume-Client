import { useState, useContext } from 'react';
import SideBar from './SideBar';
import CareerInformation from './CareerInformation';
import WorkExperience from './WorkExperience';
import Talks from './Talks';
import Certifications from './Certifications';
import Awards from './Awards';
import Education from './Education';
import SideProjects from './SideProjects'
import ResumeFormBorder from './ResumeFormBorder';
import validate from './ResumeFormValidation';
import { AuthContext } from '../context/authContext';
import { create } from './ResumeAPI';
import {
    useHistory
} from "react-router-dom";

const ResumeForm = () => {

    const authContext = useContext(AuthContext);
    const history = useHistory();

    const experience = {
        'title': '',
        'company': '',
        'responsibilities': '',
        'employment_type': '',
        'from': '',
        'to': '',
        'current': false
    };

    const talk = {
        'title': '',
        'year': new Date().getFullYear(),
        'event': '',
        'url': '',
        'summary': ''
    };

    const cert = {
        'title': '',
        'issuing_organization': '',
        'credential_expires': true,
        'issue_date': '',
        'expiration_date': '',
        'credential_id': '',
        'credential_url': ''
    };

    const award = {
        'title': '',
        'year': new Date().getFullYear(),
        'presented_by': '',
        'url': '',
        'summary': ''
    }

    const education = {
        'school': '',
        'degree': '',
        'field_of_study': '',
        'grade': '',
        'from': '',
        'to': '',
        'activities_and_socities': '',
        'graduated': false
    }

    const sideProject = {
        'title': '',
        'url': '',
        'description': '',
        'year': new Date().getFullYear(),
        'github_url': ''
    }

    const getObjectToAdd = key => {
        switch (key) {
            case 'experience':
                return experience;
            case 'talks':
                return talk;
            case 'licenses_and_certifications':
                return cert;
            case 'awards':
                return award;
            case 'education':
                return education;
            case 'side_projects':
                return sideProject;
            default:
                return null;
        }
    }

    const [resume, setResume] = useState(() => (
        {
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
        }
    ));

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

    const componentAdded = (e, key) => {
        e.preventDefault();
        setResume({
            ...resume,
            [key]: [...resume[key], getObjectToAdd(key)]
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
            const validatedResume = await validate(resume);
            const { statusCode } = await create(authContext.user.accessToken, validatedResume);
            if (statusCode === 201) {
                history.push('/resumes');
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
                                <div className='px-4 py-5 bg-white space-y-6 sm:p-6 bg-secondary'>
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
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <div className='shadow sm:rounded-md sm:overflow-hidden'>
                                <div className='px-4 py-5 bg-white space-y-6 sm:p-6 bg-secondary'>
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
                                <div className='px-4 py-5 bg-white sm:p-6 bg-secondary'>
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
                                        <div className='col-span-6 sm:col-span-6'>
                                            <label htmlFor='summary' className='lbl'>About Me</label>
                                            <textarea
                                                value={resume.summary}
                                                onChange={(e) => setResume({ ...resume, [e.target.name]: e.target.value })}
                                                name='summary'
                                                id='summary'
                                                className='input-txt'
                                                required
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

                <div className='mt-10 sm:mt-0'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <SideBar
                            title='Work Experience'
                            subHeading='Add your work experience'
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <div className='shadow overflow-hidden sm:rounded-md'>
                                <WorkExperience
                                    experience={resume.experience}
                                    componentChanged={componentChanged}
                                    componentRemoved={componentRemoved}
                                    componentAdded={componentAdded}
                                    resumeKey='experience'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <ResumeFormBorder />

                <div className='mt-10 sm:mt-0'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <SideBar
                            title='Talks'
                            subHeading='List your presentation or talks at events or meetups'
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <div className='shadow overflow-hidden sm:rounded-md'>
                                <Talks
                                    talks={resume.talks}
                                    componentChanged={componentChanged}
                                    componentRemoved={componentRemoved}
                                    componentAdded={componentAdded}
                                    resumeKey='talks'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <ResumeFormBorder />

                <div className='mt-10 sm:mt-0'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <SideBar
                            title='Licenses / Certifications'
                            subHeading='List your licenses or certifications'
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <div className='shadow overflow-hidden sm:rounded-md'>
                                <Certifications
                                    certifications={resume.licenses_and_certifications}
                                    componentChanged={componentChanged}
                                    componentRemoved={componentRemoved}
                                    componentAdded={componentAdded}
                                    resumeKey='licenses_and_certifications'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <ResumeFormBorder />

                <div className='mt-10 sm:mt-0'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <SideBar
                            title='Awards'
                            subHeading='List all the awards received by a company'
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <div className='shadow overflow-hidden sm:rounded-md'>
                                <Awards
                                    awards={resume.awards}
                                    componentChanged={componentChanged}
                                    componentRemoved={componentRemoved}
                                    componentAdded={componentAdded}
                                    resumeKey='awards'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <ResumeFormBorder />

                <div className='mt-10 sm:mt-0'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <SideBar
                            title='Education'
                            subHeading='List your education details'
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <div className='shadow overflow-hidden sm:rounded-md'>
                                <Education
                                    education={resume.education}
                                    componentChanged={componentChanged}
                                    componentRemoved={componentRemoved}
                                    componentAdded={componentAdded}
                                    resumeKey='education'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <ResumeFormBorder />

                <div className='mt-10 sm:mt-0'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <SideBar
                            title='Side Projects'
                            subHeading='List your side projects'
                        />
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                            <div className='shadow overflow-hidden sm:rounded-md'>
                                <SideProjects
                                    side_projects={resume.side_projects}
                                    componentChanged={componentChanged}
                                    componentRemoved={componentRemoved}
                                    componentAdded={componentAdded}
                                    resumeKey='side_projects'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <ResumeFormBorder />

                <div
                    className='px-4 py-3 bg-gray-50 text-right sm:px-6 bg-tertiary rounded-md'>
                    <button
                        type='submit'
                        className='bg-primary text-secondary inline-flex justify-center py-2 px-8  text-md font-bold rounded-md'>
                        Save
                </button>
                </div>
            </form>
        </div>
    )
}

export default ResumeForm;

import { useState } from 'react';
import SideBar from './SideBar';
import CareerInformation from './CareerInformation';
import WorkExperience from './WorkExperience';
import Talks from './Talks';
import Certifications from './Certifications';
import Awards from './Awards';
import Education from './Education';
import SideProjects from './SideProjects'

const ResumeForm = () => {

    const experience = {
        'title': '',
        'description': '',
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
            'name': '',
            'contact': {
                'email': '',
                'phone': ''
            },
            'location': {
                'city': '',
                'state': ''
            },
            'summary': '',
            'headline': '',
            'pronouns': '',
            'links': {
                'dribble': '',
                'facebook': '',
                'github': '',
                'twitter': '',
                'website': ''
            },
            'experience': [],
            'talks': [],
            'awards': [],
            'education': [],
            'licenses_and_certifications': [],
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
                    return {
                        ...item,
                        [e.target.getAttribute('data-customkey')]: e.target.value
                    }
                }
                return item;
            })
        });
    }

    const componentAdded = (e, key) => {
        setResume({
            ...resume,
            [key]: [...resume[key], getObjectToAdd(key)]
        })
    }

    const componentRemoved = (e, key, indexToRemove) => {
        setResume({
            ...resume,
            [key]: resume[key].filter((item, index) => index !== indexToRemove)
        })
    }

    return (
        <div>
            <div className='md:grid md:grid-cols-3 md:gap-6 mt-4'>
                <SideBar
                    title='Personal Information'
                />
                <div className='mt-5 md:mt-0 md:col-span-2'>
                    <form action='#' method='POST'>
                        <div className='shadow sm:rounded-md sm:overflow-hidden'>
                            <div className='px-4 py-5 bg-white space-y-6 sm:p-6 bg-secondary'>
                                <div className='grid grid-cols-6 gap-6'>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='pronouns' className='lbl'>Pronoun</label>
                                        <input
                                            type='text'
                                            name='pronouns'
                                            id='pronouns'
                                            className='input-txt'
                                        />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='name' className='lbl'>Name</label>
                                        <input
                                            type='text'
                                            name='name'
                                            id='name'
                                            autoComplete='given-name'
                                            className='input-txt'
                                        />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='email' className='lbl'>Email</label>
                                        <input
                                            type='text'
                                            name='email'
                                            id='email'
                                            autoComplete='given-name'
                                            className='input-txt'
                                        />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='phone' className='lbl'>Phone</label>
                                        <input
                                            type='text'
                                            name='phone'
                                            id='phone'
                                            autoComplete='phone'
                                            className='input-txt'
                                        />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='city' className='lbl'>City</label>
                                        <input
                                            type='text'
                                            name='city'
                                            id='city'
                                            autoComplete='city'
                                            className='input-txt'
                                        />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='state' className='lbl'>State</label>
                                        <input
                                            type='text'
                                            name='state'
                                            id='state'
                                            autoComplete='state'
                                            className='input-txt'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                    <div className='border-t border-gray-200'></div>
                </div>
            </div>

            <div className='mt-10 sm:mt-0'>
                <div className='md:grid md:grid-cols-3 md:gap-6'>
                    <SideBar
                        title='Professional Details'
                        subHeading='Add your professional summary.'
                    />
                    <div className='mt-5 md:mt-0 md:col-span-2'>

                        <div className='shadow overflow-hidden sm:rounded-md'>
                            <div className='px-4 py-5 bg-white sm:p-6 bg-secondary'>
                                <div className='grid grid-cols-6 gap-6'>
                                    <div className='col-span-6 sm:col-span-6'>
                                        <label htmlFor='headline' className='lbl'>Headline</label>
                                        <input
                                            type='text'
                                            name='headline'
                                            id='headline'
                                            className='input-txt'
                                        />
                                    </div>
                                    <div className='col-span-6 sm:col-span-6'>
                                        <label htmlFor='summary' className='lbl'>Summary</label>
                                        <textarea
                                            name='summary'
                                            id='summary'
                                            className='input-txt'
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

            <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                    <div className='border-t border-gray-200'></div>
                </div>
            </div>

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

            <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                    <div className='border-t border-gray-200'></div>
                </div>
            </div>

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

            <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                    <div className='border-t border-gray-200'></div>
                </div>
            </div>

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

            <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                    <div className='border-t border-gray-200'></div>
                </div>
            </div>

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

            <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                    <div className='border-t border-gray-200'></div>
                </div>
            </div>

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

            <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                    <div className='border-t border-gray-200'></div>
                </div>
            </div>

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

            <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Save
                </button>
            </div>
        </div>

    )
}

export default ResumeForm;

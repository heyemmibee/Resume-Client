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
        'title': 'Resume',
        'url': 'https://localhost',
        'description': 'This is my site',
        'year': 2021
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
            <div className='md:grid md:grid-cols-3 md:gap-6'>
                <SideBar
                    title='Personal Information'
                />
                <div className='mt-5 md:mt-0 md:col-span-2'>
                    <form action='#' method='POST'>
                        <div className='shadow sm:rounded-md sm:overflow-hidden'>
                            <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                                <div className='grid grid-cols-6 gap-6'>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='pronoun' className='block text-sm font-medium text-gray-700'>Pronoun</label>
                                        <input type='text' name='pronoun' id='pronoun' autoComplete='given-name' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                                        <input type='text' name='name' id='name' autoComplete='given-name' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                                        <input type='text' name='email' id='email' autoComplete='given-name' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>Phone</label>
                                        <input type='text' name='phone' id='phone' autoComplete='family-name' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='city' className='block text-sm font-medium text-gray-700'>City</label>
                                        <input type='text' name='city' id='city' autoComplete='given-name' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    </div>
                                    <div className='col-span-6 sm:col-span-3'>
                                        <label htmlFor='state' className='block text-sm font-medium text-gray-700'>State</label>
                                        <select id='state' name='state' autoComplete='state' className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>

                                    <div className='col-span-3 sm:col-span-2'>
                                        <label htmlFor='company_website' className='block text-sm font-medium text-gray-700'>
                                            Website
                                        </label>
                                        <div className='mt-1 flex rounded-md shadow-sm'>
                                            <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                                                http://
                                            </span>
                                            <input type='text' name='company_website' id='company_website' className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300' placeholder='www.example.com' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='about' className='block text-sm font-medium text-gray-700'>
                                        About
                                    </label>
                                    <div className='mt-1'>
                                        <textarea id='about' name='about' rows='3' className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md' placeholder='you@example.com'></textarea>
                                    </div>
                                    <p className='mt-2 text-sm text-gray-500'>
                                        Brief description htmlFor your profile. URLs are hyperlinked.
                                    </p>
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
                        title='Career Information'
                        subHeading='Add your career information.'
                    />
                    <div className='mt-5 md:mt-0 md:col-span-2'>

                        <div className='shadow overflow-hidden sm:rounded-md'>
                            <div className='px-4 py-5 bg-white sm:p-6'>
                                <div className='grid grid-cols-6 gap-6'>
                                    <div className='col-span-6 sm:col-span-4'>
                                        <label htmlFor='headline' className='block text-sm font-medium text-gray-700'>Headline</label>
                                        <input type='text' name='headline' id='headline' autoComplete='email' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                                    </div>
                                    <div className='col-span-6 sm:col-span-4'>
                                        <label htmlFor='summary' className='block text-sm font-medium text-gray-700'>Summary</label>
                                        <textarea name='summary' id='summary' autoComplete='email' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
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
                        subHeading='List your presentation or talks at events'
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
                        title='Licenses &amp; Certifications'
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

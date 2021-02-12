import { Fragment, useState } from 'react';

const ResumeForm = () => {

    const links = ['Dribble', 'Facebook', 'Github', 'Twitter', 'Website'];
    const [socialLinks, setSocialLinks] = useState(() => []);

    const removeSocialLink = (e, index) => {
        e.preventDefault();
        console.log(e, index, socialLinks, socialLinks.length);
    }

    const addSocialLink = (e) => {
        e.preventDefault();
        setSocialLinks([...socialLinks, socialLinks.length === 0 ? links[0] : links[socialLinks.length]])
    };

    return (
        <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="pronoun" className="block text-sm font-medium text-gray-700">Pronoun</label>
                                        <input type="text" name="pronoun" id="pronoun" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" name="name" id="name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="text" name="email" id="email" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                        <input type="text" name="phone" id="phone" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <input type="text" name="city" id="city" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                                        <select id="state" name="state" autoComplete="state" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                                            Website
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                http://
                                            </span>
                                            <input type="text" name="company_website" id="company_website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        About
                                    </label>
                                    <div className="mt-1">
                                        <textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Brief description htmlFor your profile. URLs are hyperlinked.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Career Information</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Add your career information.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="headline" className="block text-sm font-medium text-gray-700">Headline</label>
                                            <input type="text" name="headline" id="headline" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
                                            <textarea name="summary" id="summary" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        {socialLinks.map((item, index) => (
                                            <Fragment
                                                key={index}>
                                                <Fragment>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="linkType" className="block text-sm font-medium text-gray-700">Link Type</label>
                                                        <select
                                                            value={item}
                                                            id="linkType"
                                                            name="linkType"
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                            {links.map((link, index) => (
                                                                <option
                                                                    value={link}
                                                                    key={index}>
                                                                    {link}
                                                                </option>)
                                                            )}
                                                        </select>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                                                            Link
                                                        </label>
                                                        <div className="mt-1 flex rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                                http://
                                                            </span>
                                                            <input type="url" name="link" id="link" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                                                            <button
                                                                className='inline-block w-6'
                                                                onClick={(e) => removeSocialLink(e, socialLinks.length)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            </Fragment>
                                        ))}

                                        {socialLinks.length < links.length ?
                                            <div className='col-span-6'>
                                                <button
                                                    onClick={addSocialLink}
                                                    className='w-36 flex flex-row justify-between'>
                                                    <div className='w-6'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>add social link</div>
                                                </button>
                                            </div> :
                                            <Fragment></Fragment>
                                        }
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Experience</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Add your experience
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="headline" className="block text-sm font-medium text-gray-700">Headline</label>
                                            <input type="text" name="headline" id="headline" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
                                            <textarea name="summary" id="summary" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                                            <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                                            <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                            <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                                            <input type="text" name="state" id="state" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                                            <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Decide which communications you'd like to receive and how.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <fieldset>
                                        <legend className="text-base font-medium text-gray-900">By Email</legend>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700">Comments</label>
                                                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="candidates" name="candidates" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="candidates" className="font-medium text-gray-700">Candidates</label>
                                                    <p className="text-gray-500">Get notified when a candidate applies htmlFor a job.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="offers" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
                                                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div>
                                            <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                                            <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                        </div>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-center">
                                                <input id="push_everything" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                                <label htmlFor="push_everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Everything
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="push_email" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                                <label htmlFor="push_email" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Same as email
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="push_nothing" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                                <label htmlFor="push_nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                                    No push notifications
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResumeForm;

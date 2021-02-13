import { Fragment } from 'react';

const capitalize = item => `${item.charAt(0).toUpperCase()}${item.slice(1)}`;

const ResumeCareerInformation = (props) => {
    return (
        <Fragment>
            {
                Object.keys(props.links).map((item, index) => (
                    <div
                        key={item}
                        className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor={`socialLink${index}`}
                            className="block text-sm font-medium text-gray-700">
                            {capitalize(item)}
                        </label>
                        <div
                            className="mt-1 flex rounded-md shadow-sm">
                            <span
                                className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                http://
                            </span>
                            <input
                                onChange={(e) => props.socialLinkChanged(e, item)}
                                type="url"
                                name={`socialLink${index}`}
                                id={`socialLink${index}`}
                                value={props.links[item]}
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder={`www.${item}.com`} />
                        </div>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default ResumeCareerInformation;

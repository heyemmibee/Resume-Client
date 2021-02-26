import AddOneButton from './AddOneButton';
import RemoveOneButton from './RemoveOneButton';
import { Fragment } from 'react';

const SideProject = (props) => {

    const sideProject = {
        'title': '',
        'url': '',
        'summary': '',
        'year': new Date().getFullYear(),
        'github_url': ''
    };

    return (
        <Fragment>
            {props.side_projects.map((item, index) => (
                <div
                    key={index}
                    className='new-section'>
                    <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`sp_title${index}`}
                                className='lbl'>
                                Title
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.title}
                                type='text'
                                name={`sp_title${index}`}
                                data-customkey='title'
                                id={`sp_title${index}`}
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`sp_year${index}`}
                                className='lbl'>
                                Year
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.year}
                                type='number'
                                id={`sp_year${index}`}
                                name={`sp_year${index}`}
                                data-customkey='year'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`sp_url${index}`}
                                className='lbl'>
                                Url
                            </label>
                            <div
                                className="mt-1 flex rounded-md shadow-sm">
                                <span
                                    className='http-lbl'>
                                    http://
                                </span>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.url}
                                    type='url'
                                    name={`sp_url${index}`}
                                    data-customkey='url'
                                    id={`sp_url${index}`}
                                    className='input-url'
                                    placeholder='www.example.com'
                                />
                            </div>
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`sp_github_url${index}`}
                                className='lbl'>
                                GitHub Url
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className='http-lbl'>
                                    http://
                                </span>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.github_url}
                                    type='url'
                                    name={`sp_github_url${index}`}
                                    data-customkey='github_url'
                                    id={`sp_github_url${index}`}
                                    className='input-url'
                                    placeholder='www.github.com'
                                />
                            </div>
                        </div>
                        <div className='col-span-6 sm:col-span-6'>
                            <label
                                htmlFor={`sp_summary${index}`}
                                className='lbl'>
                                Summary
                            </label>
                            <textarea
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.summary}
                                name={`sp_summary${index}`}
                                id={`sp_summary${index}`}
                                data-customkey='summary'
                                className='input-txt'
                            />
                        </div>
                        <RemoveOneButton
                            resumeKey={props.resumeKey}
                            componentRemoved={props.componentRemoved}
                            title='remove side project'
                            className='w-48'
                            index={index}
                        />
                    </div>
                </div>
            ))}
            <AddOneButton
                resumeKey={props.resumeKey}
                componentAdded={props.componentAdded}
                title='add side project'
                className='w-42'
                obj={sideProject}
            />
        </Fragment>
    )
}

export default SideProject;

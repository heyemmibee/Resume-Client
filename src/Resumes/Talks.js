import AddOneButton from './AddOneButton';
import RemoveOneButton from './RemoveOneButton';
import { Fragment } from 'react';

const Talks = (props) => {
    return (
        <Fragment>
            {props.talks.map((item, index) => (
                <div
                    key={index}
                    className='new-section'>
                    <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`t_title${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Title
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.title}
                                type='text'
                                name={`t_title${index}`}
                                data-customkey='title'
                                id={`t_title${index}`}
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`t_year${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Year
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.year}
                                type='number'
                                name={`t_year${index}`}
                                id={`t_year${index}`}
                                data-customkey='year'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`t_event${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Event
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.event}
                                type='text'
                                id={`t_event${index}`}
                                name={`t_event${index}`}
                                data-customkey='event'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`t_url${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Url
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className='http-lbl'>
                                    http://
                                </span>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.url}
                                    type='url'
                                    name={`t_url${index}`}
                                    data-customkey='url'
                                    id={`t_url${index}`}
                                    className='input-url'
                                    placeholder='www.example.com'
                                />
                            </div>
                        </div>
                        <div className='col-span-6 sm:col-span-6'>
                            <label
                                htmlFor={`t_summary${index}`}
                                className='block text-sm font-medium text-gray-700'>
                                Summary
                            </label>
                            <textarea
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.summary}
                                name={`t_summary${index}`}
                                id={`t_summary${index}`}
                                data-customkey='summary'
                                className='input-txt'
                            />
                        </div>
                        <RemoveOneButton
                            resumeKey={props.resumeKey}
                            componentRemoved={props.componentRemoved}
                            title='remove talk'
                            className='w-32'
                            index={index}
                        />
                    </div>
                </div>
            ))}
            <AddOneButton
                resumeKey={props.resumeKey}
                componentAdded={props.componentAdded}
                title='add talk'
                className='w-28'
            />
        </Fragment>
    )
}

export default Talks;

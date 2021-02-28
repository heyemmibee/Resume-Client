import AddOneButton from './AddOneButton';
import RemoveOneButton from './RemoveOneButton';
import { Fragment } from 'react';

const Awards = (props) => {

    const award = {
        'title': '',
        'year': new Date().getFullYear(),
        'presented_by': '',
        'url': '',
        'summary': ''
    };

    return (
        <Fragment>
            {props.awards.map((item, index) => (
                <div
                    key={index}
                    className='new-section'>
                    <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`a_title${index}`}
                                className='lbl'>
                                Title
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.title}
                                type='text'
                                name={`a_title${index}`}
                                data-customkey='title'
                                id={`a_title${index}`}
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`a_presented_by${index}`}
                                className='lbl'>
                                Presented By
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.presented_by}
                                type='text'
                                name={`a_presented_by${index}`}
                                data-customkey='presented_by'
                                id={`a_presented_by${index}`}
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`a_presented_by${index}`}
                                className='lbl'>
                                Year
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.year}
                                type='number'
                                name={`a_presented_by${index}`}
                                id={`a_presented_by${index}`}
                                data-customkey='presented_by'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`t_url${index}`}
                                className='lbl'>
                                Url
                            </label>
                            <div
                                className='mt-1 flex rounded-md shadow-sm'>
                                <span
                                    className='http-lbl'>
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
                                className='lbl'>
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
                            title='remove award'
                            className='w-42'
                            index={index}
                        />
                    </div>
                </div>
            ))}
            <AddOneButton
                resumeKey={props.resumeKey}
                componentAdded={props.componentAdded}
                title='add award'
                className='w-42'
                obj={award}
            />
        </Fragment>
    )
}

export default Awards;

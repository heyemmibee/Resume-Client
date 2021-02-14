import AddOneButton from './AddOneButton';
import RemoveOneButton from './RemoveOneButton';
import { Fragment } from 'react';

const WorkExperience = (props) => {
    return (
        <Fragment>
            {
                props.experience.map((item, index) => (
                    <div
                        key={index}
                        className='new-section'>
                        <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-6'>
                                <label
                                    htmlFor={`we_title${index}`}
                                    className='lbl'>
                                    Title
                                </label>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.title}
                                    type='text'
                                    name={`we_title${index}`}
                                    data-customkey='title'
                                    id={`we_title${index}`}
                                    className='input-txt'
                                    required
                                />
                            </div>
                            <div className='col-span-6 sm:col-span-3'>
                                <label
                                    htmlFor={`we_company${index}`}
                                    className='lbl'>
                                    Company
                                </label>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.company}
                                    type='text'
                                    name={`we_company${index}`}
                                    data-customkey='company'
                                    id={`we_company${index}`}
                                    className='input-txt'
                                    required
                                />
                            </div>
                            <div className='col-span-6 sm:col-span-3'>
                                <label
                                    htmlFor={`we_employmentType${index}`}
                                    className='lbl'>
                                    Employment Type
                                </label>
                                <select
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={props.employment_type}
                                    id={`we_employmentType${index}`}
                                    name={`we_employmentType${index}`}
                                    data-customkey='employment_type'
                                    className='input-txt'
                                    required>
                                    <option>Apprenticeship</option>
                                    <option>Contract</option>
                                    <option>Freelance</option>
                                    <option>Full-time</option>
                                    <option>Internship</option>
                                    <option>Part-time</option>
                                    <option>Seasonal</option>
                                    <option>Self-employed</option>
                                </select>
                            </div>
                            <div className='col-span-6 sm:col-span-6'>
                                <label
                                    htmlFor={`we_responsibilities${index}`}
                                    className='lbl'>
                                    Responsibilities
                                </label>
                                <textarea
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.responsibilities}
                                    name={`we_responsibilities${index}`}
                                    id={`we_responsibilities${index}`}
                                    data-customkey='responsibilities'
                                    className='input-txt'
                                    required
                                />
                            </div>
                            <div className='col-span-6 sm:col-span-3'>
                                <label
                                    htmlFor={`we_from${index}`}
                                    className='lbl'>
                                    From
                                </label>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={props.from}
                                    type='date'
                                    name={`we_from${index}`}
                                    data-customkey='from'
                                    id={`we_from${index}`}
                                    className='input-txt'
                                    required
                                />
                            </div>
                            <div className='col-span-6 sm:col-span-3'>
                                <label
                                    htmlFor={`to${index}`}
                                    className='lbl'>
                                    To
                                </label>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={props.to}
                                    type='date'
                                    name={`to${index}`}
                                    id={`to${index}`}
                                    data-customkey='to'
                                    className='input-txt'
                                />
                                <p className='text-sm italic'>Leave blank if this is your current place of employment</p>
                            </div>
                            <RemoveOneButton
                                resumeKey={props.resumeKey}
                                componentRemoved={props.componentRemoved}
                                title='remove work experience'
                                className='w-56'
                                index={index}
                            />
                        </div>
                    </div>

                ))
            }
            <AddOneButton
                resumeKey={props.resumeKey}
                componentAdded={props.componentAdded}
                title='add work experience'
                className='w-48'
            />
        </Fragment >
    )
}

export default WorkExperience;

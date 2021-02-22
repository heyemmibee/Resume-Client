import AddOneButton from './AddOneButton';
import RemoveOneButton from './RemoveOneButton';
import { Fragment } from 'react';

const Education = (props) => {
    return (
        <Fragment>
            {props.education.map((item, index) => (
                <div
                    key={index}
                    className='new-section'>
                    <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_school${index}`}
                                className='lbl'>
                                School
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.school}
                                type='text'
                                name={`e_school${index}`}
                                data-customkey='school'
                                id={`e_school${index}`}
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_degree${index}`}
                                className='lbl'>
                                Degree
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.degree}
                                type='text'
                                name={`e_degree${index}`}
                                id={`e_degree${index}`}
                                data-customkey='degree'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_field_of_study${index}`}
                                className='lbl'>
                                Field of Study
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.field_of_study}
                                type='text'
                                id={`e_field_of_study${index}`}
                                name={`e_field_of_study${index}`}
                                data-customkey='field_of_study'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_grade${index}`}
                                className='lbl'>
                                Grade
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.grade}
                                type='number'
                                id={`e_grade${index}`}
                                name={`e_grade${index}`}
                                data-customkey='grade'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_from${index}`}
                                className='lbl'>
                                From
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={(new Date(item.from)).toString() === 'Invalid Date' ? item.from : (new Date(item.from)).toISOString().substr(0, 10)}
                                type='date'
                                name={`e_from${index}`}
                                id={`e_from${index}`}
                                data-customkey='from'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_to${index}`}
                                className='lbl'>
                                To
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={(new Date(item.to)).toString() === 'Invalid Date' ? item.to : (new Date(item.to)).toISOString().substr(0, 10)}
                                type='date'
                                name={`e_to${index}`}
                                id={`e_to${index}`}
                                data-customkey='to'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_activities_and_socities${index}`}
                                className='lbl'>
                                Activities & Socities
                            </label>
                            <textarea
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.activities_and_socities}
                                id={`e_activities_and_socities${index}`}
                                name={`e_activities_and_socities${index}`}
                                data-customkey='activities_and_socities'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`e_graduated${index}`}
                                className='lbl'>
                                Graduated
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                defaultChecked={item.graduated}
                                type='checkbox'
                                id={`e_graduated${index}`}
                                name={`e_graduated${index}`}
                                data-customkey='graduated'
                                className='input-txt'
                            />
                        </div>
                        <RemoveOneButton
                            resumeKey={props.resumeKey}
                            componentRemoved={props.componentRemoved}
                            title='remove education'
                            className='w-48'
                            index={index}
                        />
                    </div>
                </div>
            ))}
            <AddOneButton
                resumeKey={props.resumeKey}
                componentAdded={props.componentAdded}
                title='add education'
                className='w-42'
            />
        </Fragment>
    )
}

export default Education;

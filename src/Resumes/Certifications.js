import AddOneButton from './AddOneButton';
import RemoveOneButton from './RemoveOneButton';
import { Fragment } from 'react';

const Certifications = (props) => {

    const cert = {
        'title': '',
        'issuing_organization': '',
        'credential_expires': true,
        'issue_date': '',
        'expiration_date': '',
        'credential_id': '',
        'credential_url': ''
    };

    return (
        <Fragment>
            {props.certifications.map((item, index) => (
                <div
                    key={index}
                    className='new-section'>
                    <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`lc_title${index}`}
                                className='lbl'>
                                Title
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.title}
                                type='text'
                                name={`lc_title${index}`}
                                data-customkey='title'
                                id={`lc_title${index}`}
                                className='input-txt'
                                required
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`lc_issuingorg${index}`}
                                className='lbl'>
                                Issuing Organization
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.issuing_organization}
                                type='text'
                                name={`lc_issuingorg${index}`}
                                id={`lc_issuingorg${index}`}
                                data-customkey='issuing_organization'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`lc_credential_id${index}`}
                                className='lbl'>
                                Credential Id
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={item.credential_id}
                                type='text'
                                id={`lc_credential_id${index}`}
                                name={`lc_credential_id${index}`}
                                data-customkey='credential_id'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                            <label
                                htmlFor={`lc_credential_url${index}`}
                                className='lbl'>
                                Credential Url
                            </label>
                            <div className='mt-1 flex rounded-md shadow-sm'>
                                <span className='http-lbl'>
                                    http://
                                </span>
                                <input
                                    onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                    value={item.credential_url}
                                    type='url'
                                    name={`lc_credential_url${index}`}
                                    data-customkey='credential_url'
                                    id={`lc_credential_url${index}`}
                                    className='input-url'
                                    placeholder='www.example.com'
                                />
                            </div>
                        </div>
                        <div className='col-span-6 sm:col-span-6 lg:col-span-3'>
                            <label
                                htmlFor={`lc_issue_date${index}`}
                                className='lbl'>
                                Issue Date
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={(new Date(item.issue_date)).toString() === 'Invalid Date' ? item.issue_date : (new Date(item.issue_date)).toISOString().substr(0, 10)}
                                type='date'
                                name={`lc_issue_date${index}`}
                                id={`lc_issue_date${index}`}
                                data-customkey='issue_date'
                                className='input-txt'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-6 lg:col-span-3'>
                            <label
                                htmlFor={`lc_expiration_date${index}`}
                                className='lbl'>
                                Expiration Date
                            </label>
                            <input
                                onChange={(e) => props.componentChanged(e, props.resumeKey, index)}
                                value={(new Date(item.expiration_date)).toString() === 'Invalid Date' ? item.expiration_date : (new Date(item.expiration_date)).toISOString().substr(0, 10)}
                                type='date'
                                name={`lc_expiration_date${index}`}
                                id={`lc_expiration_date${index}`}
                                data-customkey='expiration_date'
                                className='input-txt'
                            />
                            <p className='text-sm italic'>
                                Leave blank if the license / certificate doesn't expire
                            </p>
                        </div>
                        <RemoveOneButton
                            resumeKey={props.resumeKey}
                            componentRemoved={props.componentRemoved}
                            title='remove license / certification'
                            className='w-72'
                            index={index}
                        />
                    </div>
                </div>
            ))}
            <AddOneButton
                resumeKey={props.resumeKey}
                componentAdded={props.componentAdded}
                title='add license / certification'
                className='w-42'
                obj={cert}
            />
        </Fragment>
    )
}

export default Certifications;

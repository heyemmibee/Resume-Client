import { Fragment } from 'react';

const capitalize = item => `${item.charAt(0).toUpperCase()}${item.slice(1)}`;

const CareerInformation = (props) => {
    return (
        <Fragment>
            {
                Object.keys(props.links).map((item, index) => (
                    <div
                        key={item}
                        className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor={`socialLink${index}`}
                            className="lbl">
                            {capitalize(item)}
                        </label>
                        <div
                            className="mt-1 flex rounded-md shadow-sm">
                            <span
                                className='http-lbl'>
                                http://
                            </span>
                            <input
                                onChange={(e) => props.socialLinkChanged(e, item)}
                                type="url"
                                name={`socialLink${index}`}
                                id={`socialLink${index}`}
                                value={props.links[item]}
                                className='input-url'
                                placeholder={`www.${item}.com`} />
                        </div>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default CareerInformation;

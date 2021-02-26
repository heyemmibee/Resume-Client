import SideBar from './SideBar';

export const ResumeFormInfoSection = ({ sidebarTitle, sidebarHeading, children }) => {
    return (
        <div className='mt-10 sm:mt-0'>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
                <SideBar
                    title={sidebarTitle}
                    subHeading={sidebarHeading}
                />
                {children}
            </div>
        </div>
    )
}

export const ResumeFormDataSection = (props) => {
    return (
        <div className='mt-5 md:mt-0 md:col-span-2'>
            <div className='shadow overflow-hidden sm:rounded-md'>
                {props.children}
            </div>
        </div>
    )
}

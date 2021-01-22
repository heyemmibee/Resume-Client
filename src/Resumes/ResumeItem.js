const ResumeItem = (props) => {
    const resumes = props.resumes.map((item) => (
        <div key={item._id}>{item.name}</div>
    ))

    return (
        <div>
            {resumes}
        </div>
    )
}

export default ResumeItem;

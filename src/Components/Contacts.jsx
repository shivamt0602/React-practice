const Contacts = (props)=>{
    return (
        <>
        <div className="cards flex">
            <div className="card-info">
                <p>{props.name}</p>
                <p>{props.number}</p>
            </div>
        </div>
        </>
    )
}


export default Contacts;
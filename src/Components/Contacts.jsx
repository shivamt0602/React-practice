const Contacts = (props)=>{
    return (
        <>
        <div className="cards flex">
            <div className="card-contact">
                <h1>{props.name}</h1>
            </div>
        </div>
        </>
    )
}


export default Contacts;
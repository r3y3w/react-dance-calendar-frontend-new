
export const CardAdmin = ({ venue }) => {

    const deleteEvent = () => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/delete?_id=${venue._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
            console.log('Event Deleted')
        }

        const editEvent = (_id) => {
            alert(venue._id)
            }
// I sawapped the <Link> tags for <div>
    return(
        <>
         
        <div to="/admin-page" className="venue-item-admin" >
                       
            <img src={venue.image} alt=""/>
            <div>
            <h1><b>Event:</b> {venue.dancevenue}</h1>
            <br />
            <p><b>Event ID:</b>  {venue._id}</p>       
            <p><b>Address:</b>  {venue.address}</p>
            <p><b>telephone:</b>  {venue.telephone}</p>
            <p><b>email:</b>  {venue.email}</p>
            <br />  
            </div>
            <div>
            <p><b>CoverFee: </b> {venue.coverfee}</p>
            <p><b>Date:</b>  {venue.date}</p>
            <p><b>Dance:</b>  {venue.dance}</p>
            <p><b>Workshop:</b>  {venue.workshop}</p>
            <p><b>Weekly:</b>  {venue.weekly}</p>
            <p><b>category:</b>  {venue.category}</p>
            <br />
            </div>          
                <button className="card-button" onClick={() => editEvent(venue.dancevenue)}>
                    <a>
                        Edit Event
                    </a>
                </button>
                <button className="card-button" onClick={() => deleteEvent(venue.dancevenue)}>
                    <a>
                        Delete Event
                    </a>
                </button>           
        </div>
        </>
    )


    

}


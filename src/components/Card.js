import { Link } from 'react-router-dom'
export const Card = ({ venue }) => {
    return(

        <Link state={venue} to="/" className="venue-item" >
                       
            <img src={venue.image} alt=""/>
            <div>
            <h1><b>Event:</b> {venue.dancevenue}</h1>
            <br />       
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
            <div>
                <button className="card-button">
                    <a>
                        View More
                    </a>
                </button>
            </div>
        </Link>
        
    )


    

}


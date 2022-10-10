// import { Link } from 'react-router-dom'
import { Collapse } from 'react-collapse'
import { useState } from 'react'

export const CardLearn = ({ venue }) => {

   const [changeView, setChangeView] = useState(false)

    return(

        <div state={venue} to="/" className="venue-item" >
                       
            <img src={venue.image} alt=""/>
            <div>
            <h1><b>Learn to Dance:</b> {venue.dancevenue}</h1> 
            <p><b>Dance:</b>  {venue.dance}</p>             
            <p><b>Address:</b>  {venue.address}</p>
            <p><b>telephone:</b>  {venue.telephone}</p>
          
           
            <br />  
            </div>

            <Collapse isOpened={changeView}>
            <div>
            <p><b>CoverFee: </b> {venue.coverfee}</p>
            <p><b>Date:</b>  {venue.date}</p>
            <p><b>email:</b>  {venue.email}</p>
            <p><b>Workshop:</b>  {venue.workshop}</p>
            <p><b>Weekly:</b>  {venue.weekly}</p>
            <p><b>category:</b>  {venue.category}</p>
            <br />
            </div>
            </Collapse>
            <div>
                <button onClick={() => setChangeView(!changeView)}  className="card-button">
                    <a>
                        Change View
                    </a>
                </button>
            </div>
        </div>
        
    )


    

}


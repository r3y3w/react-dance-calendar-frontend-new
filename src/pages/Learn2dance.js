
import {useState, useEffect } from 'react'
import { CardLearn } from '../components/CardLearn'

const Learn2Dance = () => {

    const [venuecollection, setVenueCollection] = useState([])

   
    // Render Mongo DB collection
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}`)
            .then((res) => res.json())
            .then((data) => setVenueCollection(data))
            .catch((err) => console.error(err))
        console.log('Getting Data')
        // console.log(venuecollection)
    }, [])

     //Filter event venues, and hide them by default
    const allVenues =
        venuecollection.filter((venue) => { 
            if (venue.category!=='event')               
           return(venue)}).map((venue, index) => {
               return (< CardLearn key={venue._id} venue={venue} index={index} className="venue-item"/>
                )})
    return(
        <div>
        <h1>Learn to Dance</h1>
        <div className='venues'>{allVenues}</div>
        </div>
    )
}

export default Learn2Dance
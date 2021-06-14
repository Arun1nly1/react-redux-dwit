import React from 'react';
import { useSelector } from 'react-redux';


const LocationComponent = () =>{
    const  location= useSelector(state => state.location.location)
    return(<div>
        <h2>Location:{location}</h2>
    </div>)
}

export default LocationComponent;

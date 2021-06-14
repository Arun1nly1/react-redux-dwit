import React from 'react';
import { useSelector } from 'react-redux';


const NameComponent = () =>{
    const name = useSelector(state => state.name.name)
    return(<div>
        <h2>Name:{name}</h2>
    </div>)
}

export default NameComponent;

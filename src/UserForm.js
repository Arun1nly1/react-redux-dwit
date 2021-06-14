import React from 'react';
import { useDispatch } from "react-redux";
import { locate } from "./redux/locationslice";
import { naming } from "./redux/nameslice";

const Form = () =>{
    const dispatch = useDispatch();

    return(
        <div className="user-form">

            {/* Change users name in context */}
        <div className="input-item">
        <label className="label">Update Name: </label>
        <input
          className="input"
          onChange={(e) => dispatch(naming(e.target.value))}
        />


      </div>
            {/* Change users location in context */}
        <div className="input-item">
        <label className="label">Update Location: </label>
        <input
          className="input"
          onChange={(e) => dispatch(locate(e.target.value))}
        />
      </div>
      </div>
    )
}

export default Form;
import { render } from '@testing-library/react';
import React from 'react';

function IdCard(props) {
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
  <img src={props.picture} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Last Name: {props.firstName}</h5>
    <h5 className="card-title">First Name: {props.lastName}</h5>
    <h5 className="card-title">Gender: {props.gender}</h5>
    <h5 className="card-title">Height: {props.height}</h5>
    <h5 className="card-title">Date:{props.date}</h5>
    <h5 className="card-title">Birth:{props.birth.toDateString()}</h5>
  </div>
</div>
        </div>
    )
}


export default IdCard
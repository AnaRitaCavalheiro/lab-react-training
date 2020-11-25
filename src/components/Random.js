import React from 'react';

function Random(props) {

    function getRandom(min, max) {
       return Math.floor(Math.random()* max) + min 
    }

    return(
        <div>
            <h4>{`Random Value between ${props.min} and ${props.max} => ${getRandom(props.min, props.max)}`}</h4>
        </div>
    )
}

export default Random;
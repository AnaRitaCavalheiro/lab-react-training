import React from 'react';

function BoxColor(props) {

    function componentToHex(c) {
        var hex = c.toString();
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
 
     return(
         <div style={{backgroundColor: `rgb(${props.r},${props.g}, ${props.b})`, height: '100px', width: '300px' }}>
             <h4>{`rgb(${props.r},${props.g}, ${props.b})`}</h4>
             <h4>{rgbToHex(props.r, props.g, props.b)}</h4>
         </div>
     )

}




export default BoxColor;
import React from 'react';


function Rating(props) {
let value = Math.round(props.children)
let emptyStar = '☆';
let fullStar = '★';
let stars = fullStar.repeat(value) + emptyStar.repeat(5 - value)
  return (
    <div>
      <h2>{stars}</h2>
    </div>
  );
}
export default Rating;


/*import React from 'react';

function Rating(props) {
    let stars = '';
    
    if (props.children > 0 && props.children < 2) {
      stars = '**';
    } else if (props.children > 2 && props.children < 5) {
      stars = '*****';
    }
    // Math.floor(star === 0 ? '*****' : props.star === '*****')
    return (
      <div>
        <h2>{stars}</h2>
      </div>
    );

    const Rating = props => {
      const number = Math.round(Number(props.children));
      return <div className="ratings">{'★'.repeat(number) + '☆'.repeat(5 - number)}</div>;
    };
  }


export default Rating;*/

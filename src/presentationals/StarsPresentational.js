import React from 'react';

const StarsPresentational = (props) => {
    return (
        <div>
            { props.stars.map( (x, i) => <i key={i} className="fa fa-star"></i> ) }
        </div>
    );
};

export default StarsPresentational;
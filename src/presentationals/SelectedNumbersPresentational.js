import React from 'react';

const SelectedNumbersPresentational = (props) => {
    return (
        <div>
             {props.selectedNumbers.map( (x, i) => <button onClick={() => props.handleRemoveSelected(x)} key={i} className="btn btn-default">{x}</button>) }
        </div>
    );
};
    
export default SelectedNumbersPresentational;
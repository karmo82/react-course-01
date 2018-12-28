import React from 'react';

const ButtonsPresentational = (props) => {
    return (
        <div>
            <button className="btn btn-default" onClick={props.handleCheckClick} >
                =
            </button>
            <br />
            <button className="btn btn-warning" onClick={props.handleResetClick} >
                <i className="fa fa-times"></i>
            </button>
        </div>
    );
};

export default ButtonsPresentational;
import React from 'react';

const LoginMessagesPresentational = (props) => {

    var message = <div></div>
    if(props.isCorrect !== null){
        if(props.isCorrect){
            message = <div className="alert alert-success">Login corretta!</div>;
        }
        else{
            message = <div className="alert alert-danger">Login sbagliata!</div>;
        }
    }

    return (
        <div>
            {message}            
        </div>
    );
};

export default LoginMessagesPresentational;
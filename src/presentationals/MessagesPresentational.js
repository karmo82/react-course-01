import React from 'react';

const MessagesPresentational = (props) => {

    var result = null;
    if(props.isCorrect !== null){
        if(props.isCorrect){
            result = <div className="alert alert-success" >Bravo!</div>
        }
        else{
            result = <div className="alert alert-danger" >Hai sbagliato!</div>
        }
    }

    return (
        <div>
            {
                result
            }
        </div>
    );
};

export default MessagesPresentational;
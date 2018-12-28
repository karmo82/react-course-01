import React from 'react';

const LoginButtonsPresentational = (props) => {
    return (
        <div  className="form-group">
            <button className="btn btn-default" onClick={props.handleLogin} >Login</button>
            <button className="btn btn-warning" onClick={props.handleLoginCancel} >Cancel</button>
        </div>
    );
};

export default LoginButtonsPresentational;
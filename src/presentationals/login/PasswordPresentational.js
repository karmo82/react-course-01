import React from 'react';

const PasswordPresentational = (props) => {
    return (
        <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input type="Password" className="form-control" 
                onChange={props.handlePasswordChanged}
                value={props.password}
                id="passwordInput" 
                placeholder="Enter password" />
        </div>
    );
};

export default PasswordPresentational;
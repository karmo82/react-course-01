import React from 'react';

const UsernamePresentational = (props) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleInputusername1">Username</label>
            <input type="username" className="form-control" 
                onChange={props.handleUsernameChanged}
                value={props.username}
                id="exampleInputusername1" 
                placeholder="Enter username" />
        </div>
    );
};

export default UsernamePresentational;
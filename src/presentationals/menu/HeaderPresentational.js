import React from 'react';
import {NavLink} from 'react-router-dom';
import LoggedUserContainer from '../../containers/LoggedUserContainer';

const HeaderPresentational = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{marginBottom: 60}} >
            <a className="navbar-brand" href="#">My Portal</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="" className="nav-link"  >
                            Home <span className="sr-only">(current)</span>
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link" >
                            Login 
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink to="/places" className="nav-link" >
                            Places 
                        </NavLink>
                    </li> 

                </ul>
                <div className="float-right">
                    <LoggedUserContainer></LoggedUserContainer>
                </div>
            </div>
        </nav>
    );
};

export default HeaderPresentational;
import React, { Component } from 'react';
import UsernamePresentational from '../presentationals/login/UsernamePresentational';
import PasswordPresentational from '../presentationals/login/PasswordPresentational';
import LoginButtonsPresentational from '../presentationals/login/LoginButtonsPresentational';
import LoginMessagesPresentational from '../presentationals/login/LoginMessagesPresentational';
import * as UserActions from '../actions/UserActions';
import {connect} from 'react-redux';

class LoginContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            isCorrect: null
        };
    }

    handleUsernameChanged = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChanged = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleLoginCancel = () => {
        this.setState(
            {
                username: '',
                password: ''
            }
        );
    }

    handleLogin = () => {
        if(this.state.username === "admin" && this.state.password === "password"){

            this.props.saveLoggedUser(this.state.username);
            
            this.setState({
                isCorrect: true
            });
        }else{
            this.setState({
                isCorrect:false
            });
        }
    }

    render() {
        return (
            <div>
                <UsernamePresentational username={this.state.username} 
                    handleUsernameChanged={this.handleUsernameChanged} >
                </UsernamePresentational>
                <PasswordPresentational password={this.state.password} 
                    handlePasswordChanged={this.handlePasswordChanged} >
                </PasswordPresentational>
                <LoginButtonsPresentational 
                    handleLoginCancel={this.handleLoginCancel} 
                    handleLogin={this.handleLogin} >
                </LoginButtonsPresentational>
                <LoginMessagesPresentational isCorrect={this.state.isCorrect} >
                </LoginMessagesPresentational>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        saveLoggedUser: (username) => {dispatch(UserActions.SaveLoggedUser(username))}
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer);
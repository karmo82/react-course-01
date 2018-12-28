import React, { Component } from 'react';
import {connect} from 'react-redux';
class LoggedUserContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
        console.log(nextProps);
        this.setState({
            username: nextProps.username
        });
    }   

    render() {
        return (
            <div>
                <label>{this.state.username}</label>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps)(LoggedUserContainer);
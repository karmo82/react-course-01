import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as PlaceActions from '../actions/PlaceActions';

class PlacesEditContainer extends Component {

    
    componentDidMount() {
        this.props.getSingle(this.props.match.params.id);
    }
    
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            descrizione: ''
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            nome: newProps.entity.nome,
            descrizione: newProps.entity.descrizione
        });
    }

    render() {
        
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Edit Place</h1>
                    </div>
                </div>
                <div>
                    {
                        this.props.entity !== null ? 
                            <div>
                                                          </div> 
                        : <div>in caricamento</div>
                    }
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        entity: state.places.entity
    }
}

function mapDispatchToProps(dispatch){
    return {
        getSingle: (id) => { dispatch(PlaceActions.GetSinglePlace(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesEditContainer);
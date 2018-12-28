import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as PlaceActions from '../actions/PlaceActions';
import {NavLink} from 'react-router-dom';

class PlacesIndexContainer extends Component {

    /// evento scatenato DOPO il caricamento del componente
    componentDidMount() {
        this.props.getAllPlaces();
    }    

    render() {
        console.log("PlacesIndexContainer");
        console.log(this.props.list);
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Places</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead className="thead-dark">
                                <tr>
                                    <th>
                                        Nome
                                    </th>
                                    <th>
                                        Descrizione
                                    </th>
                                    <th>
                                        Coordinata x
                                    </th>
                                    <th></th>
                                </tr>
                                    
                                </thead>
                                <tbody>
                                    {   
                                        this.props.list.map( (place, i) =>  
                                        <tr key={i} >
                                            <td>{place.nome}</td>
                                            <td>{place.descrizione}</td>
                                            <td>{place.prezzo}</td>
                                            <td>
                                            <NavLink to={"/places/" + place.id } >
                                                Edit
                                            </NavLink>

                                            </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        list: state.places.list
    }
}

function mapDispatchToProps(dispatch){
    return {
        getAllPlaces: () => { dispatch(PlaceActions.GetPlaces()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesIndexContainer);
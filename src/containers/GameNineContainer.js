import React, { Component } from 'react';
import StarsPresentational from '../presentationals/StarsPresentational';
import ButtonsPresentational from '../presentationals/ButtonsPresentational';
import SelectedNumbersPresentational from '../presentationals/SelectedNumbersPresentational';
import AvailableNumbersPresentational from '../presentationals/AvailableNumbersPresentational';
import MessagesPresentational from '../presentationals/MessagesPresentational';
import * as _ from 'lodash';

class GameNineContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            availableNumbers: _.range(1, 10),
            stars:  _.range(1, _.random(10)),
            selectedNumbers: [],
            isCorrect: null
        };
    }

    handleSelectedNumber = (number) => {
        this.setState({
            selectedNumbers: this.state.selectedNumbers.concat(number)
        });
    }

    handleResetClick = () => {
        this.setState(
            {
                availableNumbers: _.range(1, 10),
                stars:  _.range(1, _.random(10)),
                selectedNumbers: [],
                isCorrect: null
            }
        );
    }

    handleRemoveSelected= (number) => {

        this.setState({
            selectedNumbers: this.state.selectedNumbers.filter( 
                function (value){
                    return value !== number
                }
            )
        });
    }

    handleCheckClick = () => {
        if(this.state.stars.length === _.sum(this.state.selectedNumbers)){
            console.log("è corretto!");
            this.setState({
                isCorrect: true
            });
        }
        else{
            console.log("sbagliato!");
            this.setState({
                isCorrect: false
            });
        }        
    }

    render() {

        // const style = this.state.isCorrect === null ? {} :  {display: 'none'}

        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>Game Nine!!!</h1>
                </div>
                
                <div className="row">
                    <div className="col-5">
                        <StarsPresentational stars={this.state.stars} ></StarsPresentational>
                    </div>
                    <div className="col-2 text-center">
                        <ButtonsPresentational 
                        handleCheckClick={this.handleCheckClick}
                        handleResetClick={this.handleResetClick} ></ButtonsPresentational>
                    </div>
                    <div className="col-5">
                        <SelectedNumbersPresentational 
                        handleRemoveSelected={this.handleRemoveSelected}
                        handleDeselectNumber={this.handleDeselectNumber}
                            selectedNumbers={this.state.selectedNumbers} >
                        </SelectedNumbersPresentational>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <AvailableNumbersPresentational 
                            handleSelectedNumber={this.handleSelectedNumber}  
                            selectedNumbers={this.state.selectedNumbers}
                            availableNumbers={this.state.availableNumbers} >
                        </AvailableNumbersPresentational>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 text-center" >
                        <MessagesPresentational isCorrect={this.state.isCorrect} ></MessagesPresentational>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameNineContainer;
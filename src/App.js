import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import routes from './routes';
import HeaderPresentational from './presentationals/menu/HeaderPresentational';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <HeaderPresentational></HeaderPresentational>
          <div className="container">
          {
            routes.map( (x, i) => <Route exact key={i} path={x.path} component={x.component} ></Route> )
          }              
        </div>
      </div>   
      </BrowserRouter>
    );
  }
}

export default App;

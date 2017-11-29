import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
//import './fonts/font-awesome.css';
import { getInitialData } from './Actions/actions';
import SearchLocation from './Containers/searchLocationContainer.jsx';
import CurrentWheather from './Containers/currentWeatherCnt.jsx';
import Forecast from './Containers/forecastCnt.jsx';
import Forecast16 from './Containers/forecast16Cnt.jsx';
import Map from './Containers/mapCnt.jsx';
import News from './Containers/newsCnt'

//import ItTourMain from './Components/itTourMain.jsx';
//import ItTourMinimalPrices from './Components/itTourMinimalPrices.jsx';
//import { Row, Col, Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
// api news 0ba06516a35b4e57a43ee92c9a4b229c
class App extends Component {

  render() {
    let city = this.props.storeState.city
    return (
      <div className="App">
        <div className="App-header">
          <h3>{city.isCorrect ? city.name : 'Incorrect location'} </h3>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='weatherNewsContainer'>
          <div className='weatherContainer'>
            <HashRouter>
              <Route
                path=""
                exact
                render={(props) => <SearchLocation {...props} />} />
            </HashRouter>
            {city ?
            <div>
              <div className='cw-map-container'>
                <CurrentWheather />
                <div className='mapContainer'>
                  <Map />
                </div>
              </div>
              <Forecast />
              <Forecast16 />
            </div>
            : 'Updating location...'}        
           </div>
          <div className='newsContainer'>
           <News/>
            </div>       
        </div>  
      </div>
    );
  }
}

export default connect(
  state => ({
    storeState: state
  }),
  dispatch => ({
    fetchInitialData: () => dispatch(getInitialData())
  })
)(App)


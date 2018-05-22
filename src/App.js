import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';

import { getInitialData } from './Actions/actions';
import { setMobView } from './Actions/actions';
import SearchLocation from './Containers/searchLocationContainer.jsx';
import CurrentWheather from './Containers/currentWeatherCnt.jsx';
import Forecast from './Containers/forecastCnt.jsx';
import Forecast16 from './Containers/forecast16Cnt.jsx';
import Map from './Containers/mapCnt.jsx';
import News from './Containers/newsCnt'

class App extends Component {
  state = {
    color: 'red'
  }

  componentWillMount() {
    let width = document.documentElement.clientWidth;
    if (width <= 960) this.props.setMob();
  }

  st = { color: this.state.color }

  render() {    
    let city = this.props.storeState.city;    
    return (
      <div className="App">
        <div className="App-header">
          <h3>{city.isCorrect ? city.name : 'Incorrect location'} </h3>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='searchLocation'>
          <HashRouter>
            <Route
              path=""
              exact
              render={(props) => <SearchLocation {...props} />} />
          </HashRouter>
        </div>
        <div className='weatherNewsContainer'>
          <div className='weatherContainer'>

            {city ?
              <div>

                <div className='cw-map-container'>
                  <CurrentWheather />
                  <div className='mapContainer'>
                    <Map className='mapContainer' />
                  </div>
                </div>
                <Forecast />
                <Forecast16 />
                {this.props.storeState.mobView ? <Map /> : null}
              </div>
              : 'Updating location...'}
          </div>
          <div className='newsContainer'>
            <News />
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
    fetchInitialData: () => dispatch(getInitialData()),
    setMob: () => dispatch(setMobView())
  })
)(App)


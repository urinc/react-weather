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

//import './fonts/font-awesome.css';
//import ItTourMain from './Components/itTourMain.jsx';
//import ItTourMinimalPrices from './Components/itTourMinimalPrices.jsx';
//import { Row, Col, Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
// api news 0ba06516a35b4e57a43ee92c9a4b229c
class App extends Component {
  state = {
    expand: false
  }
   
  toggleExpand= ()=> this.setState({expand: !this.state.expand})

  componentWillMount() {
    let width = document.documentElement.clientWidth;
    if (width <= 960) this.props.setMob();
  }


  render() {
    let st = 'square';
    let city = this.props.storeState.city;
    let style = { display: 'none' };
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

                {this.props.storeState.mobView ? <Map /> : null}
                <Forecast />
                <Forecast16 />
              </div>
              : 'Updating location...'}
          </div>
          <div className='newsContainer'>
            <News />
          </div>
        </div>

        <button
           onClick={this.toggleExpand}
        > Create

       </button>

            {this.state.expand? <div className='expan'>DIV</div> : null   }

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


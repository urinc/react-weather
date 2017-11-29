import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Forecast } from './../Components/Forecast/Forecast.jsx';

class ForecastCnt extends Component {


    state = {
        day: 0
    };


    setActiveDay = ind => this.setState({ day: ind });
    
    render() {      
        let forecast = this.props.storeState.forecast5Day;
        if (!forecast.length) return null;
        return (
            <div>
                {
                    <Forecast                       
                        fiveDays={this.state.fiveDays}
                        forecast={forecast}
                        activeDay={this.state.day}
                        setActiveDay={this.setActiveDay}
                    />
                }
            </div >
        )
    }
}
export default connect(
    state => ({
        storeState: state
    }),
    //dispatch => ({fetchInitialData: () => dispatch(addInitialData())    })
)(ForecastCnt)

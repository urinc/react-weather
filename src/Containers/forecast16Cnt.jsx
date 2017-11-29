import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Forecast16 } from './../Components/Forecast16/forecast16.jsx';

class Forecast16Cnt extends Component {

    state = {
        day: null
    };

    setActiveDay = ind =>{      
        this.setState({ day: ind })};

    render() {
        let forecast = this.props.storeState.forecast16Day;
        if (!forecast.length) return null;
        return (
            <div>
                <Forecast16
                    forecast={forecast}
                    activeDay={this.state.day}
                    setActiveDay={this.setActiveDay}
                />
            </div >
        )
    }
}
export default connect(
    state => ({
        storeState: state
    }),
    //dispatch => ({fetchInitialData: () => dispatch(addInitialData())    })
)(Forecast16Cnt)

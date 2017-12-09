import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Forecast } from './../Components/Forecast/Forecast.jsx';

class ForecastCnt extends Component {
    state = {
        day: 0,
        expand: true
    };
    setActiveDay = ind => this.setState({ day: ind });
    toggleExpand = ()=>  this.setState({ expand: !this.state.expand })
  
    componentWillMount(){
        this.setState({ expand: !this.props.storeState.mobView })
        //console.log(this.props.storeState)
    }

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
                        mobView={this.props.storeState.mobView}
                        expandHandler={this.toggleExpand}
                        expand={this.state.expand}
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

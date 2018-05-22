import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Forecast16 } from './../Components/Forecast16/forecast16.jsx';
import { get16DayForecats } from './../Actions/actions'

class Forecast16Cnt extends Component {

    state = {
        day: null,
        expand: false
    };

    setActiveDay = ind =>this.setState({ day: ind });
    toggleExpand = ()=> this.setState({ expand: !this.state.expand });


    componentWillReceiveProps(nextProps) {
        if (this.props.storeState.city.name!==nextProps.storeState.city.name) {
         
          this.props.get16DayForecats(nextProps.storeState.city.name)
         }
     
    }
 


    render() {
        let forecast = this.props.storeState.forecast16Day;
        if (!forecast.length) return null;
        return (
            <div>
                <Forecast16
                    forecast={forecast}
                    activeDay={this.state.day}
                    setActiveDay={this.setActiveDay}
                    expandHandler={this.toggleExpand}
                    expand={this.state.expand}
                    mobView={this.props.storeState.mobView}
                />
            </div >
        )
    }
}
export default connect(
    state => ({
        storeState: state
    }),
    dispatch => ({
        get16DayForecats: (city) => dispatch(get16DayForecats(city))   
     })
)(Forecast16Cnt)

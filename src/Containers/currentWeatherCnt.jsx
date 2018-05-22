import React, { Component } from "react";
import { connect } from "react-redux";
import { CurrentWheather } from "./../Components/CurrentWeather/currentWeather.jsx";
import { getCurrConditions } from "./../Actions/actions";
class CurrentWeatherCnt extends Component {
  convertTime = d => {
    let date = new Date(d * 1000);
    let hours = date.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes;
  };

  capFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);
  iconFromWeatherMap = i => `http://openweathermap.org/img/w/${i}.png`;

  componentWillReceiveProps(nextProps) {
    if (this.props.storeState.city.name !== nextProps.storeState.city.name) {
      this.props.getCurrConditions(nextProps.storeState.city.name);
    }
  }

  render() {
    if (!this.props.storeState.currentConditions.base) return null;
    const weather = this.props.storeState.currentConditions;
    const { temp, humidity, pressure, temp_max, temp_min } = weather.main;
    const { sunrise, sunset, country } = weather.sys;
    const windSpeed = weather.wind.speed;
    const deg = weather.wind.deg;
    const city = weather.name;
    const respTime = weather.dt;
    const coord = weather.coord;
    const visibility = weather.visibility;
    const clouds = weather.clouds.all;
    const description = this.capFirstLetter(weather.weather[0].description);
    const icon = this.iconFromWeatherMap(weather.weather[0].icon);

    return (
      <CurrentWheather
        temp={temp}
        min={temp_min}
        max={temp_max}
        clouds={clouds}
        icon={icon}
        iconCond={weather.tag}
        humidity={humidity}
        pressure={pressure}
        visibility={visibility}
        sunset={this.convertTime(sunset)}
        sunrise={this.convertTime(sunrise)}
        respTime={this.convertTime(respTime)}
        windSpeed={windSpeed}
        deg={deg}
        description={description}
        city={city}
        country={country}
        coord={coord}
      />
    );
  }
}

export default connect(
  state => ({ storeState: state }),
  dispatch => ({
    getCurrConditions: city => dispatch(getCurrConditions(city))
  })
)(CurrentWeatherCnt);

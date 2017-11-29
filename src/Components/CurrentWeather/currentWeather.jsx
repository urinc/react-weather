import React from 'react';
import './currentWeather.css';
import './../../fonts/weather-icons.css';



export const CurrentWheather = (props) => {
    const { city, temp, clouds, icon, humidity,
        visibility, respTime, deg, sunrise, sunset,
        windSpeed, pressure, description, country,
        min, max, iconCond
    } = props


    return (

        <div className='currentWeatherContainer' >
            <div className='header'> Updated on {respTime} for {city}.{country}   <img src={icon} alt="weather icon" />
            </div>
            <div className='descr'>{description}
            </div>
            <div className='iconCnt'>
                <div className='iconCond'>
                    <i className={iconCond} />
                    <span className='spanCond'> {Math.round(temp)}°C </span>
                </div>
                <i className='wi wi-thermometer' />
                <div className='minMax'>
                    Feels like:  {Math.round(temp - 2)} °C
                <div>
                        Min temp:   {min}  °C
                    </div>
                    <div>
                        Max temp:   {max} °C
                    </div>
                </div>
            </div>


            <div className='paramsWrapper'>

                <div>
                    <i className='wi wi-humidity' />
                    <div className='paramName'> Humidity</div>
                    <div className='paramValue'>  {humidity} % </div>
                </div>
                <div>
                    <i className='wi wi-barometer' />
                    <div className='paramName'> Pressure</div>
                    <div className='paramValue'>  {pressure} pa </div>
                </div>
                <div>
                    <i className='wi wi-strong-wind' />
                    <div className='paramName'>Wind speed</div>
                    <div className='paramValue'>  {windSpeed} ms </div>
                </div>
                <div>
                    <i className='wi wi-small-craft-advisory' />
                    <div className='paramName'>Wind dir</div>
                    <div className='paramValue'>  {deg}°  </div>
                </div>
                <div>
                    <i className='wi wi-cloud' />
                    <div className='paramName'> Clouds</div>
                    <div className='paramValue'>  {clouds}%</div>
                </div>

                <div>
                    <i className='wi wi-sunrise' />
                    <div className='paramName'> Sunrise</div>
                    <div className='paramValue'>  {sunrise}</div>
                </div>
                <div>
                    <i className='wi wi-sunset' />
                    <div className='paramName'> Sunset</div>
                    <div className='paramValue'>  {sunset}</div>
                </div>

                <div>
                    <i className='wi wi-alien' />
                    <div className='paramName'> Visibility</div>
                    <div className='paramValue'>  {visibility > 999 ? visibility / 1000 + ' km' : visibility + ' m'} </div>
                </div>




            </div>



































        </div>)
}
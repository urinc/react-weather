import React from 'react';
import './forecast.css';
import './../../fonts/font-awesome.css';

export const Forecast = (props) => {
    let { forecast, activeDay, setActiveDay, mobView, expandHandler, expand } = props;
    let activeColor = { color: 'rgb(122, 170, 224)' }
    return (
        <div className='forecastContainer'>
            <div 
            onClick={expandHandler}
            className='name'>
                5 DAY FORECAsT
                {mobView ?
                    <span className='expander'
                        onClick={expandHandler}
                    >
                        {expand ?
                            <i className="fa fa-caret-square-o-up" aria-hidden="true" /> :
                            <i className="fa fa-caret-square-o-down" aria-hidden="true" />
                        }
                    </span>
                    : null}
            </div>
            {expand ?
                <div className='expandable'>
                    <div className='header'>
                        {forecast.map((day, ind) => (
                            <div
                                className='day'
                                key={ind}
                                onClick={() => setActiveDay(ind)}
                                style={(ind === activeDay) ? activeColor : null}
                            >
                                <div>
                                    {mobView ? day[0].dtDayName.slice(0, 3) : day[0].dtDayName}
                                </div>
                                <div>
                                    {day[0].dtDayNum}

                                </div>
                                <div>
                                    {mobView ? day[0].dtMonth.slice(0, 3) : day[0].dtMonth}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='forecastBody'>
                        <div className='titles'>
                            <i className="wi wi-time-3" />
                            <span> Time</span>
                            <div />
                            <i className="wi wi-thermometer-exterior" />
                            <span> Temp</span>
                            <div />
                            <i className="wi wi-humidity" />
                            <span> Humidity</span>
                            <div />
                            <i className="wi wi-barometer" />
                            <span> Pressure</span>
                            <div />
                            <i className="wi wi-strong-wind" />
                            <span> Wind speed</span>
                            <div />
                            <i className="wi wi-small-craft-advisory" />
                            <span> Wind dir</span>
                            <div />
                            <i className="wi wi-cloud" />
                            <span> Clouds</span>
                            <div />

                            <span>Description</span>

                        </div>
                        {
                            forecast[activeDay].map((elem, index) =>
                                <div key={index} className='hour'>
                                    <div>{elem.dt_txt.substring(11, 16)} </div>
                                    <div>{elem.main.temp}°</div>
                                    <div>{elem.main.humidity}%</div>
                                    <div>{Math.round(elem.main.pressure)}<span> pa</span> </div>
                                    <div>{Math.round(elem.wind.speed)} ms</div>
                                    <div>{Math.round(elem.wind.deg)}°</div>
                                    <i className={elem.tag} />
                                    <div>{elem.weather[0].description.split(' ')[0]}</div>
                                    <div>{elem.weather[0].description.split(' ')[1]}</div>


                                </div>)}
                    </div>
                </div>



                : null}




        </div>)

}
import React from 'react';
import './forecast.css';
//import './../../fonts/font-awesome.css';

export const Forecast = (props) => {
    let { forecast, activeDay, setActiveDay } = props;
    let activeColor = { color: 'rgb(122, 170, 224)' }
    return <div>
      
        <div className='forecastContainer'>
        <div className='name'>5 DAY FORECAsT</div>     
            <div className='header'>
                {forecast.map((day, ind) => (
                    <div
                        className='day'
                        key={ind}
                        onClick={() => setActiveDay(ind)}
                        style={(ind === activeDay) ? activeColor : null}
                    >
                        <div>
                            {day[0].dtDayName}
                        </div>
                        <div>
                            {day[0].dtDayNum}
                        </div>
                        <div>
                            {day[0].dtMonth}
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
                            <div>{Math.round(elem.main.pressure)}pa </div>
                            <div>{Math.round(elem.wind.speed)} m/s</div>
                            <div>{Math.round(elem.wind.deg)}°</div>
                            <i className={elem.tag} />
                            <div>{elem.weather[0].description.split(' ')[0]}</div>
                            <div>{elem.weather[0].description.split(' ')[1]}</div>


                        </div>)}
            </div>
        </div>





        {/* 



        <Tabs className='tabs'>
            {
                props.fiveDayForecast.map((day, index) =>
                    <Tab
                        key={index}
                        headerStyle={headerStyle}
                        activeHeaderStyle={activeHeaderStyle}
                        label={
                            <div className='sslabel5Days'>
                                <div className='nameDate'>
                                    {day[0].dtDayName}
                                </div>
                                <div>
                                    {day[0].dtDayNum}
                                </div>
                                <div className='monthName'>
                                    {day[0].dtMonth}
                                </div>
                            </div>
                        }
                    >

                        <div className='elemContainer'>
                            <div className='elem'>
                                <div>Time:</div>
                                <div>Temperature: </div>
                                <div>Humidity: </div>
                                <div>Pressure</div>
                                <div>Wind speed</div>
                                <div>Wind direction</div>
                                <div>Clouds</div>
                            </div>
                            {
                                day.map((elem, index) =>
                                    <div key={index} className='elem'>
                                        <div>{elem.dt_txt.substring(11, 16)} </div>
                                        <div>{elem.main.temp}°</div>
                                        <div>{elem.main.humidity}%</div>
                                        <div>{Math.round(elem.main.pressure)}pa </div>
                                        <div>{Math.round(elem.wind.speed)} m/s</div>
                                        <div>{Math.round(elem.wind.deg)}°</div>
                                        <img src={`http://openweathermap.org/img/w/${elem.weather[0].icon}.png`} alt="cloudes" />
                                        <div>{elem.weather[0].description.split(' ')[0]}</div>


                                    </div>)
                            }
                        </div>
                    </Tab>)
            }
        </Tabs> */}
    </div>

}
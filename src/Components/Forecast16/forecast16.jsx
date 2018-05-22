import React from "react";
import "./forecast16.css";
//import './../../fonts/font-awesome.css';

export const Forecast16 = props => {
  let {
    forecast,
    activeDay,
    setActiveDay,
    expand,
    expandHandler,
    mobView
  } = props;

  let activeColor = { color: "rgb(122, 170, 224)" };

  return (
    <div className="forecastContainer16">
      <div>
        <div onClick={expandHandler} className="name">
          <span>16 DAY FOREACAsT {"  "}</span>

          {mobView && !expand ? (
            <i className="fa fa-caret-square-o-down" aria-hidden="true" />
          ) : null}
          {mobView && expand ? (
            <i className="fa fa-caret-square-o-up" aria-hidden="true" />
          ) : null}

          {!mobView && (activeDay || activeDay === 0) ? (
            <span className="description">
              Description: " {forecast[activeDay].weather[0].description} ".
              Temp Min: {forecast[activeDay].temp.min} . Max:{" "}
              {forecast[activeDay].temp.max}
            </span>
          ) : null}
        </div>
      </div>
      {!mobView ? (
        <div className="fxBox">
          <div>
            <div className="month">
              <div>.</div>
              <div>.</div>
              <div>.</div>
            </div>
            <div> Morn </div>
            <div> Day </div>
            <div> Night</div>
            <div> Rain </div>
            <div> Cloud</div>
            <div> Speed</div>
          </div>
          {forecast.map((d, i) => (
            <div
              key={i}
              style={i === activeDay ? activeColor : null}
              onClick={() => setActiveDay(i)}
            >
              <div className="month">
                <div> {d.dtDayName.substring(0, 3)}</div>
                <div> {d.dtDayNum} </div>
                <div> {d.dtMonth.substring(0, 3)} </div>
              </div>
              <div>{d.temp.morn} </div>
              <div>{d.temp.day} </div>
              <div>{d.temp.night} </div>
              <div> {d.rain || 0}</div>
              <div> {d.clouds} </div>
              <div> {d.speed}</div>
              <i className={d.tag} />
            </div>
          ))}
        </div>
      ) : expand ? (
        <div className="expand">
          {activeDay || activeDay === 0 ? (
            <div className="description">
              Description: " {forecast[activeDay].weather[0].description} ".
              Temp Min: {forecast[activeDay].temp.min} . Max:{" "}
              {forecast[activeDay].temp.max}
            </div>
          ) : null}
          <br />
          <div className="forecastMobContainerFB">
            <div>Date</div>
            <div>Morn</div>
            <div>Day</div>
            <div>Night</div>
            <div>Rain</div>
            <div>Cloud</div>
            <div>Speed</div>
            <div>Cond</div>
          </div>
          {forecast.map((d, i) => (
            <div
              className="forecastMobContainerFB"
              key={i}
              style={i === activeDay ? activeColor : null}
              onClick={() => setActiveDay(i)}
            >
              <div> {d.dtDayNum} </div>
              <div>{Math.round(d.temp.morn)}° </div>
              <div>{Math.round(d.temp.day)}°</div>
              <div>{Math.round(d.temp.night)}°</div>
              <div> {Math.round(d.rain) || 0}%</div>
              <div> {d.clouds}% </div>
              <div> {Math.round(d.speed)}ms</div>
              <i className={d.tag} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

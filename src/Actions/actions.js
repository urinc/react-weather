import { addIconTag, separateByDay, addStringDate } from "./../Utills/utills";

export const setMobView = () => {
  return dispatch => {
    let view = {
      type: "SET_MOBVIEW",
      payload: true
    };
    dispatch(view);
  };
};
export const getInitialData = () => {
  return dispatch => {
    getCityByIp()
      .then(city => {
        dispatch(getCityByCoord(city.latitude, city.longitude));
      })
      .catch(err => console.log("Fetch Error :-S", err));
  };
};
export const getDataByCity = city => {
  return dispatch => {
    dispatch(setCity(city));
  };
};
export const get5DayForecats = city => {
  return dispatch => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5310e241a1a7ada2ef1e5219f9f41821&units=metric`
    )
      .then(res => res.json())
      .then(weather => {
        if (weather.cod === "200") {
          dispatch(set5DayForecast(weather));
        }
      })
      .catch(err => console.log(err));
  };
};
export const get16DayForecats = city => {
  return dispatch => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=5310e241a1a7ada2ef1e5219f9f41821&units=metric&cnt=16`
    )
      .then(res => res.json())
      .then(weather => {
        if (weather.cod === "200") {
          dispatch(set16DayForecast(weather));
        }
      });
  };
};
export const getCurrConditions = city => {
  return dispatch => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5310e241a1a7ada2ef1e5219f9f41821&units=metric`
    )
      .then(res => res.json())
      .then(weather => {
        if (weather.cod === 200) {
          dispatch(setCurrentConditions(weather));
        }
        if (weather.cod !== 200) dispatch(setIncorrectCity());
      });
  };
};
export const getCityByCoord = (lat, lon) => {
  return dispatch => {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5310e241a1a7ada2ef1e5219f9f41821&units=metric`;
    fetch(url)
      .then(res => res.json())
      .then(city => {
        console.log(city);
        dispatch(setCity(city.name));
      });
  };
};
const getCityByIp = () => {
  return fetch("http://icanhazip.com/")
    .then(res => res.text())
    .then(ip => fetch(`https://ipapi.co/${ip.slice(0, -1)}/json/`))
    .then(res => res.json());
};
export const getNews = city => {
   return dispatch => {
    let apiKey = `0ba06516a35b4e57a43ee92c9a4b229c`;
    let d = new Date().toISOString().substring(0, 10);
    let url = `https://newsapi.org/v2/everything?q=${city}&from=${d}&to=${d}&sortBy=popularity&apiKey=${apiKey}`;
   // let urlTop = `https://newsapi.org/v2/top-headlines?q=${city}&apiKey=${apiKey}`;

    let url2 = `https://newsapi.org/v2/everything?q=weather%20max%20temp&sortBy=publishedAt&apiKey=${apiKey}`;
    fetch(url)
      .then(res => res.json())
      .then(news => {      
        if (news.articles.length === 0) {
          fetch(url2)
            .then(res => res.json())
            .then(news => {             
              dispatch(setNews(news.articles));           
            });
        }
        if (news.articles.length > 0) {         
          dispatch(setNews(news.articles));          
        }
      });
  };
};
const setCurrentConditions = weather => {
  return {
    type: "ADD_CURRENT_CONDITIONS",
    currentConditions: addIconTag(weather)
  };
};
const setNews = news => {
  return {
    type: "ADD_NEWS",
    news
  };
};
const set5DayForecast = forecast => {
  return {
    type: "ADD_5DAY_FORECAST",
    forecast: separateByDay(forecast)
  };
};
const set16DayForecast = forecast => {
  return {
    type: "ADD_16DAY_FORECAST",
    forecast: forecast.list.map(el => addStringDate(addIconTag(el)))
  };
};
const setIncorrectCity = () => {
  return {
    type: "INCORRECT_CITY"
  };
};
const setCity = city => { 
  return {
    type: "SET_CITY",
    isNew: true,
    city
  };
};

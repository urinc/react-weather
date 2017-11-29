export const getInitialData = () => {
    return (dispatch) => {
        getCityByIp().then(city => {
            dispatch(getDataByCity(city));
        }).catch(err => console.log('Fetch Error :-S', err));
    }
}
export const getDataByCity = (city) => {

    return (dispatch) => {
        dispatch(setCity(city));
        getForecasts(city, dispatch);
    }
}
export const getForecasts = (city, dispatch) => {
    getCurrConditions(city, dispatch);
    get5DayForecats(city, dispatch);
    get16DayForecats(city, dispatch);
}
export const getCityByCoord = (lat, lon) => {
    return dispatch => {
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5310e241a1a7ada2ef1e5219f9f41821&units=metric`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch(setCity(json.name));
                getForecasts(json.name, dispatch);
            })
    }
}
const getCurrConditions = (city, dispatch) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5310e241a1a7ada2ef1e5219f9f41821&units=metric`)
        .then(res => res.json())
        .then(weather => {
            if (weather.cod === 200) {
                dispatch(setCityUpdated())
                dispatch(setCurrentConditions(weather))
            };
            if (weather.cod !== 200)
                dispatch(setIncorrectCity())
        });
}
const get5DayForecats = (city, dispatch) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5310e241a1a7ada2ef1e5219f9f41821&units=metric`)
        .then(res => res.json())
        .then(weather => {
            if (weather.cod === "200") {
                dispatch(setCityUpdated());
                dispatch(set5DayForecast(weather));              
            }
        }
        );
}
const get16DayForecats = (city, dispatch) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=5310e241a1a7ada2ef1e5219f9f41821&units=metric&cnt=16`)
        .then(res => res.json())
        .then(weather => {
            if (weather.cod === "200") {                
                dispatch(setCityUpdated());
                dispatch(set16DayForecast(weather)); 
            }            
        }
        )
}
const getCityByIp = () => {
    return fetch('http://icanhazip.com/')
        .then(res => res.text())
        .then(ip => fetch(`https://ipapi.co/${ip.slice(0, -1)}/json/`))
        .then(res => res.json())
        .then(location => location.region)
}
export const  getNews = (city) => {
    return dispatch => {
        let apiKey = `0ba06516a35b4e57a43ee92c9a4b229c`
        let d = new Date().toISOString().substring(0, 10);    
        let url=`https://newsapi.org/v2/everything?q=${city}&from=${d}&to=${d}&sortBy=popularity&apiKey=${apiKey}`
        let urlTop=`https://newsapi.org/v2/top-headlines?q=${city}&apiKey=${apiKey}`

        let url2=`https://newsapi.org/v2/everything?q=weather%20max%20temp&sortBy=publishedAt&apiKey=${apiKey}`
        fetch(url)
        .then(res => res.json())
        .then(news => {
            if ( news.articles.length===0){
                fetch(url2)
                .then(res => res.json())
                 .then(news =>{
                     dispatch(setCityUpdated());
                     dispatch(setNews(news.articles));
                     dispatch(setCityUpdated());
                  })                 
            }            
            if ( news.articles.length>0){                   
                dispatch(setCityUpdated());
                 dispatch(setNews(news.articles));
                dispatch(setCityUpdated());
            }               
          }        
        )
    }
}




const setCityUpdated = () => {
    return {
        type: 'UPDATED_CITY'
    }
}
const setCurrentConditions = weather => {
    return {
        type: 'ADD_CURRENT_CONDITIONS',
        currentConditions: addIconTag(weather)
    }
}

const setNews = news => {
    return {
        type: 'ADD_NEWS',
        news 
    }
}
const set5DayForecast = forecast => {
    return {
        type: 'ADD_5DAY_FORECAST',
        forecast: separateByDay(forecast)
    }
}
const set16DayForecast = forecast => {
    return {
        type: 'ADD_16DAY_FORECAST',
        forecast: forecast.list.map(el => addStringDate(addIconTag(el)))
    }
}
const setIncorrectCity = () => {
    return {
        type: 'INCORRECT_CITY'
    }
}
const setCity = city => {
    return {
        type: 'SET_CITY',
        isNew: true,
        city
    }
}
const separateByDay = (fc) => {
    let propByDate = {};
    fc.list.forEach(el => {
        el = addStringDate(el);
        el = addIconTag(el);
        let date = el.dt_txt.split(' ')[0];
        if (!propByDate[date]) propByDate[date] = [];
        propByDate[date].push(el);
    })
    return Object.values(propByDate);
}
const addStringDate = elem => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let date = new Date(elem.dt * 1000);
    if (!elem.dt_txt) elem.dt_txt = date.toJSON();
    elem.dtMonth = months[date.getMonth()];
    elem.dtDayName = days[date.getDay()];
    elem.dtDayNum = date.getDate();
    return elem
}
const addIconTag = elem => {
    let i = elem.weather[0].icon
    if (i === '01d') {
        elem.tag = "wi wi-day-sunny";
        return elem
    }
    if (i === '02d') {
        elem.tag = "wi wi-day-cloudy";
        return elem
    }
    if (i === '03d') {
        elem.tag = "wi wi-day-cloudy-high";
        return elem
    }
    if (i === '04d') {
        elem.tag = "wi wi-cloudy";
        return elem
    }
    if (i === '09d') {
        elem.tag = "wi wi-day-showers";
        return elem
    }
    if (i === '10d') {
        elem.tag = "wi wi-day-rain";
        return elem
    }
    if (i === '11d') {
        elem.tag = "wi wi-day-thunderstorm";
        return elem
    }
    if (i === '13d') {
        elem.tag = "wi wi-day-snow";
        return elem
    }
    if (i === '50d') {
        elem.tag = "wi wi-day-fog";
        return elem
    }
    if (i === '01n') {
        elem.tag = "wi wi-night-clear";
        return elem
    }
    if (i === '02n') {
        elem.tag = "wi wi-night-partly-cloudy";
        return elem
    }
    if (i === '03n') {
        elem.tag = "wi wi-night-cloudy";
        return elem
    }
    if (i === '04n') {
        elem.tag = "wi wi-night-cloudy-high";
        return elem
    }
    if (i === '09n') {
        elem.tag = "wi wi-night-showers";
        return elem
    }
    if (i === '10n') {
        elem.tag = "wi wi-night-rain";
        return elem
    }
    if (i === '11n') {
        elem.tag = "wi wi-night-snow-thunderstorm";
        return elem
    }
    if (i === '13n') {
        elem.tag = "wi wi-night-snow";
        return elem
    }

    if (i === '50n') {
        elem.tag = "wi wi-night-fog";
        return elem
    }
    return elem
}

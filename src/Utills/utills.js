export const addIconTag = elem => {
  let i = elem.weather[0].icon;
  if (i === "01d") {
    elem.tag = "wi wi-day-sunny";
    return elem;
  }
  if (i === "02d") {
    elem.tag = "wi wi-day-cloudy";
    return elem;
  }
  if (i === "03d") {
    elem.tag = "wi wi-day-cloudy-high";
    return elem;
  }
  if (i === "04d") {
    elem.tag = "wi wi-cloudy";
    return elem;
  }
  if (i === "09d") {
    elem.tag = "wi wi-day-showers";
    return elem;
  }
  if (i === "10d") {
    elem.tag = "wi wi-day-rain";
    return elem;
  }
  if (i === "11d") {
    elem.tag = "wi wi-day-thunderstorm";
    return elem;
  }
  if (i === "13d") {
    elem.tag = "wi wi-day-snow";
    return elem;
  }
  if (i === "50d") {
    elem.tag = "wi wi-day-fog";
    return elem;
  }
  if (i === "01n") {
    elem.tag = "wi wi-night-clear";
    return elem;
  }
  if (i === "02n") {
    elem.tag = "wi wi-night-partly-cloudy";
    return elem;
  }
  if (i === "03n") {
    elem.tag = "wi wi-night-cloudy";
    return elem;
  }
  if (i === "04n") {
    elem.tag = "wi wi-night-cloudy-high";
    return elem;
  }
  if (i === "09n") {
    elem.tag = "wi wi-night-showers";
    return elem;
  }
  if (i === "10n") {
    elem.tag = "wi wi-night-rain";
    return elem;
  }
  if (i === "11n") {
    elem.tag = "wi wi-night-snow-thunderstorm";
    return elem;
  }
  if (i === "13n") {
    elem.tag = "wi wi-night-snow";
    return elem;
  }

  if (i === "50n") {
    elem.tag = "wi wi-night-fog";
    return elem;
  }
  return elem;
};

export const separateByDay = fc => {
  let propByDate = {};
  fc.list.forEach(el => {
    el = addStringDate(el);
    el = addIconTag(el);
    let date = el.dt_txt.split(" ")[0];
    if (!propByDate[date]) propByDate[date] = [];
    propByDate[date].push(el);
  });
  return Object.values(propByDate);
};

export const addStringDate = elem => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let date = new Date(elem.dt * 1000);
  if (!elem.dt_txt) elem.dt_txt = date.toJSON();
  elem.dtMonth = months[date.getMonth()];
  elem.dtDayName = days[date.getDay()];
  elem.dtDayNum = date.getDate();
  elem.dtLocalHour = date.getHours();
  elem.dtLocalMinutes = date.getMinutes();
  return elem;
};

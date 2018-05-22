import { combineReducers } from "redux";

export const reducer = combineReducers({
  city,
  mobView,
  currentConditions,
  forecast5Day,
  forecast16Day,
  dayNews
});

function city(
  state = {
    name: null,
    isNew: false,
    isCorrect: true,
    latitude : null,
    longitude : null
  },
  action
) {
  switch (action.type) {
    case "SET_CITY":
      return {
        name: action.city,
        isCorrect: true,
        isNew: true
      };
    case "INCORRECT_CITY":
      return {
        ...state,
        isCorrect: false
      };
    case "UPDATED_CITY":
      return {
        ...state,
        isNew: false
      };
    default:
      return state;
  }
}
function mobView(state = false, action) {
  switch (action.type) {
    case "SET_MOBVIEW": {
      return action.payload;
    }
    default:
      return state;
  }
}
function currentConditions(state = {}, action) {
  switch (action.type) {
    case "ADD_CURRENT_CONDITIONS": {
      return action.currentConditions;
    }
    default:
      return state;
  }
}
function forecast5Day(state = [], action) {
  switch (action.type) {
    case "ADD_5DAY_FORECAST": {
      return action.forecast;
    }
    default:
      return state;
  }
}
function forecast16Day(state = [], action) {
  switch (action.type) {
    case "ADD_16DAY_FORECAST": {
      return action.forecast;
    }
    default:
      return state;
  }
}

function dayNews(state = [], action) {
  switch (action.type) {
    case "ADD_NEWS": {
      return action.news;
    }
    default:
      return state;
  }
}

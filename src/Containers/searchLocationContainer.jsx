import React, { Component } from "react";
import { connect } from "react-redux";
import CityList from "./cityList";
import "bootstrap/dist/css/bootstrap.css";
import { SearchLocation } from "./../Components/SearchLocation/searchLocation.jsx";
import { getDataByCity, getInitialData } from "./../Actions/actions";

class SearchLocationCnt extends Component {
  state = {
    city: "",
    searchFocus: false
  };

  componentDidMount() {
    let city = this.props.history.location.pathname.substring(1);
    city.length > 0
      ? this.props.getDataByCity(city)
      : this.props.getInitialData();
  }
  handleUserInput = e => {
    this.setState({ city: e.target.value });
  };
  handleLocationfromList = city =>{  
    this.setState({ city} );    
  }

  fetchData = () => {
    this.props.getDataByCity(this.state.city);
    this.props.history.push(`${this.state.city}`);
  };
  componentWillReceiveProps() {
    let city = this.props.history.location.pathname.substring(1);
    let { name, isCorrect, isNew } = this.props.store.city;
    if (name && isCorrect && isNew && city !== name) {
      this.props.history.push(name);
    }
  }

  listenerOn = e => {
    this.checkParent(e.target) ? true : this.listenerOff();
  };

  listenerOff = () => {
    this.setState({ searchFocus: false });
    document.removeEventListener("click", this.listenerOn);
  };

  clickHandler = e => {
    if (this.state.searchFocus === true) return;
    this.setState({ searchFocus: true });
    document.addEventListener("click", this.listenerOn);
  };

  checkParent(element) {
    let parent = element.parentElement;
    if (parent === null) return false;
    return element.getAttribute("id") === "searchLocation"
      ? true
      : this.checkParent(parent);
  }
  someS = 'hui'
  render() {
    return (
      <div id="searchLocation" onClick={this.clickHandler}>
        <SearchLocation
          value={this.state.city}
          handleUserInput={this.handleUserInput}
          submit={this.fetchData}
        />
        {this.state.searchFocus ? (
          <CityList
            handleLoc={this.handleLocationfromList}
            city={this.state.city}
          />
        ) : null}
      </div>
    );
  }
}
export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    getDataByCity: city => dispatch(getDataByCity(city)),
    getInitialData: () => dispatch(getInitialData())
  })
)(SearchLocationCnt);

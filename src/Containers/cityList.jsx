import React, { Component } from "react";

class CityList extends Component {
  state = {
    list: []
  };
  componentWillReceiveProps(nextProps) {
    this.fetchCityList(this.props.city);
  }

  style = {
    border: "solid 1px grey",
    backgroundColor: "white",
    opacity: "0.6",
    paddingLeft: "5px",
    width: "135px",
    cursor: "pointer",
    textAlign: "right"  };

  fetchCityList(part) {
    if (this.props.city.length <= 2) return;
    let url2 = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${part}`;
    fetch(url2)
      .then(resp => resp.json())
      .then(list =>  this.setState({ list: list.data }))
  }

  onclickHandler = e => {
    let loc = e.target.getAttribute("id");
  //  console.log(loc);
  // console.log(this.props);

  this.props.handleLoc(loc)
  }
  render() {
    return (
      <div style={this.style} onClick={this.onclickHandler}>
        {this.state.list.map((loc, index) => (
          <div key={index} id={`${loc.city},${loc.countryCode}`}>
            {loc.city} {loc.countryCode}
          </div>
        ))}
      </div>
    );
  }
}

export default CityList;

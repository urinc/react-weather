import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import { SearchLocation } from './../Components/SearchLocation/searchLocation.jsx';
import { getDataByCity, getInitialData } from './../Actions/actions';

class SearchLocationCnt extends Component {
    state = {
        city: ''
    }
    componentDidMount() {
        let city = this.props.history.location.pathname.substring(1);
        (city.length > 0) ?
            this.props.fetchDataByCity(city)
            : this.props.fetchInitialData();
    }
    handleUserInput = (e) => {
        this.setState({ city: e.target.value });
    }

    fetchData = () => {
        this.props.fetchDataByCity(this.state.city);
        this.props.history.push(`${this.state.city}`);
    }

    componentWillReceiveProps() {
        let city = this.props.history.location.pathname.substring(1);
        let { name, isCorrect, isNew } = this.props.store.city;
        if (name && isCorrect && isNew && (city !== name)) {
            this.props.history.push(name);
        }
    }
    render() {

        return (
            <div>
                <SearchLocation
                    value={this.state.city}
                    handleUserInput={this.handleUserInput}
                    submit={this.fetchData}
                />
            </div>
        )
    }
}
export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        fetchDataByCity: (city) => dispatch(getDataByCity(city)),
        fetchInitialData: () => dispatch(getInitialData())
    })
)(SearchLocationCnt)


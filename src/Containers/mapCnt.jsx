import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
import { getCityByCoord } from './../Actions/actions';
import { MapHeader } from './../Components/MapHeader/mapHeader.jsx'
export class MapCnt extends Component {

    map = 0;
    getCoord = () => {
        let lon = this.map.center.lng();
        let lat = this.map.center.lat()
        this.props.fetchCityByCoord(lat, lon)
    }
    style = {
        position: 'absolute',
        margin: '-25px 0px 0px 0px'
    }
    state = {
        expand: true
    }

    toggleHelper = () => {
        console.log(this.state.expand);
        this.setState({ expand: !this.state.expand })
    };
    componentWillMount() {
        this.setState({ expand: !this.props.storeState.mobView })
    }
    render() {
        let coord = this.props.storeState.currentConditions.coord;
        if (!coord) return null
        let center = {
            lat: coord.lat,
            lng: coord.lon
        }

        if (this.map) this.map.setCenter(center);


        return (
            <div>
                <MapHeader
                    expand={this.state.expand}
                    mobView={this.props.storeState.mobView}
                    expander={this.toggleHelper}
                />

                {this.state.expand ? <ReactGoogleMapLoader
                    params={{
                        key: "AIzaSyARSRrKGQPcohmmuw9ol8f0C_39JMw3EyU",
                        libraries: "places,geometry",
                    }}
                    render={googleMaps =>
                        googleMaps && (
                            <div style={{ height: "340px" }}>
                                <ReactGoogleMap
                                    googleMaps={googleMaps}
                                    center={center}
                                    zoom={12}
                                    onLoaded={(a, b) => this.map = b}
                                />
                                <button style={this.style} onClick={this.getCoord}>Get weather</button>
                            </div>
                        )}
                /> :
                    null}

            </div>
        )
    }
}
export default connect(
    state => ({ storeState: state }),
    dispatch => ({ fetchCityByCoord: (lat, lon) => dispatch(getCityByCoord(lat, lon)) })

)(MapCnt)


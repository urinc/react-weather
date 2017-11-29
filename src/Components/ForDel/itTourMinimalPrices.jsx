import React, { Component } from 'react';

class itTourMinimalPrices extends Component {

    tourStyle = {
        width: "600px"
    }
    componentDidMount() {
        this.itTourMinimalPrices();
    }


    itTourMinimalPrices() {
        let scr = "http://module.ittour.com.ua/showcase_search.jsx?id=5D5G63841O051929615135432&type=44&kind=50&width_class=53&num=1&row_count=7&no_jquery=1"
        let aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = scr;
        aScript.defer = true;
        document.body.appendChild(aScript);
        aScript.onload = () => { }
    }



    render() {
        return (
        <div>
            <div id='showcase_country_showcase_module' style={this.tourStyle}></div>
            <div id='showcase_module'></div>
        </div>)
    }


}


export default itTourMinimalPrices;
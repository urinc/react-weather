import React, { Component } from 'react';
//import { ProgressBar, Button } from 'react-bootstrap';
//import Script from 'react-load-script';
import ProbeChild from './probeChild'

import './probe.css'

class Probe extends Component {

    constructor(props) {
        super(props)
        this.counter = {
            prop: 1
        };

    }
    componentDidMount() {

    }

    itTourHotTours() {
        let scr = "https://www.ittour.com.ua/classes/handlers/ittour_external_modules/ittour_modules/js/tour_seach_form.js?i=20170915170833"
        let aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = scr;
        aScript.async = true;
        document.body.appendChild(aScript);
        aScript.onload = () => { }

    }


    render() {
        return (
            <div>
                <ProbeChild />
            </div>
        )
    }
}

export default Probe;
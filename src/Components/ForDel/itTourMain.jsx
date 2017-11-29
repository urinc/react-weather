import React, { Component } from 'react';


class ItTourMain extends Component {
    tourStyle = {
        width: "600px"
    }
    componentDidMount() {
       this.itTourModuleConnect();
      //  this.itTourModuleRefConnect()
    }




    itTourModuleConnect() {
        let src = `http://www.ittour.com.ua/tour_search.jsx?id=3D53299G2862028335N9854&ver=1&type=2970`;
        let aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = src;
        aScript.async = true;
        document.body.appendChild(aScript);
        aScript.onload = () => {
            window.load_css();
            document.getElementsByClassName('logo_ittour')[1].remove()
            document.getElementsByClassName('logo_ittour')[0].remove()

        };
    }

    itTourModuleRefConnect() {
        this.script.src = `http://www.ittour.com.ua/tour_search.jsx?id=3D53299G2862028335N9854&ver=1&type=2970`;
        this.script.onload = () => {
            console.log('loaded')
        };
    }

    itTourModuleRefCreate(){

    }


    render() {
        console.log('render')
        return (

            <div>
                <div id='tour_search_module' style={this.tourStyle} />
                {/* <script ref={script => this.script = script}> </script> */}
                 {/* <script                 
                src='http://www.ittour.com.ua/tour_search.jsx?id=3D53299G2862028335N9854&ver=1&type=2970'
                type = 'text/javascript'              
                onLoad = {()=> console.log('loaded')}
                > </script>  */}
            </div>
        )
    }


}


export default ItTourMain;
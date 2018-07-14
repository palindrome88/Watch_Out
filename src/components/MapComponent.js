import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import MarkerContainer from './MarkerContainer';

import '../App.css';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            call:null,
            complain:null,
            zoom:25,
            imagePreviewUrl:''
        };
 
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    componentWillUpdate(){
        console.log("Rendered", this.props.data);
    }

    /* marker event handler */
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true 
        });
    }



    render() {
        if (!this.props.google) {
            return <div>Loading...</div>
        }
        
        return (
            <div>
                <Map style={{minWidth: "100px",minHeight: "1100px"}} google={this.props.google} zoom={13} className={"map"} initialCenter={{lat: 36.149937, lng: -86.812866}} >
                
                </Map>
            </div>
        );
    }
} export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    v: "3"
})(MapContainer);

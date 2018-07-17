import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import {rebase, base} from '../config/constants';

import '../App.css';

var temp = [];
let urlString =`https://data.nashville.gov/resource/xbru-cfzi.json?`


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
            imagePreviewUrl:'',
            firebaseLoaded: false,
            apiCalled: false
        };
 
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    componentWillUpdate(){
        console.log("Rendered", this.props.data);
       console.log("Temp", temp);
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
      
        if(!this.props.apiCalled){
            return (
                <div>
                    <Map style={{minWidth: "100px",minHeight: "1100px"}} google={this.props.google} zoom={13} className={"map"} initialCenter={{lat:36.1762939 , lng: -86.712875}} >
                    </Map>
                </div>
            );
        }

        if(this.props.firebaseLoaded){
            return (
                <div>
                    <Map style={{minWidth: "100px",minHeight: "1100px"}} google={this.props.google} zoom={13} className={"map"} initialCenter={{lat:36.1762939 , lng: -86.712875}} >
                    {
                       this.props.firebaseData.map((item, index) => (
                       
                            <Marker key={index} title={`${item.Obstacle}`} 
                            onClick={this.onMarkerClick} 
                            position={{ lat: parseFloat(item.lat), lng: parseFloat(item.long) }} 
                            />
                        
                         ))
                     }
                    
                    
                    </Map>
                </div>
            );
        }

        if(this.props.apiCalled && this.props.firebaseLoaded){

        }
    }
} export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    v: "3"
})(MapContainer);

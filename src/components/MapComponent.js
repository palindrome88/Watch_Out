import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { base} from '../config/constants';

import '../App.css';

var temp = [];



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
        
    }
    componentDidMount(){
        
    }


    getMapData = () =>{

        base.fetch('coordinates', {
          context: this,
          asArray: true,
          then(data){
            console.log("Raw Data", data, this.props.uid);
            data = Object.values(data);
            data = Object.values(data);
            data = Object.values(data);
            data.forEach((item)=>{
      
              console.log(Object.values(item)[0]);
              temp.push(Object.values(item)[0]);
              this.setState({
                  firebaseLoaded: true
              });
            });
            
          }
          
        });
      
        
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
        
        
        if(!this.state.apiCalled){
            return (
                
                    <div>
                        <Map style={{Width: "80px",minHeight: "850px"}} google={this.props.google} zoom={15} className={"map"} initialCenter={{lat:36.1762939 , lng: -86.712875}} >
                                <Marker  title={'Flooded trail'} onClick={this.onMarkerClick} position={{ lat: 36.172510, lng: -86.710219 }} />
                                <Marker title={'High traffic area'} onClick={this.onMarkerClick} position={{ lat: 36.173139, lng: -86.708651 }} />
                                <Marker  title={'Dog Waste'} onClick={this.onMarkerClick} position={{ lat: 36.174605, lng: -86.707057 }} />
                                <Marker  title={'Crazy Wildlife'} onClick={this.onMarkerClick} position={{ lat: 36.177076, lng: -86.704522 }} />
    
                        </Map>
                    </div>
                
            );
        }

        
    }
} export default GoogleApiWrapper({
    apiKey: "AIzaSyAwYEpeFJdwyVCIlsnQZgmKQLGpi-qqYk4",
    v: "3"
})(MapContainer);

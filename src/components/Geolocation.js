import React from 'react';
import {geolocated, geoPropTypes} from 'react-geolocated';

class Geolocation extends React.Component {

   
   
  render() {
    
    
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ?
          <table> <div>Your approximate location is...</div>
            <tbody > 
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <i class="bars icon" onClick={()=>{setTimeout(this.props.submit(this.props.coords), 1000)}} ></i>
            </tbody>
          </table>
          
          : <div>Getting the location data&hellip; </div>;

          
  }
}

Geolocation.propTypes = Object.assign({}, Geolocation.propTypes, geoPropTypes);
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
  propTypes: Geolocation.propTypes
})(Geolocation);
import React from 'react';
import {geolocated, geoPropTypes} from 'react-geolocated';
import {Icon} from'semantic-ui-react';
class Geolocation extends React.Component {

   
   
  render() {
    
    
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ?
          <table style={{margin: "auto"}}> <div>Your approximate location is...</div>
            <tbody > 
              <tr style={{margin: "auto"}}><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr style={{margin: "auto"}}><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <button class="ui button" style={{minwidth: "100px", margin: "auto"} }onClick={()=>{setTimeout(this.props.submit(this.props.coords), 1000)}} >
                Submit 
              </button>
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
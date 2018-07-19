import React, { Component } from 'react';
import {rebase, base} from '../config/constants';
import { Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react';
import MapComponent from './MapComponent';
import Search from './search';
import Login from './login';
import GeoLocation from './Geolocation';
import { loginWithGoogle, logout  } from '../config/auth';
import '../App.css'
import Logo from "../images/poop-emoji2.png"
var $ = require("jquery");
let urlString =`https://data.nashville.gov/resource/xbru-cfzi.json?`



export default class SidebarExampleDimmed extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            windowPane: 0,
            authed: false,
            loading: true,
            uid: null,
            zip: '',
        }
        this.handleButtonClick.bind(this);
        this.handleGeolocation.bind(this);
        
        
        this.authenticate = this.authenticate.bind(this);
        this.logoutApp = this.logoutApp.bind(this);
    }
    
handleButtonClick = () => {
  this.setState({ visible: !this.state.visible });

  ///// API Call Data
 
}
handleSidebarHide = () => this.setState({ visible: false })
    


compositeLoginSubmitFunction() {
  this.authenticate();
 

}
componentDidMount () {
  document.title = "Watch Out";
  
    console.log("login mounted");
    this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
  
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          uid: user.uid,
          name: user.displayName,
          email: user.email
        });
        //get DB stuff for user here
      } else {
        this.setState({
          authed: false,
          loading: false,
          uid: null,
        })
      }
    })
    rebase.syncState('items', {
      context: this,
      state: 'list',
      asArray: true,
      then() {
      this.setState({ loading: false });
      }
  });

  //// Firebase Map Data

  base.fetch('coordinates', {
    context: this,
    asArray: true,
    then(data){
        console.log("Raw Data", data, this.state.uid);
      data = Object.values(data);
      data = Object.values(data);
      data = Object.values(data);
      data.forEach((item)=>{

        console.log(Object.values(item)[0]);
        //temp.push(Object.keys(item)[0]);
        
        this.setState({
            firebaseLoaded: true,
            firebaseData: Object.values(item)[0]
        });
      });
      
    }
  });
  }
 

  componentWillUnmount () {
    console.log("login will unmount");
    this.authListener();
  }

  authenticate(){
    console.log('authentication function running');
    loginWithGoogle()
    .then(() => {
        this.setState({
            authed: true
        });
    }, console.log("To check", this.state));
  }

  logoutApp(){
    console.log('logout function running');
    logout();
  }

handleGeolocation = (item) => {

    console.log("Fired.", this.state);
    this.setState({
      latitude: item.latitude,
      longitude: item.longitude
  })
    base.push('coordinates', {
      data: { [this.state.uid] : {Obstacle: this.state.Obstacle, email: this.state.email, lat: JSON.stringify(item.latitude), long: JSON.stringify(item.longitude)}},
      then(err){
        console.log("The result is this", err);
    }
  }, console.log(this.state.uid));

    
}



compositeFunction0 = () => {
      console.log("Panel MENU.");
      this.handleButtonClick();
      this.handleWindowPane0();
  }

compositeFunction1 = () => {
    console.log("Panel SEARCH.");
    this.handleButtonClick();
    this.handleWindowPane1();
}

compositeFunction2 = () => {
        console.log("Panel PROFILE.");
        this.handleButtonClick();
        this.handleWindowPane2();
}


handleAddItem(newItem) {
     
  this.setState({
    Obstacle: JSON.stringify(newItem)
  });
    
  }

  handleWindowPane0 = () => this.setState({ windowPane: 0 })

  handleWindowPane1 = () => this.setState({ windowPane: 1 })

  handleWindowPane2 = () => this.setState({ windowPane: 2 })

  render() {
    const { activeItem } = this.state
    const { visible } = this.state

    
    if(this.state.windowPane === 0){ //  ---------- MENU  ----------
      return (
            <div>
              <div class="ui message" style={{width: "250px", height: "250px", left: "500px", bottom: "500px", position: "absolute", zIndex: "5"}}>
              <div class="header">
                Welcome back!
              </div>
              <p>This is a prototype of a future working application. Right now, you are on the menu page.</p>
            </div>
              <Sidebar.Pushable as={Segment}>
              <div style={{display: "flex", alignContent: "center"}}>
              <h1 style={{font:"Courier New", fontSize: "3vw", color: "white", position: "relative", left: "530px", display: "inline-block"}}>Watch Out!</h1>
              <img src={Logo} style={{height: "5em", width: "5em", position: "relative", left: "550px", display: "inline-block"}} />
                </div>
                <Sidebar
                  as={Menu}
                  animation='overlay'
                  icon='labeled'
                  inverted
                  onHide={this.handleSidebarHide}
                  vertical
                  visible={visible}
                  width='thin'
                >
                  <Menu.Item as='a'>
                    <Icon name='bomb'onClick={this.handleButtonClick}  />
                    Poo
                  </Menu.Item>
                  <Menu.Item as='a'>
                    <Icon name='umbrella'onClick={this.handleButtonClick}  />
                    Flooded Area
                  </Menu.Item>
                  <Menu.Item as='a'>
                  <i class="window close icon" onClick={this.handleButtonClick} />
                    Close
                  </Menu.Item>
                  
                </Sidebar>
      
                <Sidebar.Pusher dimmed={visible}>
                  <Segment basic>
                  <MapComponent uid={this.state.uid} style={{ borderRadius: "15px"}} apiData = {this.state.apiData} firebaseData={this.state.firebaseData} apiCalled={this.state.apiCalled} firebaseLoaded={this.state.firebaseLoaded}>
                      </MapComponent>
                  <Menu fluid widths={4} style={{padding: "0px", width: "300px", display: "flex", position: "absolute",left: "14px", top: "850.25px"}}>
                    
                    <i class="bars icon" name='menu' active={activeItem === 'MENU '} onClick={this.compositeFunction0} style={{position: "relative", left : "3.5em"}}></i>
                    <i class="search icon" name='search' active={activeItem === 'SEARCH'} onClick={this.compositeFunction1} style={{position: "relative", left : "3.5em"}}></i>
                    <i class="user circle outline icon" name='profile' active={activeItem === 'PROFILE'} onClick={this.compositeFunction2} style={{position: "relative", left : "3.5em"}} ></i>
                    
                  </Menu>
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </div>
          )

          
    }
    if (this.state.windowPane === 1){ // ---------- SEARCH ----------
        return (
            <div>
              
                <div class="ui message" style={{width: "250px", height: "250px", left: "500px", bottom: "500px", position: "absolute", zIndex: "5"}}>
                <div class="header">
                  Welcome back!
                </div>
                <p>This is a prototype of a future working application. Right now, you are on the search page.</p>
              </div>
              
              <Sidebar.Pushable as={Segment}>
              <h1 style={{font:"Courier New", fontSize: "3vw", color: "white", position: "relative", left: "530px", display: "inline-block"}}>Watch Out!</h1><img src={Logo} style={{height: "5em", width: "5em", position: "relative", left: "550px", display: "inline-block"}} />
                <Sidebar
                  as={Menu}
                  animation='overlay'
                  icon='labeled'
                  inverted
                  onHide={this.handleSidebarHide}
                  vertical
                  visible={visible}
                  width='thin'
                >
                  <Menu.Item as='a'>
                    <Search submit={this.handleButtonClick} add={this.handleAddItem.bind(this)} state={this.state}></Search>
                  </Menu.Item>
                  <Menu.Item as='a'> {/*                    NAVIGATION                       */}
                    <GeoLocation submit={this.handleGeolocation}  style={{margin: "auto"}}></GeoLocation>
                  </Menu.Item>
                  
                  <Menu.Item as='a'>
                    <i class="window close icon" onClick={this.handleButtonClick} />
                    Close
                  </Menu.Item>
                </Sidebar>
      
                <Sidebar.Pusher dimmed={visible}>
                  <Segment basic>
                  <MapComponent uid={this.state.uid} style={{width: "300px", height: "300px", borderRadius: "15px"}} apiData = {this.state.apiData} firebaseData={this.state.firebaseData} apiCalled={this.state.apiCalled} firebaseLoaded={this.state.firebaseLoaded}>
                      </MapComponent>
                <Menu fluid widths={4} style={{padding: "0px", width: "300px", display: "flex", position: "absolute", top: "850.25px"}}>
                    <i class="bars icon" name='menu' active={activeItem === 'MENU '} onClick={this.compositeFunction0}  style={{position: "relative", left : "3.5em"}}></i>
                    <i class="search icon" name='search' active={activeItem === 'SEARCH'} onClick={this.compositeFunction1} style={{position: "relative", left : "3.5em"}}></i>
                    <i class="user circle outline icon" name='profile' active={activeItem === 'PROFILE'} onClick={this.compositeFunction2}  style={{position: "relative", left : "3.5em"}}></i>    
                </Menu>
                    
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </div>
          )
      }
    if (this.state.windowPane === 2){ // ---------- PROFILE ----------
      return (
          <div>
            
              <div class="ui message" style={{width: "250px", height: "250px", left: "100px", left: "500px", bottom: "500px", position: "absolute", zIndex: "5"}}>
              <div class="header">
                Welcome back!
              </div>
              <p>This is a prototype of a future working application. Right now, you are on the profile page.</p>
            </div>
            <Sidebar.Pushable as={Segment}>
            <h1 style={{font:"Courier New", fontSize: "3vw", color: "white", position: "relative", left: "530px", display: "inline-block"}}>Watch Out!</h1><img src={Logo} style={{height: "5em", width: "5em", position: "relative", left: "550px", display: "inline-block"}} />
              <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
              >
                <Menu.Item as='a'>
            <i class="google icon" name='male'onClick={() => this.authenticate('google')} credentials={this.state}></i>
              Login to Google!
              </Menu.Item>
              <Menu.Item as='a'>
                <i class="sign-out alternate icon" name='bomb' onClick={() => this.logoutApp('google')}></i>
                Google Logout 
              </Menu.Item>
              <Menu.Item as='a'>
                <i class="window close icon" name='bomb' onClick={this.handleButtonClick}></i>
                Close 
              </Menu.Item>
              </Sidebar>
    
              <Sidebar.Pusher dimmed={visible}>
                <Segment basic>
                <MapComponent uid={this.state.uid} style={{width: "300px", height: "300px", borderRadius: "15px"}} apiData = {this.state.apiData} firebaseData={this.state.firebaseData} apiCalled={this.state.apiCalled} firebaseLoaded={this.state.firebaseLoaded}>
                    </MapComponent>
              <Menu fluid widths={4} style={{padding: "0px", width: "300px", display: "flex", position: "absolute", top: "850.25px"}}>
                  <i class="bars icon" name='menu' active={activeItem === 'MENU '} onClick={this.compositeFunction0}  style={{position: "relative", left : "3.5em"}}></i>
                  <i class="search icon" name='search' active={activeItem === 'SEARCH'} onClick={this.compositeFunction1} style={{position: "relative", left : "3.5em"}}></i>
                  <i class="user circle outline icon" name='profile' active={activeItem === 'PROFILE'} onClick={this.compositeFunction2}  style={{position: "relative", left : "3.5em"}}></i>   
              </Menu>
                  
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        )
    }
  }
}
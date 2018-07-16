import React, { Component } from 'react';
import {rebase} from '../config/constants';
import { Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react';
import MapComponent from './MapComponent';
import Search from './search';
import Login from './login';
import GeoLocation from './Geolocation';




export default class SidebarExampleDimmed extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            windowPane: 0,
        }
        this.handleButtonClick.bind(this);
        this.handleGeolocation.bind(this);
    }
    
handleButtonClick = () => this.setState({ visible: !this.state.visible })
handleSidebarHide = () => this.setState({ visible: false })
    
    
handleGeolocation = (item) => {

    console.log("Fired.", item);
    
        this.setState({
            latitude: item.latitude,
            longitude: item.longitude
        }, console.log(this))
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

componentDidMount() {
        rebase.syncState('items', {
        context: this,
        state: 'list',
        asArray: true,
        then() {
        this.setState({ loading: false });
        }
    });
}


handleAddItem(newItem) {
      
    this.setState({
      list: this.state.list.concat([newItem])
    });
  }

  handleWindowPane0 = () => this.setState({ windowPane: 0 })

  handleWindowPane1 = () => this.setState({ windowPane: 1 })

  handleWindowPane2 = () => this.setState({ windowPane: 2 })

  render() {
    const { activeItem } = this.state
    const { visible } = this.state

    
    if(this.state.windowPane === 0){ // MENU ----------
        return (
            <div>
            <p id="demo"></p>
              
              <Sidebar.Pushable as={Segment}>
                WATCH OUT! 0
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
                    <Icon name='male' onClick={this.handleButtonClick} />
                    Stranger Danger
                  </Menu.Item>
                  
                </Sidebar>
      
                <Sidebar.Pusher dimmed={visible}>
                  <Segment basic>
                  <MapComponent>
                      </MapComponent>
                  <Menu fluid widths={4}>
                    
                    <i class="bars icon" name='menu' active={activeItem === 'MENU '} onClick={this.compositeFunction0} ></i>
                    <i class="search icon" name='search' active={activeItem === 'SEARCH'} onClick={this.compositeFunction1}></i>
                    <i class="user circle outline icon" name='profile' active={activeItem === 'PROFILE'} onClick={this.compositeFunction2} ></i>
                    
                  </Menu>
                    
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </div>
          )

          
    }
    if (this.state.windowPane === 1){ // ---------------SEARCH
        return (
            <div>
              
              <Sidebar.Pushable as={Segment}>
                WATCH OUT! 1
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
                  <Menu.Item as='a'> {/*                    NAVIGATION                      */}
                    <GeoLocation submit={this.handleGeolocation}></GeoLocation>
                  </Menu.Item>
                  <Menu.Item as='a'>
                    <Search submit={this.handleButtonClick} add={this.handleAddItem.bind(this)}></Search>
                  </Menu.Item>
                  <Menu.Item as='a'>
                    <Icon name='bomb'onClick={this.handleButtonClick}  />
                    Flooded Area
                  </Menu.Item>
                  <Menu.Item as='a'>
                    <Icon name='umbrella' onClick={this.handleButtonClick} />
                    Stranger Danger
                  </Menu.Item>
                </Sidebar>
      
                <Sidebar.Pusher dimmed={visible}>
                  <Segment basic>
                  <MapComponent>
                      </MapComponent>
                <Menu fluid widths={4}>
                    <i class="bars icon" name='menu' active={activeItem === 'MENU '} onClick={this.compositeFunction0} ></i>
                    <i class="search icon" name='search' active={activeItem === 'SEARCH'} onClick={this.compositeFunction1}></i>
                    <i class="user circle outline icon" name='profile' active={activeItem === 'PROFILE'} onClick={this.compositeFunction2} ></i>    
                </Menu>
                    
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </div>
          )
      }
      if (this.state.windowPane === 2){ // ---------- PROFILE
        return (
            <div>
              
              <Sidebar.Pushable as={Segment}>
                WATCH OUT! 2
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
                  <Login submit={this.handleButtonClick}></Login>
                </Sidebar>
      
                <Sidebar.Pusher dimmed={visible}>
                  <Segment basic>
                  <MapComponent>
                      </MapComponent>
                <Menu fluid widths={4}>
                    <i class="bars icon" name='menu' active={activeItem === 'MENU '} onClick={this.compositeFunction0} ></i>
                    <i class="search icon" name='search' active={activeItem === 'SEARCH'} onClick={this.compositeFunction1}></i>
                    <i class="user circle outline icon" name='profile' active={activeItem === 'PROFILE'} onClick={this.compositeFunction2} ></i>   
                </Menu>
                    
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </div>
          )
      }
  }
}
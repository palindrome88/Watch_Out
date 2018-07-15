import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import MapComponent from './MapComponent';
export default class SidebarExampleDimmed extends Component {
  state = {
       visible: false
    }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { activeItem } = this.state
    const { visible } = this.state

    return (
      <div>
        
        <Sidebar.Pushable as={Segment}>
          WATCH OUT!
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
                <Menu.Item name='menu' active={activeItem === 'MENU '} onClick={this.handleButtonClick} />
                
                <Menu.Item name='search' active={activeItem === 'SEARCH'} onClick={this.handleItemClick} />
                <Menu.Item name='profile' active={activeItem === 'PROFILE'} onClick={this.handleItemClick} />
            </Menu>
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
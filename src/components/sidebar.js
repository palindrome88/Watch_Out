import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { activeItem } = this.state
    const { visible } = this.state

    return (
      <div>
        

        <Sidebar.Pushable as={Segment}>
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
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
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
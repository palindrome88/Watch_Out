import React, { Component } from 'react';
import { loginWithGoogle, logout  } from '../config/auth';
import {rebase} from '../config/constants';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
 

class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {
            authed: false,
            loading: true,
            uid: null,
            zip: '',
          }

          this.authenticate = this.authenticate.bind(this);
          this.logoutApp = this.logoutApp.bind(this);

    }

    compositeLoginSubmitFunction() {
      this.authenticate();
      this.props.submit();

    }
    componentDidMount () {
        console.log("login mounted");
        this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
      
          if (user) {
            this.setState({
              authed: true,
              loading: false,
              uid: user.uid,
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
        });
      }

      logoutApp(){
        console.log('logout function running');
        logout();
      }

    render() {
        return(
            <div>
            <Menu.Item as='a'>
              <i class="google icon" name='male'onClick={() => this.authenticate('google')}></i>
              Login to Google!
            </Menu.Item>
            <Menu.Item as='a'>
              <i class="sign-out alternate icon" name='bomb' onClick={() => this.logoutApp('google')}></i>
              Google Logout 
            </Menu.Item>
            <Menu.Item as='a'>
              <i class="window close icon" name='bomb' onClick={this.props.submit}></i>
              Close 
            </Menu.Item>
            </div>
        )
    }
}

export default Login;
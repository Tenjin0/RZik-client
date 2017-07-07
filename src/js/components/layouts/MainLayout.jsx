import {Redirect, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {grey900} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import React, { Component } from 'react';
import Auth from '../../services/auth'
import Api from '../../services/api2'
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Player from '../Player';

@inject('sessionStore') @observer
class MainLayout extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    this.state = {
      open: true
    }
  }

  _handleClick(e) {
      e.preventDefault();
      // Show/Hide the LeftMenu
      this.state.open = !this.state.open;
      this.setState(this.state);
  }

  handleClose = (src) => {
    this.setState({open: false})

  };
  componentDidMount() {
    new Api().get('users/myinfo')
    .then((res) => {
      var Roles = res.data.user.Roles;
      var roles = [];
      Roles.forEach(function(element) {
        roles.push(element.role);
      }, this);
      this.props.sessionStore.setUser(res.data.user);
      this.props.sessionStore.setRoles(roles);
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  render() {
    var {component: Component, ...rest} = this.props;
    const navStyle = {
      top: 64,
      height: (window.innerHeight - 64),
      boxShadow : ""
    };
    const contentStyle = {};
    if (this.state.open) {
      contentStyle.marginLeft = 220;
      // contentStyle.width = '79%';
    } else {
      // contentStyle.width = '97%';
    }
    var menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
    ];
    return (
      <Route {...rest} render={matchProps => (
        <div className="DefaultLayout">
        {Auth.isUserAuthenticated()? "":
        <Redirect to="/login" push/>
        }
          <img id="logo" className="selector" src="/images/logo.gif" width="100px" />

          <AppBar className="appNav"
                  onLeftIconButtonTouchTap={this._handleClick.bind(this)}
            />

          <Drawer
            className="leftNav"
            docked={true}
            width={200}
            open={this.state.open}
            containerStyle={navStyle}
            onRequestChange={(open) => this.setState({open})}
          >
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/playlist'>Playlist</Link></li>
              <li><Link to='/uploads/me'>My uploads</Link></li>
              <li><Link to='/uploads/new'>Upload file</Link></li>
              <li><Link to='/music'>Music</Link></li>
              <li><Link to='/register'>Register</Link></li>
              { Auth.isUserAuthenticated() ?
              <li><Link to='/logout'>Logout</Link></li> :
              <li><Link to='/login'>Login</Link></li> 
              }
              <li><Link to='/language'>Test language</Link></li>
            </ul>
          </Drawer>

          <div style={contentStyle} className="DefaultLayoutComponent">
            <Component {...matchProps} />
          </div>

          <Player/>

        </div>
        )}/>

    )
  }

}
const resizeLeftNav = () => {
  // console.log(window.pageYOffset)
  const leftNav = document.getElementsByClassName('MY_LeftNav')[0];
  if (leftNav) {
    leftNav.style.height = (window.innerHeight - 64) + 'px';
  }
};
// window.addEventListener('resize', resizeLeftNav, false);
// window.addEventListener('scroll', () => {
//    const leftNav = document.getElementsByClassName('MY_LeftNav')[0];
//   if (leftNav) {
//     leftNav.style.top = (0) + 'px !important';
//   }
// }, false);
// const MainLayout = ({component: Component, ...rest}) => {
//     console.warn(Component, rest);

// };

export default MainLayout;

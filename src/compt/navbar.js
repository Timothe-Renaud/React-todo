import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
class NavBar extends Component {
  render() {
    return (
        <div>
        <AppBar color="primary" position="static">
          <h1>My header</h1>
        </AppBar>

      </div>
    );
  }
}
 
export default NavBar;
import React, { Component } from 'react';

class NavBar extends Component {

  navigate() {
    console.log('Navigate');
  }

  render() {
    return (
      <div>
         <button onClick={this.navigate}>List</button> | <button onClick={this.navigate}>New</button>
      </div>
    )
  }
}

export default NavBar;

import React, { Component } from 'react';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid text-center">
          <a className="navbar-brand mx-auto" href="#">
            Super Hero
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;

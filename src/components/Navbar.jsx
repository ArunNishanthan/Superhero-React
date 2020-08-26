import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid text-center">
          <Link className="navbar-brand mx-auto" to="/">
            Super Hero
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;

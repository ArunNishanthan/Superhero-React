import React from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-5">
        <Search />
      </div>
    </React.Fragment>
  );
}

export default App;

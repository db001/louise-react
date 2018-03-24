import React, { Component } from 'react';
import Jumbo from './components/Jumbo';
import NavigationBar from './components/Navbar';
import About from './components/About';
import Gallery from './components/Gallery';

import './App.css';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Jumbo />
        <About />
        <Gallery />
       </div> 
    );
  }
}

export default App;

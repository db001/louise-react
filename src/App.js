import React, { Component } from 'react';
import Jumbo from './components/Jumbo';
import NavigationBar from './components/Navbar';
import About from './components/About';
import Gallery from './components/Gallery';
import Exhibitions from './components/Exhibitions';
import Education from './components/Education';
import Footer from './components/Footer';

import './styles/styles.css';

class App extends Component {

  render() {
    return (
      <div  id={'home'}>
        <NavigationBar />
        <Jumbo />
        <About />
        <Gallery />
        <hr className="componentSeperator" />
        <Exhibitions />
        <Education />
        <Footer />
       </div> 
    );
  }
}

export default App;

import React, { Component } from 'react';
import Jumbo from './components/Jumbo';
import NavigationBar from './components/Navbar';

import './App.css';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar>
        </NavigationBar>
        <Jumbo>
        </Jumbo>
        <h1>TEST</h1>
       </div> 
    );
  }
}

export default App;

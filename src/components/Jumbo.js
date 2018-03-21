import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron>
        <div className="titleContainer">
          <h1>Louise Lahive</h1>
          <p>Artist</p>
        </div>
      </Jumbotron>
    )}
}

export default Jumbo;
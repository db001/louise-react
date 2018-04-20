import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class About extends Component {
  render() {
    return (
      <div className="about">
        <ScrollableAnchor id={'about'}>
        <Grid>        
          <Row>
            <Col xs={12}>
              <h3>About Louise</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <p>Working primarily with Oils, Louise Lahive also adds objects that are sourced from nature, for example seeds or dry beans. These objects are carefully placed into her paintings and drawings using oil paint or rabbit skin glue, sometimes they are covered or buried in the paint, sometimes they are painted as mini objects in their own right and added to the images as texture.</p>
            </Col>
            <Col xs={12} md={4}>
              <p>Lahive is committed to exploring pattern in her work, pattern that is sourced from natural phenomena like rain or heat and used as a process to create the image, for example leaving the canvas in the rain to create a direct pattern, or burning areas of canvas to create pattern. This ‘natural data’ as Lahive describes it is not only limited to the direct process but is also an interest in the paintings subject matter. The natural phenomenon that we can view through scientific methods is linked to what we can see with our naked eye and Lahive explores these patterns and she presents them to us as ambiguous images.</p>
            </Col>
            <Col xs={12} md={4}>
              <p>There is an attempt to engage with what we do not, or cannot grasp. The landscape that swarms with (what could be) bacteria suggests an ominous movement of nature, and the man made mound suggests something hidden from view. The fractured MRIs that present us with an intimate view of the artist’s body, we cannot necessarily recognise, yet we know they are displaying what is hidden beneath the skin with intricate beauty. The trees appearing from the night resembling partially lit lungs, these are all suggesting a greater and slower knowledge that we might glimpse in the corner of our eye, yet evades our scrutiny.</p>
            </Col>
          </Row>
        </Grid> 
        </ScrollableAnchor>
      </div>   
    )
  }
};

export default About;
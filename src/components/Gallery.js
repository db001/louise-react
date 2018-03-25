import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <Grid>
          <Row>
            <Col xs={12}>
                <h3>Gallery</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Carousel>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="http://via.placeholder.com/900x500" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="http://via.placeholder.com/900x500" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="http://via.placeholder.com/900x500" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Gallery;
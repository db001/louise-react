import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

const images = {
  mri: {
    baseURL: "http://res.cloudinary.com/dl9xyhypx/image/upload/v1519334193/mri/",
    jpgs: [
      'mri1.jpg',
      'mri2.jpg',
      'mri3.jpg',
      'mri4.jpg',
      'mri5.jpg',
      'mri6.jpg',
      'mri7.jpg'
    ],
  },
  swarm: {
    baseURL: "http://res.cloudinary.com/dl9xyhypx/image/upload/v1519334193/swarm/",
    jpgs: [
      'swarm1.jpg',
      'swarm2.jpg',
      'swarm3.jpg',
      'swarm4.jpg',
      'swarm5.jpg',
      'swarm6.jpg',
      'swarm7.jpg',
      'swarm8.jpg',
      'swarm9.jpg'
    ],
  },
  installation: {
    baseURL: "http://res.cloudinary.com/dl9xyhypx/image/upload/v1519334193/mri/",
    jpgs: [
      'installation1.jpg',
      'installation2.jpg',
      'installation3.jpg'
    ]
  }
};

const baseURL = `http://res.cloudinary.com/dl9xyhypx/image/upload/h_286,c_lpad,b_white/v1519334193/mri/`;


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
                {
                  images.mri.jpgs.map(image =>
                    <Carousel.Item className="paintingCarousel" key={image}>
                      <img alt="900x500" src={baseURL + image} />
                      <Carousel.Caption>
                      <h3>{image}</h3>
                      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                }
                {/* <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="http://via.placeholder.com/900x500" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item> */}
              </Carousel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Gallery;
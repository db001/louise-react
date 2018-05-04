import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

// Hardcoded state
const images = {
  mri: {
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
    jpgs: [
      'installation1.jpg',
      'installation2.jpg',
      'installation3.jpg',
      'installation4.jpg',
      'installation5.jpg',
      'installation6.jpg'
    ]
  }
}

const gallerySettings = {
  baseURL: 'http://res.cloudinary.com/dl9xyhypx/image/upload/',
  imageTransforms: ',c_lpad,b_white/',
  userId: 'v1519334193/',
  windowWidth: 0,
  imageHeight: 0,
  currentFolder: 'mri'
};

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = { images, ...gallerySettings };
    this.getWindowWidth = this.getWindowWidth.bind(this);
    this.setImageHeight = this.setImageHeight.bind(this);
    this.chooseImageSet = this.chooseImageSet.bind(this);
  }

  // Get the width of the current window
  getWindowWidth() {
    this.setState({ windowWidth: Math.max(document.documentElement.clientWidth || 0) })
  }

  // Set height of the gallery images depending on window width
  setImageHeight() {
    this.getWindowWidth();
    if (this.state.windowWidth < 692) {
      this.setState({ imageHeight: 275 });
    } else if (this.state.windowWidth >= 692 && this.state.windowWidth < 992) {
      this.setState({ imageHeight: 450 });
    } else if (this.state.windowWidth > 992) {
      this.setState({ imageHeight: 600 });
    }
  }

  // Select images based on button click
  chooseImageSet(e) {
    this.setState({ currentFolder: e.currentTarget.dataset.id })
  }

  // Call setImageHeight on component mount and add event listener for window resize
  componentDidMount() {
    this.getWindowWidth();
    this.setImageHeight();
    window.addEventListener('resize', this.setImageHeight.bind(this));
    window.addEventListener('load', this.setImageHeight.bind(this));
  }

  render() {

    const imagesURL = `http://res.cloudinary.com/dl9xyhypx/image/upload/h_${this.state.imageHeight},c_lpad,c_lfill,b_white/v1519334193/${this.state.currentFolder}/`;
    const imageFolder = { ...this.state.images[this.state.currentFolder] };

    return (
      <div className="gallery">
        <ScrollableAnchor id={'gallery'}>
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
                    imageFolder.jpgs.map(image =>
                      <Carousel.Item className="paintingCarousel" key={image}>
                        <img alt={image} src={imagesURL + image} />
                        {/* <Carousel.Caption>
                        <h3>{image}</h3>
                      </Carousel.Caption> */}
                      </Carousel.Item>
                    )
                  }
                </Carousel>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ButtonGroup bsSize="large">
                  <Button data-id="mri" onClick={this.chooseImageSet}>MRI</Button>
                  <Button data-id="swarm" onClick={this.chooseImageSet}>Swarm</Button>
                  <Button data-id="installation" onClick={this.chooseImageSet}>Installation</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Grid>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default Gallery;
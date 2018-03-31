import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

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
      'installation3.jpg'
    ]
  },
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
    this.state = {...images};
    this.getWindowWidth = this.getWindowWidth.bind(this);
    this.setImageHeight = this.setImageHeight.bind(this);
    this.chooseImageSet = this.chooseImageSet.bind(this);
  }

  // Get the width of the current window
  getWindowWidth() {
    this.setState({windowWidth: Math.max(document.documentElement.clientWidth || 0)})
  }

<<<<<<< HEAD
  // Set height of the gallery images depending on window width
  setImageHeight() {
    this.getWindowWidth();
    if(this.state.windowWidth < 692) {
      this.setState({imageHeight: 268});
    } else if(this.state.windowWidth >= 692 && this.state.windowWidth < 992) {
      this.setState({imageHeight: 450});
    } else if(this.state.windowWidth > 992) {
      this.setState({imageHeight: 600});
    }
  }
=======
const baseURL = `http://res.cloudinary.com/dl9xyhypx/image/upload/h_286,c_lpad,b_white/v1519334193/mri/`;
>>>>>>> 22f4516310a4068161ec0468c988d26a2036328a

  // Select images based on button click
  chooseImageSet(e) {
    this.setState({currentFolder: e.currentTarget.dataset.id})
  }

  // Call setImageHeight on component mount and add event listener for window resize
  componentDidMount() {
    this.setImageHeight();
    window.addEventListener('resize', this.setImageHeight.bind(this));
  }

  render() {
    const imgs = this.state;
    const galleryToShow = imgs.currentFolder;
    const imagesURL = `${imgs.baseURL}h_${imgs.imageHeight}${imgs.imageTransforms}${imgs.currentFolder}/`;

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
                  imgs.mri.jpgs.map(image =>
                    <Carousel.Item className="paintingCarousel" key={image}>
                      <img alt={image} src={imagesURL + image} />
                      <Carousel.Caption>
                      <h3>{image}</h3>
                      </Carousel.Caption>
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
                <Button data-id="install" onClick={this.chooseImageSet}>Installation</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Gallery;
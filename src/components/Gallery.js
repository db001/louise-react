import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

const images = {
  mri: {
    folder: "mri/",
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
    folder: "swarm/",
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
    folder: "installation/",
    jpgs: [
      'installation1.jpg',
      'installation2.jpg',
      'installation3.jpg'
    ]
  },
  baseURL: 'http://res.cloudinary.com/dl9xyhypx/image/upload/',
  heightModifier: 'h_286',
  imageTransforms: ',c_lpad,b_white/',
  userId: 'v1519334193/',
  windowWidth: 0,
  imageHeight: 0
};

class Gallery extends Component { 

  constructor(props) {
    super(props);
    this.state = {...images};
    this.getWindowWidth = this.getWindowWidth.bind(this);
    this.setImageHeight = this.setImageHeight.bind(this);
    
  }

  getWindowWidth() {
    this.setState({windowWidth: Math.max(document.documentElement.clientWidth || 0)})
  }

  setImageHeight() {
    this.getWindowWidth();
    if(this.state.windowWidth < 692) {
      this.setState({imageHeight: 268});
    } else if(this.state.windowWidth >= 692 && this.state.windowWidth < 992) {
      this.setState({imageHeight: 450});
    } else if(this.state.windowWidth > 992) {
      this.setState({imageHeight: 600});
    }
    console.log(this.state.windowWidth, this.state.imageHeight);
  }

  componentDidMount() {
    // this.getWindowWidth();
    this.setImageHeight();
    window.addEventListener('resize', this.setImageHeight.bind(this));
  }

  render() {
    const imgs = this.state;
    const imagesURL = `${imgs.baseURL}h_${imgs.imageHeight}${imgs.imageTransforms}${imgs.mri.folder}`;

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
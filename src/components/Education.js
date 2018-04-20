import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Education extends Component {
  render () {
    return (
      <Grid>
        <Row className="container">
          <div className="info">
            <Col xs={12} md={6}>
              <p>Works and lives in North Hertfordshire</p>
            </Col>
            <Col xs={12} md={6}>
              <p>Fellow with Digswell Arts 2012 to 2017</p>
            </Col>
            <Col xs={12} md={6}>
              <p>Studied BA in Fine Art Painting, Kingston University 1996-1999</p>
            </Col>
            <Col xs={12} md={6}>
              <p>Studied Foundation in Art &amp; Design, North Herts College 1995-1996</p>
            </Col>
            <Col xs={12}>
              <p className="contact">Contact:
                <a href="mailto:louiselahive@hotmail.com?Subject=Website" target="_top"> louiselahive@hotmail.com</a>
              </p>
            </Col>
          </div>
        </Row>
      </Grid>
    )
  }
}

export default Education;
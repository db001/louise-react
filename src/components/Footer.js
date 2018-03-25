import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <Grid>
          <Row>
            <Col xs={12}>
              <p>Website designed &amp; made by <a href="http://www.davebennett.co" target="_blank" rel="noopener noreferrer">davebennett.co</a></p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Footer;
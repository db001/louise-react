import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Exhibitions extends Component {
  render() {
    return (
      <div className="exhibitions">
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Exhibitions</h3>
              <p><strong>Recent &amp; upcoming exhibitions</strong></p>
            </Col>
          </Row>
          <div className="exhibitWrapper">
            <Row>
              <Col xs={12} md={6} lg={4}>
                <div className="exhibit">
                  <p className="exhibitDate">September 2017</p>
                  <p className="exhibitTitle">Blood landscape</p>
                  <p><a   href="http://www.artrabbit.com/events/blood-landscape-louise-lahive" target="_blank" rel="noopener noreferrer">Westminster Reference library</a></p>
                </div>
                <hr className="exhibitSeperator" />
              </Col>
              <Col xs={12} md={6} lg={4}>  
                <div className="exhibit">
                  <p className="exhibitDate">2016/17</p>
                  <p className="exhibitTitle">Foyer Gallery Broadway Letchworth</p>
                  <p>Solo Exhibition</p>
                </div>
                <hr className="exhibitSeperator" />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className="exhibit">
                  <p className="exhibitDate">2016</p>
                  <p className="exhibitTitle">‘Looking Deeper’, Courtyard Arts, Hertford UK</p>
                  <p>Group exhibition</p>
                </div>
                <hr className="exhibitSeperator" />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className="exhibit">
                  <p className="exhibitDate">2015</p>
                  <p className="exhibitTitle">‘Swarm’ Fenners Exhibit Space, Letchworth UK</p>
                  <p>Solo Exhibition of Landscapes</p>
                </div>
                <hr className="exhibitSeperator" />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className="exhibit">
                  <p className="exhibitDate">2014</p>
                  <p className="exhibitTitle">‘The Longest Day'</p>
                  <p>Group Exhibition</p>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Exhibitions;


import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../../styles/Images/clouds-gc3410e0d3_640.jpg';
export default function Contact() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
      <h1>Contact Page</h1>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Github Profile</Card.Title>
              <Card.Text>
                Click the link for my Github Portfolio Page.
              </Card.Text>
              <a href="https://github.com/konnyph">
                <Button variant="primary">Learn More</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <Card.Body>
           <Card.Title>Email</Card.Title>
               <Card.Text>
                     <a href="mailto:conniebiac@gmail.com">
               <FontAwesomeIcon icon={faEnvelope} /> Email me
                 </a>
               </Card.Text>
          </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Resume</Card.Title>
              <Card.Text>
                Link to Resume
              </Card.Text>
              <a href="https://docs.google.com/document/d/16sgZiSMXyUavgdSBAFpClP-SvpAtObNOp95tsp-8I04/edit?usp=share_link">
                <Button variant="primary">Learn More</Button>
              </a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>LinkedIn</Card.Title>
              <Card.Text>
                Link to LinkedIn
              </Card.Text>
              <a href="https://www.linkedin.com/in/phuongho6773/">
                <Button variant="primary">Learn More</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

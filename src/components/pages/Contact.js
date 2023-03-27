

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
                Coming soon. Using Github link for now.
              </Card.Text>
              <a href="https://github.com/konnyph">
                <Button variant="primary">Learn More</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

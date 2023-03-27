

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import backgroundImage from '../../styles/Images/clouds-gc3410e0d3_640.jpg';
export default function Project() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
      <h1>Projects Page</h1>
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Card.Body>
              <Card.Title>Magical Crouton</Card.Title>
              <Card.Text>
              This app leverages open Ai's DALLE API and Chat GPT model 3 to generate images and relative caption based on user input. user input is taken in the form of a madlib where the user inputs are placed into a premade template 'payloadGuide' to feed both the DALLE and Chat GPT APIs which then the return values are placed on screen as a comic book.
              </Card.Text>
              <a href="https://magiccrouton.github.io/theMostMagicalCrouton/">
                <Button variant="primary">Learn More</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1671951483649-d68187142e42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Card.Body>
              <Card.Title>Magical Breadsticks</Card.Title>
              <Card.Text>
              An AI generated Comic book generator with user data server functionality.
              </Card.Text>
              <a href="https://magical-breadsticks.herokuapp.com/">
                <Button variant="primary">Learn More</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}



import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../styles/Home.css';
import backgroundImage from '../../styles/Images/clouds-gc3410e0d3_640.jpg';


export default function Home() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center mb-4">Hello, my name is Konny P Ho</h1>
            {/* <img src='../../styles/Images/Avatar.JPG' /> */}
            <p className="text-center">
             Welcome to my first react page. 
            </p>
            <div className="d-flex justify-content-center mt-4">
              <Button variant="primary" href="#">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


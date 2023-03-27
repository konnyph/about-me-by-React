



import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../../styles/Images/clouds-gc3410e0d3_640.jpg';

export default function About() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}> 
        <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6}>
         
          <h6 className="text-center">
          
          I'm a passionate learner with a growing interest in the world of coding. While it may be a new subject to me, I find myself enjoying it more and more every day. As someone who loves to challenge themselves, I see coding as both a fun and stressful experience, constantly pushing me to learn and grow. I'm excited to take on new challenges and expand my knowledge of coding through this bootcamp, and I look forward to all the possibilities that lie ahead.
          </h6>
          <div className="d-flex justify-content-center mt-4">
            {/* <Button variant="primary" href="#">Learn More</Button> */}
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    
  );
}


// Why are pictures loading?
// what is best structure to do style for React page? , example
// 
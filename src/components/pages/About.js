



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
          
          Full-stack web developer with a background in Chemistry. Graduated from Georgia Tech University coding boot camp and earned a certificate in full-stack web development. Innovative problem-solver passionate about developing projects; focused on front-end and back-end. Strengths in creativity, teamwork, quick learning, fast-paced and building projects from ideation to execution.	
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
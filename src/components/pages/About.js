// import React from 'react';
// // import '../styles/About.css';

// export default function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>
//       My name is Konny and I'm a passionate learner with a growing interest in the world of coding. While it may be a new subject to me, I find myself enjoying it more and more every day. As someone who loves to challenge themselves, I see coding as both a fun and stressful experience, constantly pushing me to learn and grow. I'm excited to take on new challenges and expand my knowledge of coding through this bootcamp, and I look forward to all the possibilities that lie ahead.
//       </p>
//     </div>
//   );
// }



import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function About() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6}>
          <h1 className="text-center mb-4">Hello, my name is Konny P Ho </h1>
          <p className="text-center">
          
          I'm a passionate learner with a growing interest in the world of coding. While it may be a new subject to me, I find myself enjoying it more and more every day. As someone who loves to challenge themselves, I see coding as both a fun and stressful experience, constantly pushing me to learn and grow. I'm excited to take on new challenges and expand my knowledge of coding through this bootcamp, and I look forward to all the possibilities that lie ahead.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" href="#">Learn More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
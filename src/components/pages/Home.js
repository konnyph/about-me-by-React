// import React from 'react';

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>
//        My first react page.
//       </p>
//     </div>
//   );
// }

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6}>
          <h1 className="text-center mb-4">Home Page</h1>
          <p className="text-center">
            My first React page with Bootstrap.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" href="#">Learn More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

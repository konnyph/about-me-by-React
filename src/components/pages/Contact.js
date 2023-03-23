// import React from 'react';

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <li> Github Profile </li>
//       <li> Email </li>
//       <li> LinkedIn </li>
//     </div>
//   );
// }


import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Github Profile</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                volutpat aliquam velit sit amet efficitur.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                volutpat aliquam velit sit amet efficitur.
              </Card.Text>
              <ul>
        <li><a href="mailto:conniebiac@gmail.com">conniebilac@gmail.com</a></li>
      </ul>
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

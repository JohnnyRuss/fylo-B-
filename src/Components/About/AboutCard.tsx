import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface AboutCardType {}

const AboutCard: React.FC<AboutCardType> = (props) => {
  return (
    <Card className="w-35rem mt-app-5 align-self-center align-self-lg-start shadow">
      <Card.Body>
        <Card.Text>
          <span className="fs-app-h2">&quot;</span>
          <br />
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </Card.Text>
        <Row className="mt-4">
          <Col xs={2}>
            <Image
              src="/assets/avatar-testimonial.jpg"
              alt="avatar testimonial"
              roundedCircle
              width={55}
            />
          </Col>
          <Col xs={10} className="d-flex flex-column gy-2 ps-4">
            <span className="text-capitalize fw-semibold">kyle burton</span>
            <span className="text-muted fs-app-sm">Founder & CEO, Huddle</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;

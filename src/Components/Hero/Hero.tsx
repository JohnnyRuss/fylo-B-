import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import HeroDetails from "./HeroDetails";
import HeroForm from "./HeroForm";

interface HeroType {}

const Hero: React.FC<HeroType> = (props) => {
  return (
    <Container fluid="xl" className="px-5 px-xl-0 mt-app-5">
      <Row className="gx-5">
        <Col
          lg="6"
          className="mw-100 lg:mx-50 mt-lg-0 mt-5 d-flex flex-column justify-content-center align-items-start order-2 order-lg-1"
        >
          <HeroDetails />
          <HeroForm />
        </Col>
        <Col lg="6" className="mw-100 lg:mx-50 order-1 order-lg-2">
          <Image src="/assets/illustration-1.svg" fluid className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;

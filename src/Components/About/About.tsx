import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styles from "./about.module.scss";

import AboutCard from "./AboutCard";
import CardDetails from "./CardDetails";

interface AboutType {}

const About: React.FC<AboutType> = (props) => {
  return (
    <Container
      fluid
      className="mt-app-20 px-5 px-xl-0 bg-app-grayish-blue position-relative"
    >
      <span className={styles["bg-figure"]}></span>
      <Container fluid="xl" className="py-app-5">
        <Row>
          <Col
            lg={6}
            className="pt-app-4 order-2 order-lg-1 d-flex flex-column"
          >
            <CardDetails />
            <AboutCard />
          </Col>
          <Col lg={6} className="order-1 order-lg-2">
            <Image src="/assets/illustration-2.svg" fluid />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;

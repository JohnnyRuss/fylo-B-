import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface SubscribeType {}

const Subscribe: React.FC<SubscribeType> = (props) => {
  return (
    <Container
      fluid
      className="mt-app-8 px-5 px-xl-0 bg-app-desaturated-blue py-app-7"
    >
      <Container fluid="xl">
        <Row>
          <Col lg={6}>
            <h2 className="fs-app-h2 text-app-dark-blue fw-bold text-center text-lg-start">
              Get early access today
            </h2>
            <p className="mt-app-1 text-app-grayish-blue">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </Col>
          <Col lg={6}>
            <Form className="d-flex flex-column">
              <Form.Control
                type="email"
                placeholder="e-mail"
                className="p-3 fs-app-sm"
              />
              {false && (
                <Form.Text className="text-danger">
                  please check your email
                </Form.Text>
              )}
              <Button className="px-3 px-xl-5 py-2 text-capitalize fs-app-base w-xs-100 w-lg-max mt-3">
                get started for free
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Subscribe;

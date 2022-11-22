import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

interface HeroFormType {}

const HeroForm: React.FC<HeroFormType> = (props) => {
  return (
    <Form className="w-100 mt-4">
      <Row className="gy-4">
        <Col lg={8}>
          <Form.Control type="email" placeholder="E-mail" className="p-3" />
          {false && (
            <Form.Text className="text-danger">
              please check your email
            </Form.Text>
          )}
        </Col>
        <Col lg={4}>
          <Button className="px-3 px-xl-5 py-2 text-capitalize fs-app-base w-100 w-lg-auto">
            get started
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default HeroForm;

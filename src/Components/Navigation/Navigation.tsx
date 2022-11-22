import React from "react";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

interface NavigationType {}

const Navigation: React.FC<NavigationType> = (props) => {
  return (
    <NavBar expand={true}>
      <Container fluid="xl" className="text-white text-capitalize d-flex align-items-center px-5 px-xl-4 py-4">
        <NavBar.Brand>
          <img src="/assets/logo.svg" alt="fylo logo" width={110} />
        </NavBar.Brand>
        <NavBar.Collapse>
          <Nav className="gap-4 ms-auto text-app-dark-blue">
            {["features", "team", "sign in"].map((item) => (
              <Nav.Item className="cursor-pointer" key={item}>
                {item}
              </Nav.Item>
            ))}
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navigation;

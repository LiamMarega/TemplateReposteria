import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { bar3 } from "../../images/index";
import "./Seccion4.css";
function Seccion4() {
  return (
    <Container fluid className="LandingPage__Container_Row_Cuatro">
      <Container>
        <Row id="about">
          <Col md={4} xs={3} width={500}>
            <div className="containerProductos">
              <Image fluid src={bar3}></Image>
            </div>
          </Col>
          <Col md={4} xs={3} width={500}>
            <div className="containerProductos">
              <Image fluid src={bar3}></Image>
            </div>
          </Col>
          <Col md={4} xs={3} width={500}>
            <div className="containerProductos">
              <Image fluid src={bar3}></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Seccion4;

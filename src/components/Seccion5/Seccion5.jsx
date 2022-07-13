import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { bar2, bar3 } from "../../images/index";
import "./Seccion5.css";
function Seccion5() {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Row id="about" className="LandingPage__Container_Row_Cinco">
        <Col className="LogoImagenInfo" sm={12} md={6} xl={6}>
          <Image className="LogoImagenInfo" src={bar2}></Image>
          <h3>Horarios</h3> <p>6:00 am - 19:00 pm</p>
          <Image className="LogoImagenInfo" src={bar3}></Image>
          <h3>Horarios</h3> <p>Entre Ríos, Paraná.</p>
        </Col>

        <Col sm={12} md={6} xl={6}>
          <iframe
            className="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54285.58907590346!2d-60.55006831376418!3d-31.747313687934355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44df2b9835231%3A0x554ebde0aa5cfa9a!2zUGFyYW7DoSwgRW50cmUgUsOtb3M!5e0!3m2!1ses-419!2sar!4v1646352251697!5m2!1ses-419!2sar"
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Seccion5;

import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { FondoLogo } from "../../images/index";
import "./Seccion3.css";

function Seccion3() {
  return (
    <Container
      fluid
      style={{ margin: 0, padding: 0 }}
      className="LandingPage__Container_Row_Tres"
    >
      <Container>
        <Row id="about">
          <Col sm={12} md={6} xl={6}>
            <p>
              <br /> <br />
              En sus dos barras te ofrecerán una inmensa variedad de cócteles
              que son preparados por barman profesionales, licores variados,
              bebidas internacionales, nacionales y cerveza. Cuenta conun muy
              buen servicio al cliente, servicio de estacionamiento. <br />
              Si quieres pasar una noche inolvidable sin duda en Food & Drink
              con su estilo juvenil, la diversión es asegurada, la entrada es
              libre, losprecios son accesibles puedes tener una noche
              inolvidable y divertida.
            </p>
          </Col>
          <Col sm={12} md={6} xl={6}>
            <Image className="FondoLogoImagen" src={FondoLogo}></Image>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Seccion3;

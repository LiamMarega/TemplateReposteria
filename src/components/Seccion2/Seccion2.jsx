import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { LocalAnimado } from "../../images/index";
import "./Seccion2.css";
function Seccion2() {
  const handleOpen = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!",
      "_blank"
    );
  };

  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Row className="LandingPage__Container_Row_Dos">
        <Col xs={12} xl={12}>
          <Figure className="LandingPage__LogoBar">
            <Figure.Image
              className="FigureLocal"
              alt="LocalAnimado"
              src={LocalAnimado}
            />
          </Figure>
        </Col>

        <Col xs={12} xl={12}>
          <Container>
            <Col>
              <h2>LADO NORTE</h2>
              <p id="letraReposteria">Reposteria Paraná, Entre Ríos.</p>
              <p>
                {" "}
                El disco bar Food & Drink, ubicado en la zona rosa de Pereira,
                es uno de los locales mas climatizados el cual disfruta de un
                ambiente divertido con una decoración espectacular, suambiente
                moderno te asegura una noche divertida única y inolvidable.{" "}
              </p>
            </Col>
            <Col className="Col_Button">
              <button onClick={handleOpen} className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">¡Reserva Ahora!</span>
              </button>
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Seccion2;

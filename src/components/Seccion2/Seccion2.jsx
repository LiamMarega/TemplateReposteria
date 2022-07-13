import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { LocalAnimado } from "../../images/index";
import "./Seccion2.css";
function Seccion2({ handleOpen }) {
  return (
    <Container fluid className="LandingPage__Container_Row_Dos">
      <Container>
        <Row>
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
                  El disco bar Food & Drink, ubicado en la zona rosa de Pereira
                  , es uno de los locales mas climatizados el cual disfruta de
                  un ambiente divertido con una decoración espectacular,
                  suambiente moderno te asegura una noche divertida única y
                  inolvidable.
                  <br /> <br /> Su estructura se presenta como una obra 160
                  metros, por 90 metros aproximadamente capacidad
                  aproximadamente para 250 personas y unaespectacular
                  infraestructura en sonido, iluminación y video imagen. En Food
                  & Drink lo encontraras todo, Alta tecnología, decoración
                  vanguardista, son mezclas originales para que bailes desde tu
                  mesa oen la pista.
                </p>
              </Col>
              <Col className="Col_Button">
                <button onClick={handleOpen} className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Ver menu</span>
                </button>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Seccion2;

import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./Footer.css";
import { AiFillPhone, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { GiSuitcase } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <Container fluid className="LandingPage__Container_Row_Footer">
      <Container>
        <Row>
          <Col sm={12} xl={12}>
            <div className="centradoFooter">
              <ul className="FooterList">
                <a
                  href="https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <AiFillPhone /> CONTACTANOS
                  </li>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/empresasoluciones/"
                  rel="noreferrer"
                >
                  <li>
                    <ImLocation2 /> ENCONTRANOS
                  </li>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <GiSuitcase /> TRABAJA CON NOSOTROS
                  </li>
                </a>
                <a
                  href="mailto:liammarega85@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <AiFillMail /> CORREO
                  </li>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <AiFillInstagram /> INSTAGRAM
                  </li>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <IoLogoWhatsapp /> WHATSAPP
                  </li>
                </a>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  imgFacebookLogo,
  imgInstagramLogo,
  imgNavBar
} from "../../images/index.jsx";
import "./ContainerImage.css";

function ContainerImage() {
  const containerStyle = {
    backgroundImage: `url(${imgNavBar})`,
    backgroundAttachment: "fixed"
  };

  return (
    <Container
      style={containerStyle}
      fluid
      className="Landingpage__Container_image"
    >
      <Container>
        <Row id="home">
          <Container>
            <Col>
              <div className="Container_Landing__Letras">
                <div className="Landing__Letras">
                  <h1>Food & Drink</h1>
                  <h3>Pastelería, postres ¡y mucho más!</h3>
                </div>
                <div className="LandingRedes">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/empresasoluciones/"
                    rel="noreferrer"
                  >
                    <img
                      className="logos"
                      src={imgFacebookLogo}
                      width="30px"
                      alt="facebook"
                      loading="lazy"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/empresasoluciones/"
                    rel="noreferrer"
                  >
                    <img
                      className="logos"
                      src={imgInstagramLogo}
                      width="30px"
                      alt="imgInstagramLogo"
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Container>
        </Row>
      </Container>
    </Container>
  );
}

export default ContainerImage;

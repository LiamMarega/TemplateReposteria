import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Landingpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { fadeIn } from "react-animations";
import {
  imgFacebookLogo,
  imgInstagramLogo,
  imgNavBar,
  LocalAnimado,
  FondoLogo,
  bar2,
  bar3,
  torta1,
  torta2,
  torta3,
} from "../../images/index.jsx";

import {
  Container,
  Row,
  Col,
  Image,
  Figure,
  Nav,
  Navbar,
  Spinner,
  Ratio,
} from "react-bootstrap";

import {
  AiFillPhone,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,
} from "react-icons/ai";
import { GiSuitcase } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

function Landingpage() {
  const [navBarBackground, setNavBarBackgorund] = useState(false);
  const [loading, setLoading] = useState(true);

  const changeBackground = () => {
    if (screen.width < 1500) {
      if (window.scrollY >= 10) {
        setNavBarBackgorund(true);
      }
    } else if (window.scrollY >= 790) {
      setNavBarBackgorund(true);
    } else {
      setNavBarBackgorund(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const containerStyle = {
    backgroundImage: `url(${imgNavBar})`,
    backgroundAttachment: `fixed`,
  };

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <>
      <Container
        fluid={+true}
        className={loading ? "loading true" : "loading false"}
      >
        <Spinner animation="grow" variant="light" />
      </Container>
      <Container fluid={+true} className="LandingPage__Container">
        <Navbar fixed="top">
          <Container
            className={navBarBackground ? "navbar active" : "navbar false"}
            fluid={+true}
          >
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              duration={1000}
              delay={100}
            >
              <Navbar.Brand>F&D</Navbar.Brand>
            </Link>

            <Nav className="me-auto">
              <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={1000}
                delay={100}
              >
                <Nav>Inicio</Nav>
              </Link>
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={1000}
                delay={100}
              >
                <Nav>Sobre Nosotros</Nav>
              </Link>
              <Link
                activeClass="active"
                to="photos"
                smooth={true}
                duration={1000}
                delay={100}
              >
                <Nav>Fotos</Nav>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Row id="home" fluid={+true} className="LandingPage__Container_NavBar">
          <Col style={containerStyle} className="Landingpage__Container_image">
            <div className="Container_Landing__Letras">
              <div className="Landing__Letras">
                <h1>Food & Drink</h1>
                <h3>Pastelería, postres ¡y mucho más!</h3>
              </div>
              <div className="LandingRedes">
                <a
                  target="_blank"
                  href="https://www.instagram.com/empresasoluciones/"
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
        </Row>
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
            <h2>LADO NORTE</h2>
            <p id="letraReposteria">Reposteria Parana, Entre Ríos.</p>
            <p>
              Según Wikipedia, un párrafo es un discurso contenido en una unidad
              de texto que comparte una misma idea o punto de vista. Un párrafo
              se compone de una o más frases. Aunque se contempla como norma en
              ningún idioma, los párrafos se emplean en la escritura formal para
              organizar textos extensos.
            </p>
            <a href="https://portfolio-liammarega.netlify.app/">
              <p>Portfolio</p>
            </a>
          </Col>
        </Row>

        <Row
          fluid={+true}
          id="about"
          className="LandingPage__Container_Row_Cuatro"
        >
          <Col sm={12} md={6} xl={6}>
            <p>
              El disco bar Food & Drink, ubicado en la zona rosa de Pereira , es
              uno de los locales mas climatizados el cual disfruta de un
              ambiente divertido con una decoración espectacular, suambiente
              moderno te asegura una noche divertida única y inolvidable. Su
              estructura se presenta como una obra 160 metros, por 90 metros
              aproximadamente capacidad aproximadamente para 250 personas y
              unaespectacular infraestructura en sonido, iluminación y video
              imagen. En Food & Drink lo encontraras todo, Alta tecnología,
              decoración vanguardista, son mezclas originales para que bailes
              desde tu mesa oen la pista.
              <br /> <br />
              En sus dos barras te ofrecerán una inmensa variedad de cócteles
              que son preparados por barman profesionales, licores variados,
              bebidas internacionales, nacionales y cerveza. Cuenta conun muy
              buen servicio al cliente, servicio de estacionamiento. Si quieres
              pasar una noche inolvidable sin duda en Food & Drink con su estilo
              juvenil, la diversión es asegurada, la entrada es libre,
              losprecios son accesibles puedes tener una noche inolvidable y
              divertida.
            </p>
          </Col>
          <Col sm={12} md={6} xl={6}>
            <Image className="FondoLogoImagen" src={FondoLogo}></Image>
          </Col>
        </Row>

        <Row
          fluid={+true}
          id="about"
          className="LandingPage__Container_Row_Cinco"
        >
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

        {/*<Row id="photos" className="LandingPage__Container_Row_Cinco">
          <Col xs={12} sm={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={torta1}
                rounded
                roundedCircle
              />
            </a>
          </Col>
          <Col xs={12} sm={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={torta1}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col xs={12} sm={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={torta1}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={torta1}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={torta1}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={torta1}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={torta1}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
          <Col className="imgOcultar" xs={12} xl={3}>
            <a
              target="_blank"
              href="https://www.instagram.com/empresasoluciones/"
            >
              {" "}
              <Image
                loading="lazy"
                className="imgHover"
                src={torta1}
                rounded
                roundedCircle
              />{" "}
            </a>
          </Col>
        </Row>*/}
        <Row
          fluid={+true}
          id="about"
          className="LandingPage__Container_Row_Siete"
        >
          <Col sm={12} md={6} xl={6}>
            <Ratio aspectRatio="1x1">
              <Image className="ImagenTorta1" src={torta1}></Image>
            </Ratio>
          </Col>

          <Col className="ImagenTorta2" sm={12} md={3} xl={3}>
            <Ratio aspectRatio="1x1">
              <Image className="ImagenTorta2" src={torta2}></Image>
            </Ratio>
            <Ratio aspectRatio="1x1">
              <Image className="ImagenTorta2" src={torta3}></Image>
            </Ratio>
          </Col>
        </Row>
        <Row fluid={+true} className="LandingPage__Container_Row_Footer">
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
    </>
  );
}

export default Landingpage;

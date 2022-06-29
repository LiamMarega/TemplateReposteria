import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import { FondoLogo } from '../../images/index';
import './Seccion3.css';

function Seccion3() {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Row id='about' className='LandingPage__Container_Row_Tres'>
        <Col sm={12} md={6} xl={6}>
          <p>
            El disco bar Food & Drink, ubicado en la zona rosa de Pereira , es uno de los locales mas climatizados el cual disfruta de un ambiente divertido con una decoración espectacular, suambiente moderno te asegura una noche divertida única y inolvidable. Su estructura se presenta como una obra 160 metros, por 90 metros aproximadamente capacidad aproximadamente para 250 personas y
            unaespectacular infraestructura en sonido, iluminación y video imagen. En Food & Drink lo encontraras todo, Alta tecnología, decoración vanguardista, son mezclas originales para que bailes desde tu mesa oen la pista.
            <br /> <br />
            En sus dos barras te ofrecerán una inmensa variedad de cócteles que son preparados por barman profesionales, licores variados, bebidas internacionales, nacionales y cerveza. Cuenta conun muy buen servicio al cliente, servicio de estacionamiento. Si quieres pasar una noche inolvidable sin duda en Food & Drink con su estilo juvenil, la diversión es asegurada, la entrada es libre,
            losprecios son accesibles puedes tener una noche inolvidable y divertida.
          </p>
        </Col>
        <Col sm={12} md={6} xl={6}>
          <Image className='FondoLogoImagen' src={FondoLogo}></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default Seccion3;

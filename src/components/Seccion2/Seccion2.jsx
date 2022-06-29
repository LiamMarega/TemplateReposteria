import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { LocalAnimado } from '../../images/index';
import './Seccion2.css';
function Seccion2({ handleOpen }) {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Row className='LandingPage__Container_Row_Dos'>
        <Col xs={12} xl={12}>
          <Figure className='LandingPage__LogoBar'>
            <Figure.Image className='FigureLocal' alt='LocalAnimado' src={LocalAnimado} />
          </Figure>
        </Col>

        <Col xs={12} xl={12}>
          <Container>
            <Col>
              <h2>LADO NORTE</h2>
              <p id='letraReposteria'>Reposteria Paraná, Entre Ríos.</p>
              <p>Según Wikipedia, un párrafo es un discurso contenido en una unidad de texto que comparte una misma idea o punto de vista. Un párrafo se compone de una o más frases. Aunque se contempla como norma en ningún idioma, los párrafos se emplean en la escritura formal para organizar textos extensos.</p>
            </Col>
            <Col className='Col_Button'>
              <button onClick={handleOpen} className='learn-more'>
                <span className='circle' aria-hidden='true'>
                  <span className='icon arrow'></span>
                </span>
                <span className='button-text'>Ver menu</span>
              </button>
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Seccion2;

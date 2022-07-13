import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Row, Col } from "react-bootstrap";
import {
  Galeria1,
  Galeria2,
  Galeria3,
  Galeria4,
  Galeria5,
  Galeria6,
  Galeria7,
  Galeria8
} from "../../images/index.jsx";

function GaleriaFotos() {
  const itemData = [
    {
      img: Galeria1,
      title: "Breakfast",
      rows: 2,
      cols: 2
    },
    {
      img: Galeria2,
      title: "Burger"
    },
    {
      img: Galeria3,
      title: "Camera"
    },
    {
      img: Galeria4,
      title: "Coffee",
      cols: 2
    },
    {
      img: Galeria5,
      title: "Hats",
      cols: 2
    },
    {
      img: Galeria6,
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2
    },
    {
      img: Galeria7,
      title: "Basketball"
    },
    {
      img: Galeria8,
      title: "Fern"
    }
  ];

  const handleOpen = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!",
      "_blank"
    );
  };

  function srcset(image, size, rows = 2, cols = 2) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`
    };
  }

  return (
    <div>
      <Row fluid id="photos" className="LandingPage__Container_Row_Siete">
        <Col sm={12} className="Container_Col_Images">
          <ImageList
            sx={{ width: "100%", height: "50%" }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 500, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Col>
        <Col sm={12}>
          <button onClick={handleOpen} className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">¡Resera ahora!</span>
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default GaleriaFotos;

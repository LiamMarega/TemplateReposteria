import React, { useState } from "react";
import "./Landingpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImgMenu } from "../../images/index.jsx";
import { Container, Image } from "react-bootstrap";

/* Material UI */

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import NavBar from "../NavBar/NavBar";
import ContainerImage from "../ContainerImage/ContainerImage";
import Seccion2 from "../Seccion2/Seccion2";
import Seccion3 from "../Seccion3/Seccion3";
import Seccion4 from "../Seccion4/Seccion4";
import Footer from "../Footer/Footer";
import GaleriaFotos from "../GaleriaFotos/GaleriaFotos";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 400,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function Landingpage() {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  return (
    <Container fluid style={{ padding: 0 }}>
      {/* Modal Menu */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseMenu}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Image src={ImgMenu} width="100%" />
          </Box>
        </Fade>
      </Modal>

      <Container fluid style={{ padding: 0 }}>
        {/* NavBar */}
        <NavBar handleOpenMenu={handleOpenMenu} />
        {/* SECCION Image 1 */}
        <ContainerImage />
        {/* SECCION Image 2 */}
        <Seccion2 />
        {/* SECCION Image 3 */}
        <Seccion3 />
        {/* SECCION Image 4 */}
        <Seccion4 />
        {/* SECCION 5 Galeria */}
        <GaleriaFotos />
        {/* SECCION Footer */}
        <Footer />
      </Container>
    </Container>
  );
}

export default Landingpage;

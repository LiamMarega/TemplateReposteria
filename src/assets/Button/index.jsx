import React from "react";
import "./index.css";

function Button() {
  const handleOpen = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!",
      "_blank"
    );
  };

  return (
    <div>
      <button onClick={handleOpen} className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Ver menu</span>
      </button>
    </div>
  );
}

export default Button;

import React from "react";

export const TopContactComponent = () => {
  return (
    <section className="top-contact">
      <div className="container clearfix">
        <div className="top-contact--left pull-left">
          <span> Mail: ventas@aluplast.com.ar</span>
          <span> Telefono: 03446 48-0213</span>
        </div>
        <div className="top-contact--right pull-right">
          <a href="https://www.facebook.com/AluplastAberturas" target="_blank">
            <i className="zmdi zmdi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/aluplast.aberturas/"
            target="_blank"
          >
            <i className="zmdi zmdi-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@aluplastmedia" target="_blank">
            <i className="zmdi zmdi-youtube"></i>
          </a>
          <a href="https://wa.me/+5493446598417" target="_blank">
            <i className="zmdi zmdi-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

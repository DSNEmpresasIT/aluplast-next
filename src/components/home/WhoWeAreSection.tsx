import React from "react";
import Image from "next/image";

const WhoWeAreSection = () => {
  return (
    <section
      className="we-are"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="we-are__left">
              <div className="top">
                <div className="we-are__item">
                  <img title="Imagenes complementarias a la sección de quienes somos" alt="Quienes somos imagen 1" src="/img/whoweare/we-are-01.jpg" />
                </div>
                <div className="we-are__item mt-xl-5">
                  <img title="Imagenes complementarias a la sección de quienes somos" alt="Quienes somos imagen 2" src="/img/whoweare/we-are-02.jpg" />
                </div>
              </div>
              <div className="bottom d-none d-xl-block">
                <div className="we-are__item">
                  <img title="Imagenes complementarias a la sección de quienes somos" alt="Quienes somos imagen 3" src="/img/whoweare/we-are-03.jpg" />
                </div>
                <div className="we-are__item">
                  <img title="Imagenes complementarias a la sección de quienes somos" alt="Quienes somos imagen 4" src="/img/whoweare/we-are-04.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="we-are__right">
              <h2 className="title--small">Somos Aluplast</h2>

              <h5>Innovación en Aberturas de Aluminio y PVC</h5>
              <p className="m-b-10">
                ALUPLAST es una empresa familiar dedicada, desde los años '70, a
                la Fabricación y Comercialización de Aberturas de Aluminio y
                otros, siendo una de las pioneras en la provincia. En la
                actualidad, la Fábrica cuenta con más de 4000 m2 cubiertos
                destinados a la fabricación de aberturas standard y a medida,
                cinco salones comerciales y de exposición con las últimas
                novedades del mercado en Urdinarrain, Gualeguaychú, Concepción
                del Uruguay, Colón y Concordia, y un equipo de más de 80
                personas que nos permiten brindarle asesoramiento profesional.
              </p>
              <p>
                En Aluplast, lideramos el mercado con aberturas de la más alta
                calidad. Nuestra pasión por el diseño y la dedicación a la
                excelencia garantizan soluciones excepcionales para espacios
                inspiradores y funcionales. Descubra la distinción y durabilidad
                que solo Aluplast puede ofrecer. Bienvenidos a un mundo de
                innovación en aberturas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;

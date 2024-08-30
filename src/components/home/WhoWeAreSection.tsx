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
              <h2 className="title--small">Conocé la calidad de nuestros productos</h2>

              <h5>Soluciones de de Aluminio y PVC</h5>
              <p className="m-b-10">
                Aluplast es una empresa familiar fundada en los años '70, dedicada a la fabricación y comercialización de aberturas de aluminio.
                Con más de 4000 m² cubiertos para producción y cinco salones comerciales en varias ciudades, somos líderes en el mercado. 
              </p>
              <p>
              Contamos con un equipo de más de 80 personas que ofrecen asesoramiento profesional.
              En Aluplast, nuestra pasion por el diseño y la excelencia nos permite ofrecer aberturas de las alta calidad, garantizando soluciones innovadoras y duraderas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;

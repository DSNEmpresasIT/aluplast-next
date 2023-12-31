import React from "react";

const OurProcessSection = () => {
  return (
    <section className="our-process2">
      <div className="overlay overlay--light"></div>
      <div className="parallax parallax--our-process2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title title-3 title--light">
                La calidad se traduce en 4 acciones:
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="our-process2__item wow zoomIn">
                <h4>
                  <span>01</span>
                  Intención:
                </h4>
                <p>
                  Exceder expectativas con aberturas de Aluminio y PVC de máxima
                  calidad y satisfacción del cliente.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="our-process2__item wow zoomIn" data-wow-delay=".2s">
                <h4>
                  <span>02</span>
                  Esfuerzo:
                </h4>
                <p>
                  Compromiso total en cada etapa de producción para asegurar
                  aberturas duraderas y funcionales.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="our-process2__item wow zoomIn" data-wow-delay=".4s">
                <h4>
                  <span>03</span>
                  Dirección:
                </h4>
                <p>
                  Liderazgo en innovación, tecnología y diseño para ofrecer
                  aberturas de Aluminio y PVC de excelencia.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="our-process2__item wow zoomIn" data-wow-delay=".6s">
                <h4>
                  <span>04</span>
                  Ejecución:
                </h4>
                <p>
                  Precisión meticulosa en cada detalle para entregar aberturas
                  sofisticadas, funcionales y de calidad excepcional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;

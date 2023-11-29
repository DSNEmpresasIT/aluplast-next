import { PAGES_PATH } from '@/utils/pages';
import React from 'react'

const OurContactSection = () => {
  const partners: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <section className="service-list">
      <div className="contact2">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-12">
              <div className="contact2__item">
                <p style={{ color: '#555555' }}>Estemos en contacto</p>
                <div>
                  <a
                    href={`/${PAGES_PATH.CONTACT_PATH}`}
                    className="au-btn au-btn--pill au-btn--yellow au-btn--medium"
                    style={{ color: 'white' }}>Contacto</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="partner-wrap1 owl-carousel owl-theme" id="owl-partner-2">
                {
                  partners.map((img, i) => (
                    <a key={`${i}-ourcontactsection-key`} type="button" className="partner__item item">
                      <img alt="Distribuitor" src={`/img/partners/${i + 1}.png`} />
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurContactSection;

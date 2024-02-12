import React from 'react'
import { Metadata } from 'next';

import { PAGES } from '@/utils/pages';
import { InfoSection } from '@/components/contact/InfoSection';
import FormContact from '@/components/contact/FormContact';

export const metadata: Metadata = {
  title: PAGES.CONTACT,
  description: '¡Conecta con nosotros! En Aluplast, te ofrecemos soluciones personalizadas en aberturas de aluminio. Completa el formulario de contacto y descubre cómo podemos ayudarte a transformar tus proyectos con productos de alta calidad y diseño único. Estamos aquí para brindarte asesoramiento experto. ¡Contáctanos ahora!',
  alternates: {
    canonical: 'https://aluplast.com.ar/contacto-aluplast-entre-rios-argentina'
  }
}

const Contact = () => {
  return (
    <div className="page-wrap">
      <section className="navigation">
        <div 
          className="parallax parallax--nav-2"
          style={{ backgroundImage: 'url(/img/contact-banner.jpg)'}}  
        >
          <div className="container clearfix">
            <div className="row">
              <div className="col-md-12">
                <h2 style={{ textTransform: 'none' }}>Contacto</h2>
                <ul className="breadcrumbs ul--inline ul--no-style">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <span>/</span>
                  <li className="active">Contacto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfoSection />
      <section className="contact-content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6716.896210460304!2d-58.8893424!3d-32.6741277!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95baa828f2d32b47%3A0xbe4d5bd6a4354bd!2sAluplast%20SRL!5e0!3m2!1ses!2sar!4v1691100660476!5m2!1ses!2sar"
                className='contact-map-styles'
                loading="lazy" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-contact-wrap">
              <h4>Mandanos un mensaje</h4>
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact;

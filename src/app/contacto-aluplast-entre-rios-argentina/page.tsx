import FormContact from '@/components/contact/FormContact';
import { InfoSection } from '@/components/contact/InfoSection';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Mantengamos el contacto.',
  keywords: 'contacto, aluplast, formulario, mail, input, aluminio, pvc'
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

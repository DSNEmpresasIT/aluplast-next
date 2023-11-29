import React from 'react'

export const InfoSection = () => {
  const InfoSectionData = {
    title: 'Aluplast Planta Industrial',
    address: 'RP20, E2826, Urdinarrain, E.R.',
    phone: '03446 48-0213',
    mail: 'ventas@aluplast.com.ar'
  }

  return (
    <section className="contact-info pt-5" style={{ minHeight: '15vh', borderTop: '3px solid #0a75ba' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h5 >{InfoSectionData.title}</h5>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://www.google.com/maps/dir//Aluplast+SRL+RP20+E2826+Urdinarrain+Entre+R%C3%ADos/@-32.6741277,-58.8821895,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x95baa828f2d32b47:0xbe4d5bd6a4354bd" target="_blank" className="p-t-30">
              <i className="fa fa-home m-r-8"></i>
              {InfoSectionData.address}
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://api.whatsapp.com/send?phone=543446374867&text=" target="_blank" className="p-t-30">
              <i className="fa fa-phone m-r-8"></i>
              {InfoSectionData.phone}
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a className="p-t-30">
              <i className="fa fa-envelope m-r-8"></i>
              {InfoSectionData.mail}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

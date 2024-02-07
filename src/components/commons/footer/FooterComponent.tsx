'use client'
import React from 'react'
import { InstagramVideoFooter } from './InstagramFooterVideo'
import { InstagramGalleryFooter } from './InstagramFooterGallery'
import Image from 'next/image'

export const FooterComponent = () => {
  const footerDirectionsData = [
    {
      title: 'Aluplast Planta Industrial',
      phone: '03446 48-0213',
      addressLink: 'https://www.google.com/maps/dir//Aluplast+SRL,+RP20,+E2826+Urdinarrain,+Entre+R%C3%ADos/@-32.6741277,-58.8893424,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95baa828f2d32b47:0xbe4d5bd6a4354bd!2m2!1d-58.8821592!2d-32.6742357?entry=ttu'
    },
    {
      title: 'Showroom Gualeguaychú',
      phone: '03446-424528',
      addressLink: 'https://www.google.com/maps/dir//Aluplast+Gch%C3%BA,+Primera+Junta+355,+E2820+Gualeguaych%C3%BA,+Entre+R%C3%ADos/@-33.0035098,-58.5225584,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95b0078f348da473:0xa5d7f6419b16d6be!2m2!1d-58.5217726!2d-33.0035098?entry=ttu'
    },
    {
      title: 'Showroom C. Del Uruguay',
      phone: '03442-448001',
      addressLink: "https://www.google.com/maps/dir//Aluplast+CdelU,+Blvd.+D%C3%ADaz+V%C3%A9lez+36,+E3260+Concepci%C3%B3n+del+Uruguay,+Entre+R%C3%ADos/@-32.4875399,-58.2526592,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95afdbaa09862079:0x3036262b8f0e3377!2m2!1d-58.2498133!2d-32.4871794?entry=ttu"
    },
    {
      title: 'Showroom Concordia',
      phone: '+54 3446 507870',
      addressLink: "https://www.google.com/maps/dir//Aluplast+Concordia,+V%C3%A9lez+S%C3%A1rsfield+569,+E3200+Concordia,+Entre+R%C3%ADos/@-31.3921086,-58.0321345,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95ade9dedca803db:0xb117322bf10cb2fe!2m2!1d-58.0295596!2d-31.3921132?entry=ttu"
    },
    {
      title: 'Sucursal Colón',
      addressLink: 'https://www.google.com/maps/dir//Gral.+Paz+114,+E3280+Col%C3%B3n,+Entre+R%C3%ADos,+Argentina/@-32.2226009,-58.1462154,16.69z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95ae32e2a97b34e5:0x5a47a069e343ba2!2m2!1d-58.1439609!2d-32.222506?entry=ttu',
      phone: '03447-427831',
    }
  ]

  return (
    <footer className="footer-3">
      <div className="section-content section-content--w1140">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <InstagramVideoFooter instagramToken={process.env.INSTAGRAM_TOKEN}/>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="title-footer m-b-26">Información de contacto</h5>
              {
                footerDirectionsData.map(info => {
                  return (
                  <div 
                    key={info.phone}
                    style={{
                      color: 'white', 
                      display: 'flex', 
                      flexDirection: 'column',
                      marginBottom: '5px', 
                      borderBottom: '1px solid #444444'
                    }}
                  >
                    <a title="botón footer">
                      <i style={{color: "#0a75ba"}} className="fa fa-home" aria-hidden="true"></i>
                      {" "}
                      {info.title}
                    </a>
                    <a title="botón footer" 
                      style={{color: "white"}}
                      href={info.addressLink}
                      target="_blank"
                    >
                      <i className="fa fa-map" style={{color: "#0a75ba"}} aria-hidden="true"></i>
                      {" "}
                      Google Maps
                    </a>
                    <a title="botón footer" style={{color: "white"}}>
                      <i style={{color: "#0a75ba"}} className="fa fa-phone" aria-hidden="true"></i>
                      {" "}
                      {info.phone}
                    </a>
                  </div>
                  )
                })
              }
            </div>
            <InstagramGalleryFooter  instagramToken={process.env.INSTAGRAM_TOKEN} />
          </div>
          <div className="copyright-2">
            <div>
              <p><span>Aluplast</span>, Fábrica de Aberturas de Aluminio &copy; 2023 <a title="botón footer" href="https://www.dsnempresas.com.ar/" target="_blank"><span>powered by <Image src="/img/dsn.png" width={30} height={30} sizes="maxHeight: 33px" alt="dsn" /></span></a><a title="botón footer" target="_blank"><span></span></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { PAGES_PATH } from '@/utils/pages'
import { ProductFathersTypes } from '@/utils/types'
import Link from 'next/link'
import React from 'react'

const OurBestProductsSection = () => {
  return (
    <section className="service">
      <div className="service-wrap" style={{ backgroundColor: '#343434' }}>
        <div className="service__item service__intro">
          <div className="service__item-inner">
            <h3>
              <span>Algunos de</span>
              <br /> nuestros productos
            </h3>
            <p>
              En Alplast, te presentamos nuestra selección de excelencia en aberturas y cerramientos de aluminio. 
              <br />
              Productos de calidad que transformarán tu espacio.
            </p>
            <div>
              <Link href={PAGES_PATH.CATALOG_PATH} className="au-btn au-btn--big au-btn--pill au-btn--white au-btn--border au-btn--big">Ver todos</Link>
            </div>
          </div>
        </div>
        <Link href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { categoria: ProductFathersTypes.CS_TYPES } }} className="service__item" style={{backgroundImage: "url('/img/products/courtainwall/courtainwall.png')" }}>
          <div className="service__item-inner">
            <img alt="Icon 1" src="/img/icon/icon-service-01.png" />
            <h4>COMPLEMENTOS</h4>
          </div>
        </Link>
        <Link href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { categoria: ProductFathersTypes.OPENERS_TYPES } }} className="service__item" style={{ backgroundImage: "url('/img/products/puertarebatir/puertarebatir.png')" }}>
          <div className="service__item-inner">
            <img alt="Icon 2" src="/img/icon/icon-service-02.png" />
            <h4>PUERTAS</h4>
          </div> 
        </Link>
        <Link href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { categoria: ProductFathersTypes.OPENERS_TYPES } }} className="service__item" style={{ backgroundImage: "url('/img/products/banderola/banderola.png')" }}>
          <div className="service__item-inner">
            <img alt="Icon 3" src="/img/icon/icon-service-03.png" />
            <h4>VENTANAS</h4>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default OurBestProductsSection;

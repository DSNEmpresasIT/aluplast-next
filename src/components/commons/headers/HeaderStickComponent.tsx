import { PAGES_PATH } from '@/utils/pages'
import { ProductFathersTypes } from '@/utils/types'
import Link from 'next/link'
import React from 'react'

export const HeaderStickComponent = () => {
  return (
    <header className="header-stick header-stick--dark">
      <div className="container clearfix">
        <h1 className="logo pull-left">
          <a href="/">
            <img alt="Logo" src="/img/logo-white.png" />
          </a>
        </h1>
        <nav className="menu-desktop pull-right">
        <ul className="ul--inline ul--no-style">
            <li className="li-has-sub">
              <a href="/"> Home</a>
            </li>
            <li className="li-has-sub">
              <Link href={`/${PAGES_PATH.CATALOG_PATH}`}> Productos</Link>
              <ul className="sub-menu ul--no-style">
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.OPENERS_TYPES}`}
                  >
                    Aberturas
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.CLOSERS_TYPES}`}
                  >
                    Cerramientos
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.CS_TYPES}`}
                  >
                    Sistemas Complementarios
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.GARAGE_DOORS}`}
                  >
                    Portones Garage
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.WINDOWS}`}
                  >
                    Vidrios
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.SOLAR_CONTROL}`}
                  >
                    Control Solar
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.RESALES}`}
                  >
                    Reventa
                  </a>
                </li>
                {/* <li>
                  <a href={`/${PAGES_PATH.CATALOG_PATH}/texturas`}> Texturas</a>
                </li> */}
              </ul>
            </li>
            <li>
              <Link href={`/${PAGES_PATH.NEWS_PATH}`}> Noticias</Link>
            </li>
            <li>
              <Link href={`/${PAGES_PATH.SOME_PROJECTS}`}> Proyectos</Link>
            </li>
            <li>
              <Link href={`/${PAGES_PATH.CONTACT_PATH}`}> Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

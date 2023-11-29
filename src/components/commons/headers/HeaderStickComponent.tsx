import { PAGES_PATH } from '@/utils/pages'
import { ProductFathersTypes } from '@/utils/types'
import Link from 'next/link'
import React from 'react'

export const HeaderStickComponent = () => {
  return (
    <header className="header-stick header-stick--dark">
      <div className="container clearfix">
        <h1 className="logo pull-left">
          <Link href="/">
            <img alt="Logo" src="/img/logo-white.png" />
          </Link>
        </h1>
        <nav className="menu-desktop pull-right">
          <ul className="ul--inline ul--no-style">
            <li className="li-has-sub">
              <Link href="/"> Home</Link>
            </li>
            <li className="li-has-sub">
              <Link href={`/${PAGES_PATH.CATALOG_PATH}`}> Productos</Link>
              <ul className="sub-menu ul--no-style">
                <li>
                  <Link
                    href={`/${PAGES_PATH.CATALOG_PATH}/${ProductFathersTypes.OPENERS_TYPES}`}
                  >
                    Aberturas
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${PAGES_PATH.CATALOG_PATH}/${ProductFathersTypes.CLOSERS_TYPES}`}
                  >
                    Cerramientos
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${PAGES_PATH.CATALOG_PATH}/${ProductFathersTypes.CS_TYPES}`}
                  >
                    Sistemas Complementarios
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${PAGES_PATH.CATALOG_PATH}/${ProductFathersTypes.GARAGE_DOORS}`}
                  >
                    Portones Garage
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${PAGES_PATH.CATALOG_PATH}/${ProductFathersTypes.WINDOWS}`}
                  >
                    Vidrios
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${PAGES_PATH.CATALOG_PATH}/${ProductFathersTypes.SOLAR_CONTROL}`}
                  >
                    Control Solar
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${PAGES_PATH.CATALOG_PATH}/${ProductFathersTypes.RESALES}`}
                  >
                    Reventa
                  </Link>
                </li>
                <li>
                  <Link href={`/${PAGES_PATH.CATALOG_PATH}/texturas`}> Texturas</Link>
                </li>
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

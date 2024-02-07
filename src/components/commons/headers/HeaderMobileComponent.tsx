import { PAGES_PATH } from "@/utils/pages";
import { ProductFathersTypes } from "@/utils/types";
import Link from "next/link";
import React from "react";

export const HeaderMobileComponent = () => {
  return (
    <header className="header-mobile">
      <div className="container clearfix">
        <h1 className="logo pull-left">
          <a href="/">
            <img alt="Logo" src="/img/logo.png" />
          </a>
        </h1>
        <a  className="menu-mobile__button">
          <i className="fa fa-bars"></i>
        </a>
        <nav className="menu-mobile hidden">
          <ul className="ul--no-style">
            <li className="li-has-sub">
              <a href="/" title="Visitar home"> Home</a>
            </li>
            <li className="li-has-sub">
              <Link href={`/${PAGES_PATH.CATALOG_PATH}`} title="Visitar Productos"> Productos</Link>
              <ul className="sub-menu ul--no-style">
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.OPENERS_TYPES}`}
                    title="Visitar Productos"
                  >
                    Aberturas
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.CLOSERS_TYPES}`}
                    title="Visitar Productos"
                  >
                    Cerramientos
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.CS_TYPES}`}
                    title="Visitar Productos"
                  >
                    Sistemas Complementarios
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.GARAGE_DOORS}`}
                    title="Visitar Productos"
                  >
                    Portones Garage
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.WINDOWS}`}
                    title="Visitar Productos"
                  >
                    Vidrios
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.SOLAR_CONTROL}`}
                    title="Visitar Productos"
                  >
                    Control Solar
                  </a>
                </li>
                <li>
                  <a
                    href={`${PAGES_PATH.CATALOG_PATH}?categoria=${ProductFathersTypes.RESALES}`}
                    title="Visitar Productos"
                  >
                    Reventa
                  </a>
                </li>
                <li>
                  <a href={PAGES_PATH.TEXTURES} title="Visitar Texturas"> Texturas</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href={`/${PAGES_PATH.NEWS_PATH}`} title="Visitar ultimas noticias"> Noticias</Link>
            </li>
            <li>
              <Link href={`/${PAGES_PATH.SOME_PROJECTS}`} title="Visitar proyectos"> Proyectos</Link>
            </li>
            <li>
              <Link href={`/${PAGES_PATH.CONTACT_PATH}`} title="Visitar contacto"> Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

import { PAGES_PATH } from "@/utils/pages";
import { ProductFathersTypes } from "@/utils/types";
import Link from "next/link";
import React from "react";

export const HeaderDesktopComponent = () => {
  return (
    <header
      className="header-desktop header2 header--bg-dark"
      style={{top: "inherit"}}
    >
      <div className="container clearfix">
        <h1 className="logo pull-left">
          <Link href="index.html">
            <img alt="Logo" src="/img/logo-white.png" />
          </Link>
        </h1>
        <nav className="menu-desktop menu-desktop--show pull-right">
          <ul className="ul--inline ul--no-style">
            <li className="li-has-sub">
              <a href="/"> Home</a>
            </li>
            <li className="li-has-sub">
              <Link href={`/${PAGES_PATH.CATALOG_PATH}`}> Productos</Link>
              <ul className="sub-menu ul--no-style">
                <li>
                  <Link
                    href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { category: ProductFathersTypes.OPENERS_TYPES } }}
                  >
                    Aberturas
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { category: ProductFathersTypes.CLOSERS_TYPES } }}
                  >
                    Cerramientos
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { category: ProductFathersTypes.CS_TYPES } }}
                  >
                    Sistemas Complementarios
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { category: ProductFathersTypes.GARAGE_DOORS } }}
                  >
                    Portones Garage
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { category: ProductFathersTypes.WINDOWS } }}
                  >
                    Vidrios
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { category: ProductFathersTypes.SOLAR_CONTROL } }}
                  >
                    Control Solar
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: PAGES_PATH.CATALOG_PATH, query: { category: ProductFathersTypes.RESALES } }}
                  >
                    Reventa
                  </Link>
                </li>
                {/* <li>
                  <Link href={`/${PAGES_PATH.CATALOG_PATH}/texturas`}> Texturas</Link>
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
  );
};

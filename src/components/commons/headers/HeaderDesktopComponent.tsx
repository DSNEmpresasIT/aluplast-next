import { navData } from "@/utils/data/navdata";
import { PAGES, PAGES_PATH } from "@/utils/pages";
import { ProductFathersTypes } from "@/utils/types";
import Link from "next/link";
import React from "react";
import { CartNavComponent } from "./CartNavComponent";

export const HeaderDesktopComponent = () => {
  return (
    <header
      className="header-desktop header2 header--bg-dark"
      style={{top: "inherit" }}
    >
      <div className="container clearfix">
        <h1 className="logo pull-left">
          <a href="/">
            <img alt="aluplast-logo" title="logo Aluplast - fábrica de aberturas de aluminio" src="/img/logo.png" />
          </a>
        </h1>
        <nav className="menu-desktop menu-desktop--show pull-right d-flex">
          <ul className="ul--inline ul--no-style">
            <li className="li-has-sub">
              <a href={PAGES_PATH.HOME_PATH} title="Home - Aluplast"> Home</a>
            </li>
            {
              navData.map((data, index: number) => {
                return (
                  <li className={data.subPages ? "li-has-sub" : ''} key={`header-desktop-key-${index}`}>
                    <Link title={`Visitar ${data.label.toLocaleLowerCase()}`} href={data.link}>{data.label}</Link> 
                    {
                      data.subPages && (
                        <ul className="sub-menu ul--no-style">
                          {
                            data.subPages.map((sub, index: number) => {
                              return (
                                <li key={`header-desktop-sub-key-${index}`}>
                                  <Link 
                                    title={`Visitar ${sub.label.toLocaleLowerCase()}`} 
                                    href={{ pathname: sub.link, query: { categoria: sub.query?.query } }}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      )
                    }
                  </li>
                )
              })
            }
          </ul>
          {/* <CartNavComponent /> */}
        </nav>
      </div>
    </header>
  );
};

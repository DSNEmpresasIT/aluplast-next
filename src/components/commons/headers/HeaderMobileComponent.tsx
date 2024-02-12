import { navData } from "@/utils/data/navdata";
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
        </nav>
      </div>
    </header>
  );
};

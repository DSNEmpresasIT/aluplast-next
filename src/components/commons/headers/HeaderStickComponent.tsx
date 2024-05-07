import { navData } from '@/utils/data/navdata'
import { PAGES_PATH } from '@/utils/pages'
import { ProductFathersTypes } from '@/utils/types'
import Link from 'next/link'
import React from 'react'
import { CartNavComponent } from './CartNavComponent'

export const HeaderStickComponent = () => {
  return (
    <header className="header-stick header-stick--dark">
      <div className="container clearfix">
        <h1 className="logo pull-left">
          <a href="/">
            <img alt="Logo" src="/img/logo.png" />
          </a>
        </h1>
        <nav className="menu-desktop pull-right d-flex">
          <ul className="ul--inline ul--no-style">
            <li className="li-has-sub">
              <a href="/" title='Visitar home'> Home</a>
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
          {/* <CartNavComponent/> */}
        </nav>
      </div>
    </header>
  )
}

import { PAGES } from '@/utils/pages'
import Link from 'next/link'
import React from 'react'

export const BreadcumbsComponent = () => {
  return (
    <section className="navigation">
      <div className="parallax parallax--nav-1">
        <div className="container clearfix">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{ textTransform: 'none' }}>
                Nuestros servicios
              </h2>
              <ul className="breadcrumbs ul--inline ul--no-style">
                <li>
                  <Link href={PAGES.HOME} title='Navegar a página principal'>Home</Link>
                </li>
                <span>/</span>
                <li className="active">
                  Servicios
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

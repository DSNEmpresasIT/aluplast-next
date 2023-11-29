import { PAGES_PATH } from '@/utils/pages'
import React from 'react'

export const BreadCumbComponent = ({ product }: { product: string | undefined }) => {
  return (
    <section className="breadcrumbs-wrap" style={{ paddingTop: '13vh' }}>
    <div className="section-content section-content--w1140">
      <div className="container clearfix">
        <div className="breadcrumbs-inner">
          <ul className="breadcrumbs1 ul--inline ul--no-style">
            <li>
              <a href="/">Home</a>
            </li>
            <span className="span-active">/</span>
            <li>
              {
                product 
                  ? (<a href={`/${PAGES_PATH.CATALOG_PATH}`}>Catálogo</a>)
                  : ('Catálogo')
              }
            </li>
            {
              product && (
                <>
                  <span className="span-active">/</span>
                  <li className="active">
                    {product}
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

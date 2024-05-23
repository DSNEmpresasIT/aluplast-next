import { PAGES_PATH } from '@/utils/pages'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export const BreadCumbComponent = ({ product }: { product: string | undefined }) => {
  const router = useRouter();

  return (
    <section className="breadcrumbs-wrap" style={{ paddingTop: '13vh', height: '120px'}}>
    <div className="section-content section-content--w1140">
      <div className="container clearfix">
        <div className="breadcrumbs-inner" style={{ display: 'flex', justifyContent: 'space-between' }}>
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
          {
            product && (
              <a
                className='au-btn au-btn--pill au-btn--big au-btn--yellow text-white'
                type='button'
                onClick={() => router.back()}
              >
                Volver catálogo
              </a>
            )
          }
        </div>
      </div>
    </div>
  </section>
  )
}

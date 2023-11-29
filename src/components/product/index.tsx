'use client'
import React, { useEffect } from 'react'
import { BreadCumbComponent } from '@/components/catalog/BreadCumbComponent';
import { ProductDetail } from '@/components/product/ProductDetail';
import { allCatalogData } from '@/utils/data/catalog';
import { useRouter, useSearchParams } from 'next/navigation';
import { PAGES_PATH } from '@/utils/pages';
import { LoaderComponent } from '@/components/commons/LoaderComponent';

const Index = () => {
  const productId = useSearchParams().get('productId')
  const productSelected = allCatalogData.filter(product => product.id === productId)[0]
  const router = useRouter();

  useEffect(() => {
    if (!productSelected) {
      router.push(`/${PAGES_PATH.CATALOG_PATH}?productError=true`)
    }
  }, [productSelected])
  return (
    <>
      {
        productSelected 
        ? (

          <div className="page-wrap">
            <BreadCumbComponent product={productSelected.name} />
            <section className="single-product" style={{ marginTop: '3%' }}>
              <div className="section-content section-content--w1140">
                <div className="container">
                  <ProductDetail productSelected={productSelected} />
                  {/* <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-center sbold m-t-70 m-b-5">Productos Relacionados</h3>
                    </div>
                  </div>
                  <div className="row">
                    {
                      relatedProducts.map((product, i) =>  ( (i < 3) && <ShopCardComponent product={product} client:load/> ))
                    }
                  </div>
                </div> */}
                <div className="row" style={{ height: '20vh' }} />
                </div>
              </div>
            </section>
          </div>
        )
        : (<LoaderComponent />)
      }
    </>
  )
}

export default Index;

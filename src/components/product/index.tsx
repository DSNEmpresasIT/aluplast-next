'use client'
import React, { useEffect, useState } from 'react'
import { BreadCumbComponent } from '@/components/catalog/BreadCumbComponent';
import { ProductDetail } from '@/components/product/ProductDetail';
import { allCatalogData } from '@/utils/data/catalog';
import { useRouter, useSearchParams } from 'next/navigation';
import { LoaderComponent } from '@/components/commons/LoaderComponent';
import { PAGES_PATH } from '@/utils/pages';
import { getProductById } from '@/services/products-service';
import { Product } from '@/utils/types';

const Index = () => {
  const router = useRouter();
  const productId = useSearchParams().get('productId')
  const [ productSelected, setProductSelected ] = useState<Product>()

  useEffect(() => {
    if (!productId || isNaN(+productId)) {
      router.push(`/${PAGES_PATH.CATALOG_PATH}?productError=true`)
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      getProductById(productId)
        .then((res) => setProductSelected(res))
        .catch((err) => {
          console.log(err)
          router.push(`/${PAGES_PATH.CATALOG_PATH}?productError=true`)
        })
    }
  }, [productId])

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

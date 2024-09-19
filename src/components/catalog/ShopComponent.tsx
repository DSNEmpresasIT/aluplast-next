import React, { lazy, useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
// import ShopCardComponent from "./ShopCardComponent";
import { getProductTypeName, getProdutTypeText, pagination } from "../helpers/helpers";
import { ShopNavComponent } from "./ShopNavComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { PAGES_PATH } from "@/utils/pages";
import { PaginationComponent } from "./PaginationComponent";
import { getAllCategories } from "@/services/categories-service";
import { Categories, Product } from "@/utils/types";
import { getAllProducts } from "@/services/products-service";

const ShopCardComponent = dynamic(() => import("./ShopCardComponent"));

export const ShopComponent = () => {
  const router = useRouter();
  const productError = useSearchParams().get('productError');
  const category = useSearchParams().get('categoria');
  const searchQuery = useSearchParams().get('search');
  const page = useSearchParams().get('page');

  const [ products, setProducts ] = useState<Product[]>();
  const [ taggedCategory, setTaggedCategories ] = useState<Categories>();
  const [ categories, setCategories ] = useState<Categories[]>([]);


  const handleSetCategories = (response: Categories[]) => {
    const parent = response[0];

    if (category && !isNaN(+category)) {
      setTaggedCategories(parent)      
    }

    if (parent.childrens) {
      return setCategories(parent.childrens)
    }

    setCategories(response);
  }

  useEffect(() => {
    if (!category || isNaN(+category)) {
      setTaggedCategories(undefined)
    } 

    getAllCategories(category)
      .then(( response: Categories[] ) => handleSetCategories(response))
      .catch((err) => console.log(err.message))
  }, [category])

  useEffect(() => {
      getAllProducts(category)
        .then((response: Product[]) => setProducts(response))
        .catch((err) => console.log(err))
  }, [category])

  return (
    <section className="pro-list-wrap">
      <div className="section-content section-content--w1140" style={{ width: '100%' }}>
      {
        productError && (
          <div className='container animate__animated animate__fadeIn' onClick={() => router.push(`/${PAGES_PATH.CATALOG_PATH}`)}>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '10vh', color: 'white', backgroundColor: '#e91d25', position: 'relative' }}>
              Error: El producto no fue encontrado, por favor, inténtelo de nuevo, más tarde.
              <button 
                style={{ 
                  position: 'absolute', 
                  top: '10px', 
                  right: '10px', 
                  border: 'none', 
                  backgroundColor: 'transparent', 
                  color: 'white', 
                  cursor: 'pointer'
                }}
              >
                x
              </button>
            </div>
          </div>
        )
      }
        <div className="container">
          <div className="pro-list">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <ShopNavComponent
                  taggedCategory={taggedCategory}
                  categories={categories} 
                  // totalProducts={69}
                />
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  {/* {
                    filters.length === 1 && (
                      <div className="col-12 animate__animated animate__fadeIn">
                        <div className="blog__about">
                          <h4 className="title-sidebar">
                            {getProductTypeName(filters[0])}
                          </h4>
                          <p className="animate__animated animate__fadeIn">
                            {getProdutTypeText(filters[0])}
                          </p>
                        </div>
                      </div>
                    )
                  } */}
                  {
                    products?.map(product => {
                      return (
                        <ShopCardComponent product={product} key={product.id} />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          {/* <PaginationComponent actualPage={page} catalogLength={catalogData.length} category={query} />  */}
        </div>
      </div>
    </section>
  );
};

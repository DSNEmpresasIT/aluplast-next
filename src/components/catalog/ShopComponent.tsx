
import React, { lazy, useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { PAGES_PATH } from "@/utils/pages";
import { PaginationComponent } from "./PaginationComponent";
import { getAllCategories } from "@/services/categories-service";
import { Categories, Product } from "@/utils/types";
import { getAllProducts } from "@/services/products-service";
import { ShopNavComponent } from "./ShopNavComponent";

const ShopCardComponent = dynamic(() => import("./ShopCardComponent"));

export const ShopComponent = () => {
  const router = useRouter();
  const productError = useSearchParams().get('productError');
  const category = useSearchParams().get('categoria');
  const searchQuery = useSearchParams().get('search');
  const page = useSearchParams().get('page') || 1;

  const [products, setProducts] = useState<Product[]>([]);
  const [taggedCategory, setTaggedCategories] = useState<Categories>();
  const [categories, setCategories] = useState<Categories[]>([]);
  
  const [currentPage, setCurrentPage] = useState<number>(Number(page));
  const itemsPerPage = 6;

  const handleSetCategories = (response: Categories[]) => {
    const parent = response[0];

    if (category && !isNaN(+category)) {
      setTaggedCategories(parent);      
    }

    if (parent.childrens) {
      return setCategories(parent.childrens);
    }

    setCategories(response);
  };

  useEffect(() => {
    if (!category || isNaN(+category)) {
      setTaggedCategories(undefined);
    } 

    getAllCategories(category)
      .then((response: Categories[]) => handleSetCategories(response))
      .catch((err) => console.log(err.message));
  }, [category]);

  useEffect(() => {
    getAllProducts(category)
      .then((response: Product[]) => setProducts(response))
      .catch((err) => console.log(err));
  }, [category]);

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`?categoria=${category}&page=${page}`);
  };

  return (
    <section className="pro-list-wrap">
      <div className="section-content section-content--w1140" style={{ width: '100%' }}>
        {productError && (
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
        )}

        <div className="container">
          <div className="pro-list">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <ShopNavComponent
                  taggedCategory={taggedCategory}
                  categories={categories}
                />
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  {paginatedProducts.map(product => (
                    <ShopCardComponent product={product} key={product.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {products.length > itemsPerPage && (
            <PaginationComponent
              actualPage={currentPage}
              totalItems={products.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </section>
  );
};

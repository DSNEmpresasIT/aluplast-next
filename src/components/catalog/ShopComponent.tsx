import React, { lazy, useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
// import ShopCardComponent from "./ShopCardComponent";
import { allCatalogData } from "@/utils/data/catalog";
import { CatalogData, ProductFathersTypes } from "@/utils/types";
import { getProductTypeName, getProdutTypeText, pagination } from "../helpers/helpers";
import { ShopNavComponent } from "./ShopNavComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { PAGES_PATH } from "@/utils/pages";


const sortFunction = (product_1: CatalogData, product_2: CatalogData) => {
  if (product_1.name > product_2.name) {
    return 1;
  }

  if (product_1.name < product_2.name) {
    return -1;
  }

  return 0
}

const initialState = [
  ...allCatalogData
].sort(sortFunction);

const ShopCardComponent = dynamic(() => import("./ShopCardComponent"));

export const ShopComponent = ({ query }: any) => {
  const router = useRouter();
  const searchQuery = useSearchParams().get('search');
  const productError = useSearchParams().get('productError');
  const [ filters, setFilters ] = useState<ProductFathersTypes[]>([]);
  const [ catalogData,  setCatalogData ] = useState<CatalogData[]>(initialState);
  const [ indexPagination, setIndexPagination ] = useState({ startIndex: 0, lastIndex: 6 });
  const [ dataPaginated, setDataPaginated ] = useState<CatalogData[]>(catalogData || []);
  
  const handleToggleFilters = (filter: ProductFathersTypes | null) => {
    if (!filter) return setFilters([]);
    if (filters.includes(filter)) return setFilters([...filters.filter(item => item !== filter)])      

    return setFilters([...filters, filter]);
  }

  const handleFilterData = () => {
    let newData: CatalogData[] = [];
    if (filters) {
      const data = allCatalogData.filter((product) => product.filters.includes(filters[filters.length - 1]))
      if (data.length) {
        newData = [...newData, ...data]
      }
      setCatalogData(newData.sort(sortFunction));

      setIndexPagination({ startIndex: 0, lastIndex: 6 })
    }

    if (searchQuery) {
      handleSearchByName(searchQuery);
    }
    return undefined;
  }

  const handleSearchByName = (name: string) => {
    const newData = catalogData.filter(product => product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1); 
    setCatalogData(newData);
    setIndexPagination({ startIndex: 0, lastIndex: 6 });
    return undefined;
  }

  const handlePagination = () => {
    setIndexPagination({
      startIndex: 0,
      lastIndex: indexPagination.lastIndex + 3
    })
  }

  useEffect(() => {
    if (query) {
      setFilters([...filters, query])
    } else {
      setFilters([]);
    }
  }, [query]);

  useEffect(() => {
    setDataPaginated(pagination(catalogData, indexPagination));
  }, [indexPagination, catalogData]);

  useEffect(() => {
    if (filters.length || searchQuery) {
      handleFilterData();
    } else {
      setCatalogData(initialState)
    }
  }, [filters, searchQuery])

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
                  handleToggleFilter={handleToggleFilters} 
                  filters={filters} 
                  totalProducts={catalogData.length} 
                />
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  {
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
                  }
                  {
                    dataPaginated?.map(product => {
                      return (
                        <ShopCardComponent product={product} key={product.name} />
                      )
                    })
                  }
                  {
                    (catalogData && indexPagination.lastIndex <= catalogData.length) && (
                      <div className="col-12 see-more">
                        <a 
                          onClick={handlePagination}
                          type='button' 
                          style={{ color: 'white', cursor: 'pointer' }} 
                          className="au-btn au-btn--pill au-btn--yellow au-btn--big au-btn--white"
                        >
                          Cargar Más
                        </a>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          {/* <PaginationShopComponent />  */}
        </div>
      </div>
    </section>
  );
};

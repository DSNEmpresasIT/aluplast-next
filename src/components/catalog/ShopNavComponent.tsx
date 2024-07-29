import React, { useState, type FC, useEffect } from "react";
import Link from "next/link";
import { PAGES_PATH } from "@/utils/pages";
import { getProductTypeName } from "../helpers/helpers";
import { Categories, ProductFathersTypes, TypeProduct } from "@/utils/types";
import { allCatalogData } from "@/utils/data/catalog";
import { SearchComponent } from "./SearchComponent";
import { useSearchParams } from "next/navigation";

function compare( a: Categories, b: Categories ) {
  if ( a.value < b.value ){
    return -1;
  }
  if ( a.value > b.value ){
    return 1;
  }
  return 0;
}

interface ShopNavComponentProps {
  taggedCategory?: Categories;
  categories: Categories[];
  totalProducts?: number | undefined;
}

export const ShopNavComponent: FC<ShopNavComponentProps> = ({
  taggedCategory,
  categories,
  totalProducts,
}) => {

  return (
    <div
      className="blog-sidebar"
      style={{ display: "flex", flexDirection: "column", marginTop: "15px" }}
    >
      {/* <SearchComponent /> */}
      {taggedCategory && (
        <div className="blog__tag-wrap animate__animated animate__fadeIn">
          <h4 className="title-sidebar">
            Productos {taggedCategory.label}
          </h4>
          {totalProducts ? <span>{totalProducts} resultados</span> : ''}
          <div className="blog__tag mt-3">
            <Link
              className="animate__animated animate__fadeIn"
              key={`shop-nav-filters-${taggedCategory.value}`}
              href={{
                query: {
                  categoria: null
                }
              }}
              type="button"
            >
              {taggedCategory.label}{" "}
              <span style={{ marginLeft: "4px" }}>x</span>
            </Link>
          </div>
          <button
            type="button"
            style={{
              width: "100%",
              cursor: "pointer",
              color: "#0a75ba",
              marginTop: "15px",
              border: "none",
              background: "transparent",
            }}
          >
            <Link
              style={{
                cursor: "pointer",
                color: "#0a75ba",
              }}
              href={{ pathname: PAGES_PATH.CATALOG_PATH }}
            >
              Limpiar filtros
            </Link>
          </button>
        </div>
      )}
      {categories.length ? (
        <ul className="blog__cate ul--no-style" style={{ marginTop: "25px" }}>
          <h4 className="title-sidebar">Categorias</h4>
          {categories?.sort(compare).map((category) => {
            return (
              <li
                key={`shop-nav-${category.value}`}
                style={{
                  cursor: "pointer",
                }}
              >
                <Link
                  href={{
                    pathname: PAGES_PATH.CATALOG_PATH,
                    query: { categoria: category.id },
                  }}
                >
                  {category.label}
                  {/* <span>
                    <em>
                      (
                      {
                        allCatalogData.filter((product) =>
                          product.filters.includes(buttonData.filter)
                        ).length
                      }
                      )
                    </em>
                  </span> */}
                </Link>
              </li>
            );
          })}
            {
              !taggedCategory && (
                <li
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Link href={PAGES_PATH.TEXTURES}>
                    Texturas
                  </Link>
                </li>
              ) 
            }
          </ul>
        ) : ''
      }
    </div>
  );
};

import React, { useState, type FC, useEffect } from "react";
import Link from "next/link";
import { PAGES_PATH } from "@/utils/pages";
import { getProductTypeName } from "../helpers/helpers";
import { ProductFathersTypes, TypeProduct } from "@/utils/types";
import { allCatalogData } from "@/utils/data/catalog";
import { SearchComponent } from "./SearchComponent";
import { useSearchParams } from "next/navigation";

const navData = [
  {
    name: getProductTypeName(ProductFathersTypes.OPENERS_TYPES),
    filter: ProductFathersTypes.OPENERS_TYPES,
  },
  // {
  //   name: getProductTypeName(ProductFathersTypes.CLOSERS_TYPES),
  //   filter: ProductFathersTypes.CLOSERS_TYPES,
  // },
  {
    name: getProductTypeName(ProductFathersTypes.CS_TYPES),
    filter: ProductFathersTypes.CS_TYPES,
  },
  {
    name: getProductTypeName(ProductFathersTypes.WINDOWS),
    filter: ProductFathersTypes.WINDOWS,
  },
  {
    name: getProductTypeName(ProductFathersTypes.GARAGE_DOORS),
    filter: ProductFathersTypes.GARAGE_DOORS,
  },
  {
    name: getProductTypeName(ProductFathersTypes.RESALES),
    filter: ProductFathersTypes.RESALES,
  },
  {
    name: getProductTypeName(ProductFathersTypes.SOLAR_CONTROL),
    filter: ProductFathersTypes.SOLAR_CONTROL,
  },
];

const subCategories = [
  {
    name: getProductTypeName(TypeProduct.DOOR_PRODUCT),
    filter: TypeProduct.DOOR_PRODUCT,
  },
  {
    name: getProductTypeName(TypeProduct.WINDOW_PRODUCT),
    filter: TypeProduct.WINDOW_PRODUCT,
  },
];

interface ShopNavComponentProps {
  handleToggleFilter: (string: ProductFathersTypes) => void;
  filters: ProductFathersTypes[];
  totalProducts: number;
}

export const ShopNavComponent: FC<ShopNavComponentProps> = ({
  handleToggleFilter,
  filters,
  totalProducts,
}) => {
  const category = useSearchParams().get("categoria");

  const handleSetFilters = (data: any) => {
    handleToggleFilter(data.filter);
  };

  return (
    <div
      className="blog-sidebar"
      style={{ display: "flex", flexDirection: "column", marginTop: "15px" }}
    >
      {/* <SearchComponent /> */}
      {filters.length > 0 && (
        <div className="blog__tag-wrap animate__animated animate__fadeIn">
          <h4 className="title-sidebar">
            Productos {filters.map((filter) => filter + " ")}
          </h4>
          <span>{totalProducts} resultados</span>
          <div className="blog__tag mt-3">
            {filters.map((filter) => {
              return (
                <Link
                  className="animate__animated animate__fadeIn"
                  key={`shop-nav-filters-${filter}`}
                  href={{
                    pathname: PAGES_PATH.CATALOG_PATH,
                    query: { categoria: undefined },
                  }}
                >
                  {getProductTypeName(filter)}{" "}
                  <span style={{ marginLeft: "4px" }}>x</span>
                </Link>
              );
            })}
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
      {!filters.length ? (
        <ul className="blog__cate ul--no-style" style={{ marginTop: "25px" }}>
          <h4 className="title-sidebar">Categorias</h4>
          {navData?.map((buttonData) => {
            return (
              <li
                key={`shop-nav-${buttonData.name}`}
                style={{
                  cursor: "pointer",
                  color: filters.includes(buttonData.filter) ? "red" : "",
                }}
              >
                <Link
                  href={{
                    pathname: PAGES_PATH.CATALOG_PATH,
                    query: { categoria: buttonData.filter },
                  }}
                >
                  {buttonData.name}
                  <span>
                    <em>
                      (
                      {
                        allCatalogData.filter((product) =>
                          product.filters.includes(buttonData.filter)
                        ).length
                      }
                      )
                    </em>
                  </span>
                </Link>
              </li>
            );
          })}
          <li
            style={{
              cursor: "pointer",
            }}
          >
            <Link href={PAGES_PATH.TEXTURES}>
              Texturas
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
      {category === ProductFathersTypes.OPENERS_TYPES && (
        <ul className="blog__cate ul--no-style">
          <h4 className="title-sidebar">Tipos de {filters[0]}</h4>
          {subCategories?.map((buttonData: any) => {
            return (
              <li
                key={`shop-nav-${buttonData.name}`}
                style={{
                  cursor: "pointer",
                  color: filters.includes(buttonData.filter) ? "red" : "",
                }}
                onClick={() => handleSetFilters(buttonData)}
              >
                <a type="button">
                  {buttonData.name}
                  <span>
                    <em>
                      (
                      {
                        allCatalogData.filter((product) =>
                          product.filters.includes(buttonData.filter)
                        ).length
                      }
                      )
                    </em>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

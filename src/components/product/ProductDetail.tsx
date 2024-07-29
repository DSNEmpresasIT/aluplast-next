import { Product } from "@/utils/types";
import React, { Fragment } from "react";
import { getThePlaceholderImage } from "@/components/helpers/helpers";
import Image from "next/image";
import { useCartContext } from "@/context/cart-context";
import Link from "next/link";

export const ProductDetail = ({
  productSelected,
}: {
  productSelected: Product;
}) => {
 


  return (
    <div className="row">
      <div className="col-lg-5 col-md-6">
        <div className="single-product-img">
          <a
            target="_blank"
            href={
              productSelected.images
                ? productSelected.images[0].url  
                : getThePlaceholderImage([''])
            }
            data-lightbox="product"
          >
            <Image
              alt={`${productSelected.name}--main-img`}
              width={465}
              height={465}
              src={
                productSelected.images?.length
                  ? productSelected.images[0].url
                  : getThePlaceholderImage([''])
              }
            />
          </a>
        </div>
        <ul className="single-product-img-thumb ul--inline ul--no-style clearfix">
          {productSelected?.images?.length &&
            productSelected.images.map((img, index: number) => {
              if (img && index) {
                return (
                  <li key={`${index}-key-gallery-product-detail`}>
                    <a
                      href={
                        img
                          ? img.url
                          : getThePlaceholderImage([''])
                      }
                      data-lightbox="product"
                    >
                      <Image
                        width={465}
                        height={465}
                        alt={`${productSelected.name} ${index}`}
                        src={
                          img
                            ? img.url
                            : getThePlaceholderImage([''])
                        }
                      />
                    </a>
                  </li>
                );
              }
            })}
        </ul>
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="single-product-detail">
          <h2>{productSelected.name}</h2>
          <div className="pro__star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
          <p style={{ whiteSpace: 'pre-line' }} >{productSelected.description}</p>
          <div className="row no-gutters m-t-20">
            {productSelected.product_features?.specs && (
              <>
                {productSelected.product_features.specs.map((feature: string, index: number) => (
                  <div className="col-md-6" key={`${index}-key-features-product-detail`}>
                    <div className="li-item">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      {feature}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="single-product-tab">
            {productSelected.product_features && (
              <>
                <ul className="nav nav-tabs" id="pro-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#description"
                      role="tab"
                      aria-controls="all"
                      aria-expanded="true"
                    >
                      Características
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="pro-content">
                  <div
                    className="tab-pane active"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <p>
                      <Fragment >
                        <strong>Prestación:</strong> Alta - Baja - Media
                        <br />
                        <span style={{ color: "#999" }}>
                          _________________________________________________
                        </span>
                        <br />
                      </Fragment>
                      {productSelected.product_features?.items?.map((spec: any, index: number) => {
                        return (
                          <Fragment key={`${index}-specs-key-product-detail`}>
                            <strong>{spec.title}:</strong> {spec.text}
                            <br />
                            <span style={{ color: "#999" }}>
                              _________________________________________________
                            </span>
                            <br />
                          </Fragment>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </>
            )}
            <div className="single-product-form">
              {
                productSelected.product_features.pdffiles && (
                  <div className="row p-3">
                    <Link
                      className="au-btn au-btn--pill au-btn--yellow au-btn--white"
                      target="_blank" 
                      href={productSelected.product_features.pdffiles.url}
                      download={`${productSelected.name.trim()}.pdf`}
                    >
                      Descargar PDF
                    </Link>
                  </div>
                )

              }
              <div>
                {/* <button
              type="button"
              className="au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--white"
              >Preguntar el precio</button> */}
                <a
                  className="au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--white"
                  href={`https://api.whatsapp.com/send?phone=543446374867&text=Hola, me gustaría saber mas información sobre el producto ${productSelected.name}`}
                  target="_blank"
                >
                  Pedir cotización
                </a>
                {/* {
                  !state.cart.find((cartProduct: CatalogData) => cartProduct.id === productSelected.id) && (
                    <button
                      onClick={handleAddProductToCart}
                      className="au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--white ml-3"
                      type="button"
                    >
                      Agregar a carrito
                    </button>
                  )
                } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

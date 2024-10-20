import { CartContextAcions, CatalogData, ProductFathersTypes } from "@/utils/types";
import React, { Fragment } from "react";
import { getThePlaceholderImage } from "@/components/helpers/helpers";
import Image from "next/image";
import { useCartContext } from "@/context/cart-context";
import Link from "next/link";

export const ProductDetail = ({
  productSelected,
}: {
  productSelected: CatalogData;
}) => {
  const { state, dispatch }:any = useCartContext();
 
  const handleAddProductToCart = () => {
    dispatch({
      type: CartContextAcions.ADD_PRODUCT,
      payload: {
        ...productSelected,
        img: productSelected.img?.length 
            ? `/img/products/${productSelected.id}/${productSelected.img[0]}.png` 
            : getThePlaceholderImage(productSelected.filters)
      }
    })
  }

  return (
    <div className="row">
      <div className="col-lg-5 col-md-6">
        <div className="single-product-img">
          <a
            href={
              productSelected.img?.length
                ? `/img/products/${productSelected.id}/${productSelected.img[0]}.png`
                : getThePlaceholderImage(productSelected.filters)
            }
            data-lightbox="product"
          >
            <Image
              alt={`${productSelected.name}--main-img`}
              width={465}
              height={465}
              src={
                productSelected.img?.length
                  ? `/img/products/${productSelected.id}/${productSelected.img[0]}.png`
                  : getThePlaceholderImage(productSelected.filters)
              }
            />
          </a>
        </div>
        <ul className="single-product-img-thumb ul--inline ul--no-style clearfix">
          {productSelected?.img?.length &&
            productSelected.img.map((img: string, index: number) => {
              if (img && index) {
                return (
                  <li key={`${index}-key-gallery-product-detail`}>
                    <a
                      href={
                        img
                          ? `/img/products/${productSelected.id}/${img}.png`
                          : getThePlaceholderImage(productSelected.filters)
                      }
                      data-lightbox="product"
                    >
                      <Image
                        width={465}
                        height={465}
                        alt={`${productSelected.name} ${index}`}
                        src={
                          img
                            ? `/img/products/${productSelected.id}/${img}.png`
                            : getThePlaceholderImage(productSelected.filters)
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
            {productSelected.specs?.features && (
              <>
                {productSelected.specs.features.map((feature: string, index: number) => (
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
            {productSelected.specs?.description && (
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
                      {productSelected.specs?.description?.map((spec: any, index: number) => {
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
                productSelected.pdfButton && (
                  <div className="row p-3">
                    <Link
                      className="au-btn au-btn--pill au-btn--yellow au-btn--white"
                      href={`/img/products/${productSelected.id}/${productSelected.pdfButton}.pdf`}
                      target="_blank" 
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

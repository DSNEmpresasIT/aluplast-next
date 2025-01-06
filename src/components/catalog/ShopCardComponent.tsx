import { PAGES_PATH } from "@/utils/pages";
import { CartContextAcions, CatalogData, Product } from "@/utils/types";
import React, { FC, useEffect, useState } from "react";
import { getThePlaceholderImage } from "../helpers/helpers";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useCartContext } from "@/context/cart-context";

interface ShopCardComponentProps {
  product: Product;
  isHome?: boolean;
}

const ShopCardComponent:FC<ShopCardComponentProps> = ({ product, isHome = false }) => {
  const { state, dispatch }: any = useCartContext();
  const [ textButton, setTextButton ] = useState<string>();

  const handleAddProductToCart = () => {
    dispatch({
      type: CartContextAcions.ADD_PRODUCT,
      payload: {
        ...product,
      }
    })
  }

  useEffect(() => isHome ? setTextButton('Ver en Catálogo') : setTextButton('Ver Detalle'), [isHome]);

  return (
    <div className="col-lg-4 col-md-6 col-12 animate__animated animate__fadeIn">
      <div className="pro__item">
        <div className="pro__img">
          <Image 
            src={(product.images && product.images[0]?.url) ?? getThePlaceholderImage(['si'])} 
            alt="Product 1" 
            width={465}
            height={465}
          />
          <div className="pro-link">
            <div className="pro-info pro-info--dark pro-info--center">
              <Link
                href={{ pathname: PAGES_PATH.PRODUCT_PATH, query: { productId: product.id } }}
                className="au-btn au-btn--pill au-btn--big au-btn--yellow pro__add"
                style={{ color: 'white'}}
              >
                {textButton}
              </Link>
            </div>
          </div>
        </div>
        <div className="pro__detail">
          <h5>
            <Link href={{ pathname: PAGES_PATH.PRODUCT_PATH, query: { productId: product.id } }} style={{ textTransform: 'none' }}>{product.name}</Link>
          </h5>
          <p>
            {/* {
              !state.cart.find((cartProduct: CatalogData) => cartProduct.id === product.id) && (
                <button
                  onClick={handleAddProductToCart}
                  style={{ lineHeight: '35px', border: 'unset' }}
                  className="au-btn au-btn--yellow rounded"
                >
                  Agregar al carrito
                </button>
              )
            } */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopCardComponent;

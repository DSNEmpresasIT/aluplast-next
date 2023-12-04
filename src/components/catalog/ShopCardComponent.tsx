import { PAGES_PATH } from "@/utils/pages";
import { CatalogData } from "@/utils/types";
import React, { FC, useEffect, useState } from "react";
import { getThePlaceholderImage } from "../helpers/helpers";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ShopCardComponentProps {
  product: CatalogData;
  isHome?: boolean;
}

const ShopCardComponent:FC<ShopCardComponentProps> = ({ product, isHome = false }) => {
  const [ img, setImg ] = useState<StaticImageData | string>('/img/placeholder/windows-placeholder.png');
  const [ textButton, setTextButton ] = useState<string>();
  const [productName, setProductName ] = useState<string>();

  useEffect(() => product.img ? setImg(`/img/products/${product.id}/${product.img[0]}.png`) : setImg(getThePlaceholderImage(product.filters)) , [product.img]);
  useEffect(() => isHome ? setTextButton('Ver en Catálogo') : setTextButton('Ver Detalle'), [isHome]);
  useEffect(() => product.name ? setProductName(product.name) : setProductName('Producto') , [product.name]);

  return (
    <div className="col-lg-4 col-md-6 col-12 animate__animated animate__fadeIn">
      <div className="pro__item">
        <div className="pro__img">
          <Image 
            src={img} 
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
            <Link href={{ pathname: PAGES_PATH.PRODUCT_PATH, query: { productId: product.id } }} style={{ textTransform: 'none' }}>{productName}</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ShopCardComponent;

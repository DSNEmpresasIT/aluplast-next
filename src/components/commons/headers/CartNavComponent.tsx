'use client'
import { UseCartContextReturn, useCartContext } from '@/context/cart-context'
import { PAGES_PATH } from '@/utils/pages'
import { CartContextAcions, CartContextState, CatalogData } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'

const ProductCardCart = ({ product, dispatch }: { product: CatalogData, dispatch: Dispatch<SetStateAction<any>> }) => {
  
  const handleDeleteProduct = () => {
    dispatch({
      type: CartContextAcions.REMOVE_PRODUCT,
      payload: product
    })
  }

  return (
    <li>
      <div className="cart__item d-flex">
        <div className="img-thumb d-inline-block">
          <Image alt="Hand Made Chair" width={100} height={100} src={product.img?.length ? product.img[0] : ''} />
        </div>
        <div className="pro-detail">
          <h6>
            <a href="single-product.html">
              {product.name}
            </a>
          </h6>
          <p style={{ whiteSpace: 'nowrap', maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <em >
              { product.description }
            </em>
          </p>
        </div>
        <button type='button' onClick={handleDeleteProduct} className='au-btn au-btn--yellow'>
          <i className="zmdi zmdi-delete text-white"></i>
        </button>
      </div>
    </li>
  )
}

export const CartNavComponent = () => {
  const { state, dispatch }: any = useCartContext();
  const [ isCartOpen, setIsCartOpen ] = useState<boolean>(false)

  const handleToggleNav = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="mini-cart d-flex align-items-center">
      <a type='button' onClick={handleToggleNav}>
        { state.cart.length ? <span className="mini-cart-counter animate__animated animate__fadeInUp">{state.cart.length}</span> : undefined}
        <i className="zmdi zmdi-shopping-cart text-white"></i>
      </a>
      <div className={`cart-dropdown cart-dropdown--${isCartOpen ? 'show' : 'hidden'}`}>
        <ul className="cart-list ul--no-style">
          {
            state.cart[0] && state.cart.map((product: CatalogData) => {
              return (
                <ProductCardCart product={product} dispatch={dispatch} />
              )
            })
          }
        </ul>
        <div className="total-checkout">
          {
            !state.cart[0] && (
              <p className="total">
                Carrito vacío...
                <br />
                <Link 
                  onClick={handleToggleNav} 
                  href={PAGES_PATH.CATALOG_PATH}
                >
                  Algunos de nuestros productos aquí
                </Link>
              </p>
            )
          }
          {
            (state.cart[0])&& (
              <div className="checkout">
                <a 
                  href="checkout.html" 
                  target='_blank' 
                  className="au-btn au-btn--small au-btn--pill au-btn--border au-btn--gray"
                >
                  Cotizar
                </a>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

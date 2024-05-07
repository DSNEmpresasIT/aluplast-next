'use client'
import { CartContextAcions, CartContextState, CatalogData } from "@/utils/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useReducer } from "react";

interface ActionCartInterface {
  type: CartContextAcions;
  payload: CatalogData;
}

export interface UseCartContextReturn {
  state: CartContextState;
  dispatch: Dispatch<SetStateAction<CartContextAcions>>
}

const cartContextInitialState: CartContextState = {
  cart: []
};

const CartContext = createContext<CartContextState>(cartContextInitialState);

const cartReducer = (state: CartContextState, action: ActionCartInterface) => {
  switch (action.type) {
    case CartContextAcions.ADD_PRODUCT:
      return {
        cart: [...state.cart, action.payload]
      };
    case CartContextAcions.REMOVE_PRODUCT:
      return {
        cart: state.cart.filter(product => product !== action.payload)
      }
    default:
      return state;
  }
}

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [ state, dispatch ] = useReducer<any>(cartReducer, cartContextInitialState);

  return (
    //@ts-ignore
    <CartContext.Provider value={{ state, dispatch }} >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext);

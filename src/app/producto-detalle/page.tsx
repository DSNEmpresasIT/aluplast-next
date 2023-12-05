import React from 'react'
import { Metadata } from 'next';
import Index from '@/components/product'
 
export const metadata: Metadata = {
  title: 'Producto aluminio',
  description: 'En Aluplast encontrarás la mejor variedad de productos de pvc, aluminios al natural, texturados y anodizados',
  keywords: 'aluminio, producto, productos, pvc, aluplast, ventantas, puertas, portones garage, sistemas complementarios'
}

export default function Page() {
  return <Index />;
}

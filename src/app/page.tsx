import React from 'react'
import { Metadata } from 'next'
import Home from '@/components/home'

export const metadata: Metadata = {
  title: 'Especialistas en Aluminio y PVC | Urdinarrain, Entre Ríos',
  description: 'Descubre la excelencia en aberturas de aluminio y PVC en Urdinarrain, Entre Ríos. Fabricamos oscilobatientes, corredizas, pivotantes y más. Garantizamos calidad y satisfacción para nuestros clientes.',
  alternates: {
    canonical: 'https://aluplast.com.ar/texturas-tipos-y-tratamientos'
  }
}

export default function Index() {
  return (
    <Home />
  )
}

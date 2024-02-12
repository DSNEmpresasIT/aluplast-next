import React from 'react'

import Home from '@/components/home'
import { PAGES } from '@/utils/pages'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: PAGES.HOME,
  description: 'Descubre la excelencia en aberturas de aluminio y PVC en Urdinarrain, Entre Ríos. Fabricamos oscilobatientes, corredizas, pivotantes y más. Garantizamos calidad y satisfacción para nuestros clientes.',
  alternates: {
    canonical: 'https://aluplast.com.ar/'
  }
}

export default function Index() {
  return (
    <Home />
  )
}

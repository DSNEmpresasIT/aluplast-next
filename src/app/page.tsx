import React from 'react'

import Home from '@/components/home'
import { PAGES } from '@/utils/pages'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: PAGES.HOME,
  description: 'Descubre la excelencia en aberturas de aluminio y pvc en Concordia, Concepción del Uruguay y todo Argentina. Conoce nuestro variado catálogo de variados modelos a los mejores precios.',
  alternates: {
    canonical: 'https://aluplast.com.ar/'
  }
}

export default function Index() {
  return (
    <Home />
  )
}

import Home from '@/components/home'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Aluplast fabrica de aberturas - Urdinarrain, Colon, Gualeguaychu, Concordia, C del Uruguay.',
  description: 'Empresa líder en fabricación de aberturas, cerramientos y más productos edilicios. Entre Ríos, Concordia.',
  keywords: "aluminio, Entre Ríos, Concordia, pvc, aberturas, cerramientos, sistemas complementarios, portones, control solar, vidrios, garage, diseño, puertas, ventanas, industria",
}

export default function Index() {
  return (
    <Home />
  )
}

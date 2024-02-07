import Index from '@/components/catalog'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Catálogo | Lo mejor en aluminio y PVC',
  description: 'Sorprendase al ver nuestro variado catálogo de productos en PVC y aluminio. Encuentre cerramientos, aberturas, sistemas complementarios y controles solares cuidados al detalle para máxima calidad.',
  alternates: {
    canonical: 'https://aluplast.com.ar/productos-de-aluminio-y-pvc'
  }
}

export default function Page() {
  return (
    <Index />
  )
}

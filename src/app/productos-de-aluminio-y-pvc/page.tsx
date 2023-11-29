import Index from '@/components/catalog'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Catálogo de productos',
  description: 'Sorprendase al ver nuestro variado catálogo de productos en PVC y aluminio. Encuentre cerramientos, aberturas, sistemas complementarios y controles solares cuidados al detalle para máxima calidad.',
  keywords: 'catálogo, e-commerce, tienda, productos, producto, aberturas, cerramientos, control solar, sistemas complementarios, oficinas, casas, edificios, aluplast'
}

export default function Page() {
  return (
    <Index />
  )
}

import Index from '@/components/blog'
import { PAGES } from '@/utils/pages'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: PAGES.LAST_NEWS,
  description: 'Descubre las últimas novedades y tendencias en aberturas de aluminio. Mantente informado sobre nuestros productos, proyectos destacados y avances tecnológicos. En Aluplast, estamos comprometidos con la excelencia y la innovación en cada detalle. ¡Explora nuestras noticias ahora!',
  alternates: {
    canonical: "https://aluplast.com.ar/ultimas-noticias-aluplast"
  }
}

export default function Page() {
  return (
    <Index />
  )
}

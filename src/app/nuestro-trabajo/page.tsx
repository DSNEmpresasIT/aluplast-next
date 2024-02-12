import { Index } from '@/components/some-works'
import { PAGES } from '@/utils/pages'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: PAGES.SOME_PROJECTS,
  description: 'Descubre nuestra galería de proyectos destacados en aberturas de aluminio. En Aluplast, llevamos la excelencia en diseño y funcionalidad a cada proyecto.¡Transforma tu espacio con nuestras aberturas de aluminio excepcionales!',
  alternates: {
    canonical: 'https://aluplast.com.ar/nuestro-trabajo'
  }
}

export default function Page() {
  return <Index />
}

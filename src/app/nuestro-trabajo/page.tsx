import { Index } from '@/components/some-works'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Proyectos Destacados | Aluplast - Aberturas de aluminio',
  description: 'Descubre nuestra galería de proyectos destacados en aberturas de aluminio. En Aluplast, llevamos la excelencia en diseño y funcionalidad a cada proyecto.¡Transforma tu espacio con nuestras aberturas de aluminio excepcionales!',
  alternates: {
    canonical: 'https://aluplast.com.ar/nuestro-trabajo'
  }
}

export default function Page() {
  return <Index />
}

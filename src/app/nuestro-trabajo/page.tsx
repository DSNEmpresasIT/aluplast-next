import { Index } from '@/components/some-works'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Trabajos',
  description: 'En esta sección encontrarás algunos de los trabajaso de Aluplast, desde edificios, casas, residencias, obras publicas e institucionales.',
  keywords: 'trabajos, aluplast, portfolio, residenciales, edificios, fotos, clientes, casas, obras'
}

export default function Page() {
  return <Index />
}

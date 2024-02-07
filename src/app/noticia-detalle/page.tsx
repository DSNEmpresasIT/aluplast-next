import React from 'react'
import { Metadata } from 'next'
import Index from '@/components/blog-detail'

export const metadata: Metadata = {
  title: 'Especialistas en Aluminio y PVC | Urdinarrain, Entre Ríos',
  alternates: { 
    canonical: 'https://aluplast.com.ar/ultimas-noticias-aluplast'
  }
}

export default function Page (){
  return (
    <Index />
  )
}

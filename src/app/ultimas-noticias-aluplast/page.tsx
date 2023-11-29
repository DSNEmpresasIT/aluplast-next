import Index from '@/components/blog'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Últimas noticias',
  description: 'Descubre lo último de Aluplast y acompáñanos a crecer junto a nuestra numerosa comunidad!',
  keywords: 'blog, noticias, post, posteos, publicacion, publicaciones, facebook, instagram, aluplast, pvc, aberturas, cerramientos'
}

export default function Page() {
  return (
    <Index />
  )
}

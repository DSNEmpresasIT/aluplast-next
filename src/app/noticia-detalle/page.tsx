import React from 'react'
import { Metadata } from 'next'
import Index from '@/components/blog-detail'
import { PAGES } from '@/utils/pages'

export const metadata: Metadata = {
  title: PAGES.NEWS_DETAIL,
  alternates: { 
    canonical: 'https://aluplast.com.ar/ultimas-noticias-aluplast'
  }
}

export default function Page (){
  return (
    <Index />
  )
}

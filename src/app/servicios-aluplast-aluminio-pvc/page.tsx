import React from 'react'
import { Index } from '@/components/services'
import { Metadata } from 'next'
import { PAGES } from '@/utils/pages'

export const metadata: Metadata = {
  title: PAGES.SERVICES
}

export default function Page() {
  return (
    <Index />
  )
}

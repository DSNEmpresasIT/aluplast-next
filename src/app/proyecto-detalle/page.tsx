import { Index } from '@/components/work-detail';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Proyecto'
}

const Page = () => {
  return <Index />
}

export default Page;

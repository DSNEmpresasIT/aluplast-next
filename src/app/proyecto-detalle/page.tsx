import { Index } from '@/components/work-detail';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://aluplast.com.ar/nuestro-trabajo'
  }
}

const Page = () => {
  return (
    <Index />
  )
}

export default Page;

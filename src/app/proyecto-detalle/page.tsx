import { Index } from '@/components/work-detail';
import { PAGES } from '@/utils/pages';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: PAGES.PROJECT_DETAIL,
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

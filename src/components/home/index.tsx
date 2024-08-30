'use client'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';

import OurContactSection from '@/components/home/OurContactSection';
import SliderComponent from '@/components/home/SliderComponent';
import { ProjectsComponent } from '@/components/home/ProjectsComponent';
import { SliderComponent_2 } from './SliderComponent_2';

// const SliderComponent = dynamic(() => import('@/components/home/SliderComponent'), { ssr: false })
const WhoWeAreSection = dynamic(() => import('@/components/home/WhoWeAreSection'), { ssr: false })
const HomeVideoSection = dynamic(() => import('@/components/home/HomeVideoSection'), { ssr: false })
const OurProcessSection = dynamic(() => import('@/components/home/OurProcessSection'), { ssr: false })
const BlogSectionComponent = dynamic(() => import('@/components/home/BlogSectionComponent'), { ssr: false })
const OurBestProductsSection = dynamic(() => import('@/components/home/OurBestProductsSection'), { ssr: false })

const Home = () => {
  return (
    <div className='page-wrap'>
      <SliderComponent /> 
      {/* <SliderComponent_2 />  */}
      <WhoWeAreSection />
      <HomeVideoSection />
      <OurProcessSection />
      <ProjectsComponent />
      <BlogSectionComponent />
      <OurBestProductsSection />
      <OurContactSection />
    </div>
  )
}

export default Home;

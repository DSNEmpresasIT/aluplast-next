'use client'
import React from 'react'
import { ProjectsComponent } from './ProjectsComponent'
import { useRouter, useSearchParams } from 'next/navigation'
import { PAGES_PATH } from '@/utils/pages'

export const Index = () => {
  const router = useRouter();
  const projectNotFound = useSearchParams().get('errorProject')
  return (
    <div className='page-wrap'>
      <section className="breadcrumbs-wrap" style={{ paddingTop: '13vh' }}>
        <div className="section-content section-content--w1140">
          <div className="container clearfix">
            <div className="breadcrumbs-inner">
              <ul className="breadcrumbs1 ul--inline ul--no-style">
                <li>
                  <a href="/">Home</a>
                </li>
                <span className="span-active"> / </span>
                <li>
                  <a>Proyectos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {
          projectNotFound && (
          <div className='container animate__animated animate__fadeIn' onClick={() => router.push(PAGES_PATH.SOME_PROJECTS)}>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '10vh', color: 'white', backgroundColor: '#e91d25', position: 'relative' }}>
              Error: el proyecto no fue encontrado, por favor, inténtelo de nuevo, más tarde.
              <button 
                style={{ 
                  position: 'absolute', 
                  top: '10px', 
                  right: '10px', 
                  border: 'none', 
                  backgroundColor: 'transparent', 
                  color: 'white', 
                  cursor: 'pointer'
                }}
              >
                x
              </button>
            </div>
          </div>
        )
      }
        <h3 style={{ textAlign: 'center', marginTop: '25px' }}>Algunos de nuestros proyectos</h3>
      </section>
      <ProjectsComponent />
    </div>
  )
}

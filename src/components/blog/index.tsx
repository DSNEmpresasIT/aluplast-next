'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { BlogPosts } from '@/components/blog/BlogPostsComponent';
import { PAGES_PATH } from '@/utils/pages';
import { InstagramPost } from '@/utils/types';
import { SkeletonLoaderComponent } from '@/components/blog/SkeletonLoaderComponent';
import { getInstagramPosts } from '@/services/instagram-services';

const Index = () => {
  const postDetailError = useSearchParams().get('postNotFound');
  const [ posts, setPosts ] = useState<InstagramPost[]>();
  const [ postNotFoundNotification, setPostNotFoundNotification ] = useState<boolean>();
  // const [ nextLink, setNextLink ] = useState<string | null>(null);
  const [ fetchError, setError ] = useState<boolean>(false);

  useEffect(() => {
      getInstagramPosts()
        .then(response => setPosts(response))
        .catch(_ => {
          console.error('Error in instagram token')
          setError(true)
        })
  },[]);

  useEffect(() => {
    if (postDetailError === 'true') {
      setPostNotFoundNotification(true);
      setTimeout(() => {
        setPostNotFoundNotification(false);
      }, 5000)
    }
  }, [postDetailError])

  return ( 
    <>
      <section className="breadcrumbs-wrap">
        <div className="section-content section-content--w1140">
          <div className="container clearfix">
            <div className="breadcrumbs-inner">
              <ul className="breadcrumbs1 ul--inline ul--no-style">
                <li>
                  <a href="/">Home</a>
                </li>
                {" "}
                <span className="span-active">/</span>
                {" "}
                <li>
                  <Link href={`/${PAGES_PATH.NEWS_PATH}`}> Noticias</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {
        postNotFoundNotification && (
          <div className='container animate__animated animate__fadeIn' onClick={() => setPostNotFoundNotification(false)}>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '10vh', color: 'white', backgroundColor: '#e91d25', position: 'relative' }}>
              Error: la publicación de no fue encontrada, por favor, inténtelo de nuevo, más tarde.
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

      {
        fetchError ? (
          <section className="project5 mt-5 px-5 pt-0">
            <div id="isotope-grid" className="project--hover clearfix row no-gutters d-flex align-items-center justify-content-center">
              <a href='https://www.instagram.com/aluplast.aberturas/' target='_blank' className='w-50 h1 text-center' style={{ height: '500px' }}>
                Al parecer ha habido un error de conexión con Instagram
                <br />
                Intenta ver nuestras ultimas noticias desde acá!
                <br />
                <i className="fa-brands fa-instagram mt-5" style={{ fontSize: '150px' }}></i>
              </a>
            </div>
          </section>
        ) : (
          <>
            <section className='instagram-section-wrap mt-5'>
              <a href="https://www.instagram.com/aluplast.aberturas/" target='_blank'>
                <i className="fa-brands fa-instagram"></i>
                {" "}
                aluplast.aberturas
              </a>
            </section>
            {
              posts
              ? (<BlogPosts posts={posts} />)
              : (<SkeletonLoaderComponent />)
            }
          </>
        )
      }
    </>
  )
}

export default Index;

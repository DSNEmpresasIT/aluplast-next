'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { BlogPosts } from '@/components/blog/BlogPostsComponent';
import { getFacebookImagePosts, getFacebookPageToken } from '@/services/facebook-services';
import { PAGES_PATH } from '@/utils/pages';
import { FacebookPost, InstagramPost } from '@/utils/types';
import { SkeletonLoaderComponent } from '@/components/blog/SkeletonLoaderComponent';
import { getInstagramPosts } from '@/services/instagram-services';

const Index = () => {
  const postDetailError = useSearchParams().get('postNotFound');
  const [ posts, setPosts ] = useState<InstagramPost[]>();
  const [ postNotFoundNotification, setPostNotFoundNotification ] = useState<boolean>();
  // const [ nextLink, setNextLink ] = useState<string | null>(null);

  useEffect(() => {
    if (process.env.INSTAGRAM_TOKEN) {
      getInstagramPosts(process.env.INSTAGRAM_TOKEN)
        .then(response => setPosts(response))
        .catch(error => console.log(error))
    }
  },[process.env.INSTAGRAM_TOKEN]);

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
      <section className='instagram-section-wrap'>
        <a href="https://www.instagram.com/aluplast.aberturas/" target='_blank'>
          <i className="fa-brands fa-instagram"></i>
          {" "}
          aluplast.aberturas
        </a>
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
        posts 
          ? (<BlogPosts posts={posts} />)
          : (<SkeletonLoaderComponent />)
      }
    </>
  )
}

export default Index;

'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { BlogPosts } from '@/components/blog/BlogPostsComponent';
import { getFacebookImagePosts, getFacebookPageToken } from '@/services/facebook-services';
import { PAGES_PATH } from '@/utils/pages';
import { FacebookPost } from '@/utils/types';
import { SkeletonLoaderComponent } from '@/components/blog/SkeletonLoaderComponent';

const Index = () => {
  const postDetailError = useSearchParams().get('postNotFound');
  const [ posts, setPosts ] = useState<FacebookPost[]>();
  const [ pageAccessToken, setPageAccessToken ] = useState<string>();
  const [ postNotFoundNotification, setPostNotFoundNotification ] = useState<boolean>();
  const [ nextLink, setNextLink ] = useState<string | null>(null);

  useEffect(() => {
    if (process.env.FACEBOOK_PAGE_ID && process.env.FACEBOOK_TOKEN) {
      getFacebookPageToken(process.env.FACEBOOK_TOKEN, process.env.FACEBOOK_PAGE_ID)
        .then(res => setPageAccessToken(res.access_token))
        .catch(error => console.log(error))
    }
  },[process.env]);

  useEffect(() => {
    if (pageAccessToken && process.env.FACEBOOK_PAGE_ID) {
      getFacebookImagePosts(pageAccessToken, process.env.FACEBOOK_PAGE_ID)
        .then(res => {
          setPosts(res.data)
          setNextLink(res.next);
        })
        .catch(error => console.log(error));
    }
  },[pageAccessToken])

  useEffect(() => {
    if (postDetailError === 'true') {
      setPostNotFoundNotification(true);
      setTimeout(() => {
        setPostNotFoundNotification(false);
      }, 5000)
    }
  }, [postDetailError])

  const handleLoadMorePosts = () => {

  }

  return ( 
    <>
      <section className="breadcrumbs-wrap" style={{ height: '15vh', paddingTop: '13vh' }}>
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
        posts 
          ? (<BlogPosts posts={posts} nextUrl={nextLink} />)
          : (<SkeletonLoaderComponent />)
      }
    </>
  )
}

export default Index;

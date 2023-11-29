'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { BlogPosts } from '@/components/blog/BlogPostsComponent';
import { getFacebookImagePosts, getFacebookPageToken } from '@/services/facebook-services';
import { PAGES_PATH } from '@/utils/pages';
import { FacebookPost } from '@/utils/types';
import { SkeletonLoaderComponent } from '@/components/blog/SkeletonLoaderComponent';
import { BlogDetail } from '@/components/blog/BlogDetailComponent';

const Index = () => {
  const router = useRouter()
  const postId = useSearchParams().get('postId');
  const [ posts, setPosts ] = useState<FacebookPost[]>();
  const [ isPostIdValid, setIsPostIdValid ] = useState<boolean>();
  const [ pageAccessToken, setPageAccessToken ] = useState<string>();
  const [ postDetail, setPostDetail ] = useState<FacebookPost>();
  const [ postNotFound, setPostNotFound ] = useState<boolean>();

  const handlePostDetail = () => posts?.filter(post => post.target.id === postId)[0] ?? null

  useEffect(() => {
    if (process.env.FACEBOOK_PAGE_ID && process.env.FACEBOOK_TOKEN) {
      getFacebookPageToken(process.env.FACEBOOK_TOKEN, process.env.FACEBOOK_PAGE_ID)
        .then(res => setPageAccessToken(res.access_token))
        .catch(error => {
          console.log(error)
        })
    }
  },[process.env]);

  useEffect(() => {
    if (pageAccessToken && process.env.FACEBOOK_PAGE_ID) {
      getFacebookImagePosts(pageAccessToken, process.env.FACEBOOK_PAGE_ID)
        .then(res => {
          setPosts(res)
        })
        .catch(error => {
          console.log(error)
        });
    }
  },[pageAccessToken])

  useEffect(() => (postId ? setIsPostIdValid(true) : setIsPostIdValid(false)), [postId])
  
  useEffect(() => {
    if (isPostIdValid && postId && posts) {
      const postSelected = handlePostDetail();
      postSelected ? setPostDetail(postSelected) : (router.push(PAGES_PATH.NEWS_PATH), setPostNotFound(true));
    }
  }, [isPostIdValid, postId, posts])

  return ( 
    <>
      <section className="breadcrumbs-wrap" style={{ height: '25vh', paddingTop: '13vh' }}>
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
        postNotFound && (
          <div className='container animate__animated animate__fadeIn' onClick={() => setPostNotFound(false)}>
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
        posts ? (
          (isPostIdValid && postDetail)
          ? (<BlogDetail facebookPostDetail={postDetail} facebookPosts={posts} /> )
          : (<BlogPosts posts={posts} />) 
          ) : (
            <>
            <SkeletonLoaderComponent />
          </>
        )
      }
    </>
  )
}

export default Index;

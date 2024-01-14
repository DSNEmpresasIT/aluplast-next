'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { getFacebookImagePosts, getFacebookPageToken } from '@/services/facebook-services';
import { PAGES_PATH } from '@/utils/pages';
import { InstagramPost } from '@/utils/types';
import { SkeletonLoaderComponent } from '@/components/blog/SkeletonLoaderComponent';
import { BlogDetail } from '@/components/blog-detail/BlogDetailComponent';
import { getInstagramPosts } from '@/services/instagram-services';

const Index = () => {
  const router = useRouter()
  const postId = useSearchParams().get('postId');
  const [ posts, setPosts ] = useState<InstagramPost[]>();
  const [ isPostIdValid, setIsPostIdValid ] = useState<boolean>();
  const [ postDetail, setPostDetail ] = useState<InstagramPost>();

  const handlePostDetail = () => posts?.filter(post => post.id === postId)[0] ?? null

  useEffect(() => {
    getInstagramPosts(process.env.INSTAGRAM_TOKEN || '')
      .then(response => (setPosts(response), console.log(response)))
  }, [process.env.INSTAGRAM_TOKEN])

  useEffect(() => (postId ? setIsPostIdValid(true) : setIsPostIdValid(false)), [postId])
  
  useEffect(() => {
    if (isPostIdValid && postId && posts) {
      const postSelected = handlePostDetail();
      postSelected ? setPostDetail(postSelected) : (router.push(`/${PAGES_PATH.NEWS_PATH}?postNotFound=true`));
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
         (posts && isPostIdValid && postDetail)
          ? (<BlogDetail instagramPostDetail={postDetail} instagramPosts={posts} /> )
          : (<SkeletonLoaderComponent />)
      }
    </>
  )
}

export default Index;

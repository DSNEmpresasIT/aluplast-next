import { PAGES_PATH } from '@/utils/pages'
import { InstagramPost, InstagramPostMediaTypes } from '@/utils/types'
import Link from 'next/link'
import React from 'react'
import { getFormatDate } from '../helpers/helpers'

export const BlogDetailRelatedPost = ({ relatedPosts }: { relatedPosts: InstagramPost[] | undefined }) => {
  return (
    <div className="blog-sidebar">
      <div className="blog__recent">
        {
          relatedPosts?.length && (
            <h4 className="title-sidebar">
              Publcaciones recientes
            </h4>
          )
        }
        {
          relatedPosts?.map((relatedPost: InstagramPost) => {
            return (
              <div className="blog__recent-item clearfix" key={relatedPost.permalink}>
                <div className="img pull-left" style={{ overflow: 'hidden', maxHeight: '100px', minHeight: '100px' }}>
                  <Link href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: relatedPost.id } }}>
                    {
                      relatedPost.media_type === InstagramPostMediaTypes.IMAGE && <img alt="related-post-image" src={relatedPost.media_url} />
                    }
                    {
                      relatedPost.media_type === InstagramPostMediaTypes.CAROUSEL && <img alt="related-post-image" src={relatedPost.media_url} />
                    }
                    {
                      relatedPost.media_type === InstagramPostMediaTypes.VIDEO && (
                        <video width="100%" autoPlay muted loop src={relatedPost.media_url}></video>
                      )
                    }
                  </Link>
                </div>
                <div className="text">
                  <h6>
                    <Link href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: relatedPost.id } }}>
                      {getFormatDate(relatedPost.timestamp)}
                    </Link>
                  </h6>
                  <p className='parragraph-ellipsis'>{relatedPost.caption}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

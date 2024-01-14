import { PAGES_PATH } from '@/utils/pages'
import { InstagramPost } from '@/utils/types'
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
                    <img alt="related-post-image" src={relatedPost.media_url} />
                  </Link>
                </div>
                <div className="text">
                  <h6>
                    <Link href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: relatedPost.id } }}>
                      {getFormatDate(relatedPost.timestamp)}
                    </Link>
                  </h6>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

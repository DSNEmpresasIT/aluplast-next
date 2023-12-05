import { PAGES_PATH } from '@/utils/pages'
import { FacebookPost } from '@/utils/types'
import Link from 'next/link'
import React from 'react'
import { getFormatDate } from '../helpers/helpers'

export const BlogDetailRelatedPost = ({ relatedPosts }: { relatedPosts: FacebookPost[] | undefined }) => {
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
          relatedPosts?.map((relatedPost: FacebookPost) => {
            return (
              <div className="blog__recent-item clearfix" key={relatedPost.url}>
                <div className="img pull-left" style={{ overflow: 'hidden', maxHeight: '100px', minHeight: '100px' }}>
                  <Link href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: relatedPost.target.id } }}>
                    <img alt="related-post-image" src={relatedPost.image.src} />
                  </Link>
                </div>
                <div className="text">
                  <h6>
                    <Link href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: relatedPost.target.id } }}>
                      {getFormatDate(relatedPost.created_time)}
                    </Link>
                  </h6>
                  <p>
                    <em>Facebook, {relatedPost.comments?.length ?? '0'} Comentarios</em>
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

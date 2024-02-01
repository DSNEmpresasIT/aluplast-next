import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getFormatDate } from "../helpers/helpers";
import { InstagramPost } from "@/utils/types";
import { InstagramPostMediaTypes } from "@/utils/types";
import { PAGES_PATH } from "@/utils/pages";
import { BlogDetailRelatedPost } from "./RelatedPostsSection";

const VideoComponent = ({instagramPost}: { instagramPost: InstagramPost }) => (
  <video autoPlay muted loop width="70%" src={instagramPost.media_url}></video>
)

export const BlogDetail = ({
  instagramPostDetail,
  instagramPosts,
}: {
  instagramPostDetail: InstagramPost;
  instagramPosts: InstagramPost[];
}) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [relatedPosts, setRelatedPosts] = useState<InstagramPost[]>();

  function relatedPostSetter() {
    if (instagramPosts?.length) {
      const filteredPosts = instagramPosts.filter(
        (post: InstagramPost) => post !== instagramPostDetail
      );
      let newRelatedPosts: InstagramPost[] = [];
      for (let i = 0; i < filteredPosts.length; i++) {
        if (i < 5 && filteredPosts[i]) {
          newRelatedPosts = [...newRelatedPosts, filteredPosts[i]];
        }
      }
      setRelatedPosts(newRelatedPosts);
    }
  }

  function doAnimation() {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  }

  useEffect(() => {
    relatedPostSetter();
    doAnimation();
  }, [instagramPostDetail]);

  return (
    <section
      className={`blog-detail ${
        animation ? "animate__animated animate__fadeIn" : ""
      } pt-0`}
    >
      <div className="container">
        <div className="row pt-0">
          <div className="col-lg-6 col-md-7">
            <div className="blog-thumb justify-content-center mt-2">
              {
                instagramPostDetail.media_type === InstagramPostMediaTypes.IMAGE && (
                  <img src={instagramPostDetail.media_url} alt="blog-detail-image" />
                )  
                
              }
              {
                instagramPostDetail.media_type === InstagramPostMediaTypes.CAROUSEL && (
                  <img src={instagramPostDetail.media_url} alt="blog-detail-image" />
                )  
                
              }
              {
                instagramPostDetail && instagramPostDetail.media_type === InstagramPostMediaTypes.VIDEO && (
                   <VideoComponent instagramPost={instagramPostDetail} />
                )
              }
            </div>
            <h4 className="blog-title">
              {getFormatDate(instagramPostDetail.timestamp)}
            </h4>
            <p className="blog-meta">
              {/* <em className="author">Aluplast</em> */}
              {/* <em className="cate"><img src={instagramPostDetail.icon} alt="facebook-icon" /></em> */}
              <em className="time">Vía Instagram</em>
            </p>
            <div className="blog-content">
              <p className="m-t-20">{instagramPostDetail.caption}</p>
              <div className="col-12 mt-5">
                <span className="d-flex justify-content-end">
                  <a
                    href={instagramPostDetail.permalink}
                    style={{ color: "#e91d25" }}
                    target="_blank"
                  >
                    Ver publicación en Instagram
                  </a>
                </span>
              </div>
              {/* <blockquote className="blog-quote">
                      {instagramPostDetail.description}
                    </blockquote> */}
              {/* <p className="m-b-20">
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi mather
                      consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                      vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </p>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                      id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                    </p> */}
            </div>
            <div className="blog-footer"></div>
            {/* <BlogDetailComments comments={instagramPostDetail.comments.data} /> */}
          </div>
          <div className="col-lg-4 col-md-5">
            <BlogDetailRelatedPost relatedPosts={relatedPosts} />
            <div className="col-12 mt-5">
              <Link
                href={`/${PAGES_PATH.NEWS_PATH}`}
                className="au-btn au-btn--pill au-btn--yellow au-btn--medium"
                style={{ color: "white" }}
              >
                Volver a todas las noticias
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

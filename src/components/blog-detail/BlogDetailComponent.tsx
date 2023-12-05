import React, { useEffect, useState } from "react";
import { getFormatDate } from "../helpers/helpers";
import { FacebookPost } from "@/utils/types";
import { PAGES_PATH } from "@/utils/pages";
import { BlogDetailRelatedPost } from "./RelatedPostsSection";
import Link from "next/link";
import Image from "next/image";

export const BlogDetail = ({
  facebookPostDetail,
  facebookPosts,
}: {
  facebookPostDetail: FacebookPost;
  facebookPosts: FacebookPost[];
}) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [relatedPosts, setRelatedPosts] = useState<FacebookPost[]>();

  function relatedPostSetter() {
    if (facebookPosts?.length) {
      const filteredPosts = facebookPosts.filter(
        (post: FacebookPost) => post !== facebookPostDetail
      );
      let newRelatedPosts: FacebookPost[] = [];
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
  }, [facebookPostDetail]);

  return (
    <section
      className={`blog-detail ${
        animation ? "animate__animated animate__fadeIn" : ""
      } pt-0`}
    >
      <div className="container">
        <div className="row pt-0">
          <div className="col-lg-8 col-md-7">
            <div className="blog-thumb justify-content-center mt-2">
              <Image
                alt="facebook-post-image"
                width={facebookPostDetail.image.width}
                height={facebookPostDetail.image.height}
                src={facebookPostDetail.image.src}
              />
            </div>
            <h4 className="blog-title">
              {getFormatDate(facebookPostDetail.created_time)}
            </h4>
            <p className="blog-meta">
              {/* <em className="author">Aluplast</em> */}
              {/* <em className="cate"><img src={facebookPostDetail.icon} alt="facebook-icon" /></em> */}
              <em className="time">Facebook</em>
            </p>
            <div className="blog-content">
              <p className="m-t-20">{facebookPostDetail.description}</p>
              <div className="col-12 mt-5">
                <span className="d-flex justify-content-end">
                  <a
                    href={facebookPostDetail.url}
                    style={{ color: "#e91d25" }}
                    target="_blank"
                  >
                    Ver publicación en Facebook
                  </a>
                </span>
              </div>
              {/* <blockquote className="blog-quote">
                      {facebookPostDetail.description}
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
            {/* <BlogDetailComments comments={facebookPostDetail.comments.data} /> */}
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

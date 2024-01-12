import {
  getFacebookPageToken, getFacebookPhotos,
} from "@/services/facebook-services";
import { PAGES_PATH } from "@/utils/pages";
import { FacebookPost, Keys } from "@/utils/types";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

const months = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

const BlogSectionComponent: FC = () => {
  const [facebookToken, setFacebookToken] = useState<string>();
  const [lastFacebookPosts, setLastFacebookPosts] = useState<FacebookPost[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setIsError] = useState<boolean>();

  useEffect(() => {
    if (facebookToken) {
      getFacebookPhotos(facebookToken, process.env.FACEBOOK_PAGE_ID || "")
        .then((res) => (setLastFacebookPosts(res)))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false))
    }
  }, [facebookToken]);

  useEffect(() => {
    if (process.env.FACEBOOK_TOKEN && process.env.FACEBOOK_PAGE_ID) {
      getFacebookPageToken(
        process.env.FACEBOOK_TOKEN || "",
        process.env.FACEBOOK_PAGE_ID || ""
      )
        .then((res) => setFacebookToken(res.access_token))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false))
    }
  }, []);

  return (
    <>
      {!error &&
        (isLoading ? (
          <section className="blog">
            <span className="page-loader__spin"></span>
          </section>
        ) : (
          <section className="blog animate__animated animate__fadeIn">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-12">
                  <h2 className="title">
                    Últimas
                    <span> noticias</span>
                  </h2>
                  <p className="title-detail"></p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-12">
                  <div className="blog-single">
                    <div className="img-blog">
                      <Link href={ 
                        lastFacebookPosts 
                          ? { pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: lastFacebookPosts[0].target.id } } 
                          : `/${PAGES_PATH.NEWS_DETAIL}` 
                          }
                        >
                        <img
                          alt="Blog 1"
                          src={
                            lastFacebookPosts && lastFacebookPosts[0].image.src
                          }
                        />
                        <div className="date date--big">
                          <div className="date__inner">
                            <span className="day">
                              {lastFacebookPosts &&
                                new Date(
                                  lastFacebookPosts[0].created_time
                                ).getDay()}
                            </span>
                            <span className="month">
                              {lastFacebookPosts &&
                                months[
                                  new Date(
                                    lastFacebookPosts[0].created_time
                                  ).getMonth()
                                ]}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="blog-content">
                      <h4 className="blog-title">
                        <Link href={ 
                          lastFacebookPosts 
                            ? { pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: lastFacebookPosts[0].target.id } } 
                            : `/${PAGES_PATH.NEWS_DETAIL}` 
                            }
                          >
                          {lastFacebookPosts && lastFacebookPosts[0].description?.split(",")[0]}
                        </Link>
                      </h4>

                      <p className="author">
                        <em>Vía Facebook</em>
                      </p>
                      <p
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxHeight: "100px",
                        }}
                      >
                        {lastFacebookPosts && lastFacebookPosts[0].description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  {lastFacebookPosts &&
                    lastFacebookPosts.map(
                      (post: FacebookPost, index: number) => {
                        if (index && index < 4) {
                          return (
                            <div
                              className="blog-item"
                              key={`blog-home-${index}`}
                            >
                              <div className="row">
                                <div className="col-md-5 col-12">
                                  <div
                                    className="img-blog"
                                    style={{
                                      maxHeight: "150px",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <Link href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: post.target.id }}}>
                                      <img alt="Blog 2" src={post.image.src} />
                                      <div className="date">
                                        <div className="date__inner">
                                          <span className="day">
                                            {new Date(
                                              post.created_time
                                            ).getDay()}
                                          </span>
                                          <span className="month">
                                            {
                                              months[
                                                new Date(
                                                  post.created_time
                                                ).getDay()
                                              ]
                                            }
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-md-7 col-12">
                                  <div className="blog-content">
                                    <h4 className="blog-title">
                                      <Link href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: post.target.id }}}>
                                        {post.description?.split(",")[0]}
                                      </Link>
                                    </h4>
                                    <p className="author">
                                      <em>Vía Facebook</em>
                                    </p>
                                    <p
                                      style={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        maxHeight: "100px",
                                      }}
                                    >
                                      {post.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      }
                    )}
                  <div className="see-more">
                    <Link
                      href={`/${PAGES_PATH.NEWS_DETAIL}`}
                      className="au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--white"
                    >
                      Ver publicaciones
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default BlogSectionComponent;

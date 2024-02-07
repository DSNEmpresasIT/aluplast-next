import { getInstagramPosts } from "@/services/instagram-services";
import { PAGES_PATH } from "@/utils/pages";
import { InstagramPost, InstagramPostMediaTypes, Keys } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
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
  const [lastInstagramPost, setLastInstagramPost] = useState<InstagramPost[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setIsError] = useState<boolean>();

  useEffect(() => {
    if (process.env.INSTAGRAM_TOKEN) {
      getInstagramPosts(process.env.INSTAGRAM_TOKEN)
        .then((res) => (setLastInstagramPost(res)))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false))
    }
  }, [process.env]);


  return (
    <>
      {!error &&
        isLoading && (
          <section className="blog">
            <span className="page-loader__spin"></span>
          </section>
        )
      }
      {
        lastInstagramPost && (
          (
            <section className="blog animate__animated animate__fadeIn">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <h2 className="title">
                      Últimas
                      <br />
                      <span> noticias</span>
                    </h2>
                    <p className="title-detail"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <div className="blog-single">
                      <div className="img-blog" style={{ overflow: 'hidden', height: '350px' }}>
                        <Link title="Visitar detalle de noticias en Aluplast" href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: lastInstagramPost[0].id }}}
                          >
                          {
                            lastInstagramPost[0].media_type === InstagramPostMediaTypes.IMAGE && (
                              <Image
                              alt="Blog 1"
                              width={0}
                              height={0}
                              src={lastInstagramPost[0].media_url}
                              title="Vista previa noticia Aluplast"
                            />
                            )
                          }
                          {
                            lastInstagramPost[0].media_type === InstagramPostMediaTypes.CAROUSEL && (
                              <Image
                              alt="Blog 1"
                              width={0}
                              height={0}
                              src={lastInstagramPost[0].media_url}
                              title="Vista previa noticia Aluplast"
                            />
                            )
                          }
                          {
                            lastInstagramPost[0].media_type === InstagramPostMediaTypes.VIDEO && (
                              <video autoPlay muted loop src={lastInstagramPost[0].media_url}></video>
                            )
                          }
                          <div className="date date--big">
                            <div className="date__inner">
                              <span className="day">
                                {
                                  new Date(
                                    lastInstagramPost[0].timestamp
                                  ).getDay()}
                              </span>
                              <span className="month">
                                {
                                  months[
                                    new Date(
                                      lastInstagramPost[0].timestamp
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
                            lastInstagramPost 
                              ? { pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: lastInstagramPost[0].id } } 
                              : `/${PAGES_PATH.NEWS_DETAIL}` 
                              }
                            title="Visitar detalle noticia Aluplast"
                          >
                            {lastInstagramPost[0].caption?.split(",")[0]}
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
                          {/* {lastInstagramPost[0].caption} */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12">
                    {
                      lastInstagramPost.map(
                        (post: InstagramPost, index: number) => {
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
                                      <Link title="Visitar detalle noticia Aluplast" href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: post.id }}}>
                                        {
                                          post.media_type === InstagramPostMediaTypes.IMAGE && (
                                            <Image
                                            alt="Blog 1"
                                            width={0}
                                            height={0}
                                            src={post.media_url}
                                          />
                                          )
                                        }
                                        {
                                          post.media_type === InstagramPostMediaTypes.CAROUSEL && (
                                            <Image
                                            alt="Blog 1"
                                            width={0}
                                            height={0}
                                            src={post.media_url}
                                          />
                                          )
                                        }
                                        {
                                          post.media_type === InstagramPostMediaTypes.VIDEO && (
                                            <video autoPlay muted loop width="60%" src={post.media_url}></video>
                                          )
                                        }
                                        <div className="date">
                                          <div className="date__inner">
                                            <span className="day">
                                              {new Date(
                                                post.timestamp
                                              ).getDay()}
                                            </span>
                                            <span className="month">
                                              {
                                                months[
                                                  new Date(
                                                    post.timestamp
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
                                        <Link title="Visitar detalle noticia Aluplast" href={{ pathname: `/${PAGES_PATH.NEWS_DETAIL}`, query: { postId: post.id }}}>
                                          {post.caption?.split(",")[0]}
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
                                        {/* {post.caption} */}
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
          )
        )
      }
    </>
  );
};

export default BlogSectionComponent;

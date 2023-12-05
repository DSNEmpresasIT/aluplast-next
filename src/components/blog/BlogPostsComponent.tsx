import {
  getFacebookImagePosts,
  getFacebookPageToken,
} from "@/services/facebook-services";
import { FacebookPost } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { getFormatDate, pagination } from "../helpers/helpers";
import Link from "next/link";
import { PAGES_PATH } from "@/utils/pages";
import Image from "next/image";

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

interface BlogPostsProps {
  posts: FacebookPost[] | undefined;
  nextUrl: string | null;
}

export const BlogPosts = ({ posts, nextUrl }: BlogPostsProps) => {
  return (
    <>
      <div className="blog1 animate__animated animate__fadeIn" style={{ paddingTop: '0px' }}>
        <div className="container">
          <div className="clearfix row justify-content-center">
            <section className="blog-list-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-7">
                    <div className="blog-list">
                      {posts?.map((post, index) => (
                        <div className="blog-item" key={`${index}-news-post-key`}>
                          <div className="img-blog" style={{ maxHeight: '300px', overflow: 'hidden' }}>
                            <Link href={{ pathname: PAGES_PATH.NEWS_DETAIL, query: { postId: post.target.id } }}>
                              <Image alt="Blog 1" width={post.image.width} height={post.image.height} src={post.image.src} />
                              <div className="date date--big">
                              <div className="date__inner">
                                <span className="day">
                                  {
                                    new Date(
                                      post.created_time
                                    ).getDay()
                                  }
                                </span>
                                <span className="month">
                                  {
                                    months[new Date(post.created_time).getMonth()]
                                  }
                                </span>
                              </div>
                              </div>
                            </Link>
                          </div>
                          <div className="blog-content">
                            <h4 className="blog-title">
                              <Link href={{ pathname: PAGES_PATH.NEWS_DETAIL, query: { postId: post.target.id } }}>
                              </Link>
                            </h4>
                            <p className="author">
                              <em>Via Facebook</em>
                            </p>
                            <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '350px' }}>
                              {post.description}
                            </p>
                          </div>
                          <div className="see-more see-more--left">
                            <Link className="au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--white" href={{ pathname: PAGES_PATH.NEWS_DETAIL, query: { postId: post.target.id } }}>
                              Ver mas
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5">
                    <div className="blog-sidebar">
                      {/* <div className="blog__search">
                        <form
                          action=""
                          method="get"
                          role="search"
                          className="search-form"
                        >
                          <input
                            type="text"
                            name="search"
                            placeholder="Search here..."
                          />
                          <button type="submit">
                            <i className="fa fa-search"></i>
                          </button>
                        </form>
                      </div> */}
                      <div className="blog__about">
                        <h4 className="title-sidebar">Nuestras noticias</h4>
                        <p>
                          Descubre las últimas noticias y tendencias en el mundo de las aberturas y cerramientos en nuestro espacio de noticias. 
                          <br />
                          Mantente al tanto de innovaciones en materiales, proyectos destacados y consejos útiles para mejorar tu hogar o espacio comercial. En Aluplast, nos enorgullece compartir contigo nuestras noticias.
                        </p>
                      </div>
                      {/* <div className="blog__recent">
                        <h4 className="title-sidebar">Recent Post</h4>
                        <div className="blog__recent-item clearfix">
                          <div className="img pull-left">
                            <a href="#">
                              <img
                                alt="Blog Thumb 1"
                                src="img/blog-item-01.jpg"
                              />
                            </a>
                          </div>
                          <div className="text">
                            <h6>
                              <a href="#">details are the key of interior</a>
                            </h6>
                            <p>
                              <em>November , 24 , 2017</em>
                            </p>
                          </div>
                        </div>
                        <div className="blog__recent-item clearfix">
                          <div className="img pull-left">
                            <a href="#">
                              <img
                                alt="Blog Thumb 2"
                                src="img/blog-item-02.jpg"
                              />
                            </a>
                          </div>
                          <div className="text">
                            <h6>
                              <a href="#">morden interior and human ability</a>
                            </h6>
                            <p>
                              <em>November , 15 , 2017</em>
                            </p>
                          </div>
                        </div>
                        <div className="blog__recent-item clearfix">
                          <div className="img pull-left">
                            <a href="#">
                              <img
                                alt="Blog Thumb 3"
                                src="img/blog-item-03.jpg"
                              />
                            </a>
                          </div>
                          <div className="text">
                            <h6>
                              <a href="#">5 things you need to fix your room</a>
                            </h6>
                            <p>
                              <em>November , 24 , 2017</em>
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {!nextUrl && (
              <div className="see-more">
                <a
                  type="button"
                  style={{ color: "white", cursor: "pointer" }}
                  className="au-btn au-btn--pill au-btn--yellow au-btn--big au-btn--white"
                >
                  Cargar Más
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

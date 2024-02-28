import {
  getFacebookImagePosts,
  getFacebookPageToken,
} from "@/services/facebook-services";
import { InstagramPost, InstagramPostMediaTypes } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { getFormatDate, pagination } from "../helpers/helpers";
import Link from "next/link";
import { PAGES_PATH } from "@/utils/pages";
import Image from "next/image";
import { InstagramNewsComponent } from "./InstagramNewsComponent";

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
  posts: InstagramPost[] ;
  nextUrl?: string | undefined;
}

const IconSelector = ({ type }: { type: string }) => {
  if (type === 'VIDEO') {
    return (
      <i className="fa fa-video"></i>
    )
  }

  if (type === "CAROUSEL_ALBUM") {
    return (
      <i className="fa-solid fa-photo-film"></i>
    )
  }
  return (
    <i className="fa-solid fa-image"></i>
  )
}

export const BlogPosts = ({ posts, nextUrl }: BlogPostsProps) => {
  return (
    <section className="project5 px-5">
      <div id="isotope-grid" className="project--hover clearfix row no-gutters">
        {
          posts.map((post, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 item agency" key={`blog-post-key-${index}`}>
              <div className="project__item">
                <div className="pro__img" style={{ overflow: "hidden", height: '350px' }}>
                  <img 
                    src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url} 
                    style={{ width: '100%' }} 
                    alt="Project 1" 
                  />
                  <Link href={{ pathname: PAGES_PATH.NEWS_DETAIL, query: { postId: post.id }}} className="pro-link">
                    <div className="pro-info pro-info--darker">
                      <h4 className="company">
                        { new Date(post.timestamp).toLocaleDateString('es-AR',{ day: '2-digit', month: 'short', year: 'numeric' }) }
                      </h4>
                      <p className="cat-name">
                        <em>
                          <IconSelector type={post.media_type} />
                        </em>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {/* <div className="see-more">
        <a href="" className="au-btn au-btn--pill au-btn--yellow au-btn--big au-btn--white">
          Load more
        </a>
      </div> */}
    </section>
  );
};

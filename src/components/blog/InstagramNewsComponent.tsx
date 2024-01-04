import { getInstagramImages } from "@/services/instagram-services";
import React, { useEffect, useState } from "react";

export const InstagramNewsComponent = () => {
  const [posts, setPosts] = useState<any[]>();
  function getFormatDate(
    date: string,
    config: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "2-digit",
      month: "short",
      day: "2-digit",
    }
  ) {
    return new Date(date).toLocaleDateString("es-ar", config);
  }

  useEffect(() => {
    if (process?.env?.INSTAGRAM_TOKEN) {
      getInstagramImages(process?.env?.INSTAGRAM_TOKEN).then((response) => {
        const newPosts = [];
        for (let i = 0; i < 4; i++) {
          newPosts.push(response[i]);
        }
        setPosts(newPosts);
      });
    }
  }, []);
  return (
    <>
      {posts && posts?.length && (
        <>
          <h4 className="title-sidebar mt-5">Lo último de Instagram</h4>
          {posts.map((post, index) => (
            <div
              className="blog__recent"
              key={`${index}-instagram-recent-posts`}
            >
              <div className="blog__recent-item clearfix">
                <div className="img pull-left">
                  <a href={post.permalink} target="_blank">
                    <img alt="ig-image" src={post.media_url} />
                  </a>
                </div>
                <div className="text">
                  <h6 style={{ overflow: "hidden", textOverflow: "ellipsis", }}>
                    <a
                      href={post.permalink}
                      target="_blank"
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {post.caption}
                    </a>
                  </h6>
                  <p>
                    <em>{getFormatDate(post.timestamp)}</em>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

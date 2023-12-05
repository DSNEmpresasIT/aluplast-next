import React from 'react'

const NewIndex = () => {
  return (
    <div className="page-wrap">
      <section className="blog-list-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="blog-list">
                <div className="blog-item">
                  <div className="img-blog">
                    <a href="blog-detail.html">
                      <img alt="Blog 1" src="/img/blog-11.jpg" />
                      <div className="date date--big">
                        <div className="date__inner">
                          <span className="day">24</span>
                          <span className="month">dec</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="blog-content">
                    <h4 className="blog-title">
                      <a href="blog-detail.html">Minimalist style 2017</a>
                    </h4>
                    <p className="author">
                      <em>By AThony Lee</em>
                    </p>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet ....
                    </p>
                  </div>
                  <div className="see-more see-more--left">
                    <a href="blog-detail.html" className="au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--white">See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="blog-sidebar">
                <div className="blog__search">
                  <form action="" method="get" role="search" className="search-form">
                    <input type="text" name="search" placeholder="Search here..." />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="blog__about">
                  <h4 className="title-sidebar">
                    about
                  </h4>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos qui ratione
                    whattan lolipopz voluptatem sequi nesciunt. Neque porro ququam est, qui dolorem ipsum quia dolor sit amet,
                    cotransectetur, adipisci velit, sed quia non nulock mquam eius modi tempora incidunt ut
                  </p>
                </div>
                <div className="blog__recent">
                  <h4 className="title-sidebar">
                    Recent Post
                  </h4>
                  <div className="blog__recent-item clearfix">
                    <div className="img pull-left">
                      <a href="#">
                        <img alt="Blog Thumb 1" src="/img/blog-item-01.jpg" />
                      </a>
                    </div>
                    <div className="text">
                      <h6>
                        <a href="#">
                          details are the key of interior
                        </a>
                      </h6>
                      <p>
                        <em>November , 24 , 2017</em>
                      </p>
                    </div>
                  </div>
                  <div className="blog__recent-item clearfix">
                    <div className="img pull-left">
                      <a href="#">
                        <img alt="Blog Thumb 2" src="/img/blog-item-02.jpg" />
                      </a>
                    </div>
                    <div className="text">
                      <h6>
                        <a href="#">
                          morden interior and human ability
                        </a>
                      </h6>
                      <p>
                        <em>November , 15 , 2017</em>
                      </p>
                    </div>
                  </div>
                  <div className="blog__recent-item clearfix">
                    <div className="img pull-left">
                      <a href="#">
                        <img alt="Blog Thumb 3" src="/img/blog-item-03.jpg" />
                      </a>
                    </div>
                    <div className="text">
                      <h6>
                        <a href="#">
                          5 things you need to fix your room
                        </a>
                      </h6>
                      <p>
                        <em>November , 24 , 2017</em>
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="blog__cate ul--no-style">
                  <h4 className="title-sidebar">
                    category
                  </h4>
                  <li>
                    <a href="">
                      Design Knowledge
                      <span>
                        <em>(25 posts)</em>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Tricks and Tips
                      <span>
                        <em>(12 posts)</em>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Interior Experiences
                      <span>
                        <em>(21 posts)</em>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Q&A
                      <span>
                        <em>(09 posts)</em>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="blog__tag-wrap">
                  <h4 className="title-sidebar">
                    tags
                  </h4>
                  <div className="blog__tag">
                    <a href="#">
                      Art deco
                    </a>
                    <a href="#">
                      Architecture
                    </a>
                    <a href="#">
                      ARC
                    </a>
                    <a href="#">
                      Famous Building 2017
                    </a>
                    <a href="#">
                      Au Creative
                    </a>
                    <a href="#">
                      Resort
                    </a>
                    <a href="#">
                      Minimalist style
                    </a>
                    <a href="#">
                      MH
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewIndex;

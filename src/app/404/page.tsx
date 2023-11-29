import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: '404'
}

const NotFound = () => {
  return (
    <section className="page-404" style={{ paddingTop: '10%' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="big-info">
              <span>
                404
              </span>
              page not found
            </div>
            <p>
              The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to
              the site's homepage and see if you can find what you are looking for.
            </p>
            <div className="see-more">
              <a href="/" className="au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--white">Home</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound;

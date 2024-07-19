import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonLoaderComponent = () => {
  const skeleton = [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
    <section className="project5 px-5 pt-0">
      <div id="isotope-grid" className="project--hover clearfix row no-gutters">
          {
            skeleton.map(key => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 item agency" key={`skeleton-item-${key}`}>
                  <div className="project__item">
                    <div className="pro__img" style={{ overflow: "hidden", height: '350px' }}>
                      <Skeleton count={1} height={350} />
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
    </section>
  )
}

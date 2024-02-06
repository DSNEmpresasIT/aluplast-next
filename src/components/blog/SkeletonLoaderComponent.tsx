import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonLoaderComponent = () => {
  return (
    <div className="blog1 animate__animated animate__fadeIn">
      <div className="container">
        <div className="clearfix row justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-7">
                  <div>
                    <Skeleton count={1} style={{ height: '300px' }} />
                    <Skeleton count={1} style={{ width: '200px' }} />
                    <Skeleton count={3} />
                  </div>
                  <div style={{ marginTop: '50px' }}>
                    <Skeleton count={1} style={{ height: '300px' }} />
                    <Skeleton count={1} style={{ width: '200px' }} />
                    <Skeleton count={3} />
                  </div>
                  <div style={{ marginTop: '50px' }}>
                    <Skeleton count={1} style={{ height: '300px' }} />
                    <Skeleton count={1} style={{ width: '200px' }} />
                    <Skeleton count={3} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-5">
                  <div>
                    <Skeleton count={1} style={{ width: '200px' }} />
                    <Skeleton count={5} />
                  </div>
                  {/* <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                    <div>
                      <Skeleton count={1} style={{ height: '100px', width: '100px' }} />
                    </div>
                    <div>
                      <Skeleton count={5} style={{ height: '10px', width: '250px' }}/>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                    <div>
                      <Skeleton count={1} style={{ height: '100px', width: '100px' }} />
                    </div>
                    <div>
                      <Skeleton count={5} style={{ height: '10px', width: '250px' }}/>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                    <div>
                      <Skeleton count={1} style={{ height: '100px', width: '100px' }} />
                    </div>
                    <div>
                      <Skeleton count={5} style={{ height: '10px', width: '250px' }}/>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

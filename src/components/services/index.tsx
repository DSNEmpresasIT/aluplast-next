import React from 'react'
import { BreadcumbsComponent } from './BreadcumbsComponent'

export const Index = () => {
  return (
    <div className='page-wrap'>
      <BreadcumbsComponent />
      <section className="process-page">
        <div className="container">
          <div className="process-item">
            <div className="process__left wow fadeInLeft" data-wow-delay="1s">
              <div className="pro__img">
                <img alt="Process 1" src="/img/services/process-05.jpg" />
              </div>
            </div>
            <div className="process__right pro__text-wrap bg-f8 wow fadeInRight" data-wow-delay="1s">
              <div className="pro__text">
                <h2>
                  <span>01</span>
                  meet
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="li-item">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      Duis aute irure dolor in
                    </div>
                    <div className="li-item">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      Excepteur sint occaecat
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="li-item">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      Sunt in culpa qui
                    </div>
                    <div className="li-item">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      Ut enim ad minima veniam
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="process-item">
            <div className="process__left pro__text-wrap bg-f8 wow fadeInLeft" data-wow-delay="1s">
              <div className="pro__text">
                <h2>
                  <span>02</span>
                  disscusion
                </h2>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem huska ax accuntium doloremque laudantium, totam rem aperiam,
                  eaque ipsam .quae ab illo inven
                </p>
              </div>
            </div>
            <div className="process__right wow fadeInRight" data-wow-delay="1s">
              <div className="pro__img">
                <img alt="Process 2" src="/img/services/process-05.jpg" />
              </div>
            </div>
          </div>
          <div className="process-item">
            <div className="process__left wow fadeInLeft">
              <div className="pro__img">
                <img alt="Process 3" src="/img/services/process-05.jpg" />
              </div>
            </div>
            <div className="process__right pro__text-wrap bg-f8 wow fadeInRight">
              <div className="pro__text">
                <h2>
                  <span>03</span>
                  ideal
                </h2>
                <p className="m-b-30">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa quison al officia deserunt mollit anim id est laborum.
                </p>
                <div className="row no-gutters pro-bar-wrap">
                  <div className="col-md-3">
                    <p className="bar__title">Creative</p>
                    <p className="bar__title">Effective</p>
                    <p className="bar__title">Suport</p>
                  </div>
                  <div className="col-md-9">
                    <div className="pro-bar-container color-333">
                      <div className="pro-bar color-e1" data-pro-bar-percent="80" data-pro-bar-delay="500">
                      </div>
                    </div>
                    <div className="pro-bar-container color-333 m-y-15">
                      <div className="pro-bar color-e1" data-pro-bar-percent="90" data-pro-bar-delay="500">
                      </div>
                    </div>
                    <div className="pro-bar-container color-333">
                      <div className="pro-bar color-e1" data-pro-bar-percent="75" data-pro-bar-delay="500">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="process-item">
            <div className="process__left pro__text-wrap bg-f8 wow fadeInLeft">
              <div className="pro__text">
                <h2 className="m-b-20">
                  <span>04</span>
                  contruct
                </h2>
                <p className="m-b-0">
                  <span>saving money: </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  <span>fast: </span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem huska ax accuntium doloremque laudantium, totam rem aperiam,
                  eaque ipsam .quae ab illo inven
                </p>
              </div>
            </div>
            <div className="process__right wow fadeInRight">
              <div className="pro__img">
                <img alt="Process 4" src="/img/services/process-05.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

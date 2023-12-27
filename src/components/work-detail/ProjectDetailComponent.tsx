import { PAGES_PATH } from '@/utils/pages';
import { ProjectDetail } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { Dispatch, FC, SetStateAction, useState } from 'react'

interface ProjectDetailComponentProps { 
  projectDetail: ProjectDetail | undefined 
}

export const ProjectDetailComponent:FC<ProjectDetailComponentProps> = ({ projectDetail }) => {
  return (
    <>
      <section className="port1 p-0 animate__animated animate__fadeIn">
        <div className="container">
          <div className="port1-wrap">
            <div className="row">
              <div className="col-lg-8 mt-4 col-md-12">
                
                <div className="port1__big-img">
                  <a href={`/img/projects/${projectDetail?.id}/${projectDetail?.img[0]}.jpg`} data-lightbox="portfolio">
                    <img alt="Portfolio 1" src={`/img/projects/${projectDetail?.id}/${projectDetail?.img[0]}.jpg`} />
                  </a>
                </div>
                <div className="port1__img-wrap">
                  {
                    projectDetail?.img.map((img, index) => {
                      if (index === 0) return;
                      return (
                        <div 
                          className="port1-img" 
                          key={`${index}-project-detail-key`}
                          style={{
                            maxHeight: '150px',
                            overflow: 'hidden'
                          }}
                        >
                          <a href={`/img/projects/${projectDetail?.id}/${img}.jpg`} data-lightbox="portfolio">
                            <img alt="Portfolio Small 1" src={`/img/projects/${projectDetail?.id}/${img}.jpg`} />
                          </a>
                        </div>
                      )
                    }) 
                  }
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="port__text">
                  <h3>{ projectDetail?.title }</h3>
                  <p className="m-b-20" >
                    { projectDetail?.description }
                  </p>
                  <p>
                  </p>
                </div>
                <div className="port__info">
                  <ul className="port__info-list clearfix ul--no-style">
                    <li>
                      <span className="port__info-title">Cliente</span>
                      <span className="port__info-value">{projectDetail?.client}</span>
                    </li>
                    {/* <li>
                      <span className="port__info-title">Acreage</span>
                      <span className="port__info-value">400.00 m
                        <sup>2</sup>
                      </span>
                    </li> */}
                    <li>
                      {projectDetail?.project_date && (
                          <>
                            <span className="port__info-title">Fecha</span>
                            <span className="port__info-value">{projectDetail?.project_date}</span>
                          </> 
                        )
                      }
                    </li>
                  </ul>
                  <div className="social--port">
                    {/* <a href="">
                      <i className="zmdi zmdi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="zmdi zmdi-dribbble"></i>
                    </a>
                    <a href="">
                      <i className="zmdi zmdi-google"></i>
                    </a>
                    <a href="">
                      <i className="zmdi zmdi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="zmdi zmdi-instagram"></i>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className='col-12 p-5' style={{ display: 'flex', justifyContent: 'end', alignContent: 'center' }}>
                <Link 
                  href={PAGES_PATH.SOME_PROJECTS}
                  style={{ color: 'white', cursor: 'pointer' }} 
                  className="au-btn au-btn--pill au-btn--yellow au-btn--big au-btn--white"
                >
                  Ver mas proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ) 
}

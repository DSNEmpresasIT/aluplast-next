import { PAGES_PATH } from '@/utils/pages';
import { Project } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { Dispatch, FC, SetStateAction, useState } from 'react'

interface ProjectDetailComponentProps { 
  projectDetail: Project | undefined 
}

export const ProjectDetailComponent: FC<ProjectDetailComponentProps> = ({ projectDetail }) => {
  return (
    <>
      <section className="port1 p-0 animate__animated animate__fadeIn">
        <div className="container">
          <div className="port1-wrap">
            <div className="row">
              <div className="col-lg-8 mt-4 col-md-12">
                
                <div className="port1__big-img">
                  <a href={projectDetail?.imageUrl?.[0]?.url} data-lightbox="portfolio">
                    <img alt="Portfolio 1" src={projectDetail?.imageUrl?.[0]?.url} />
                  </a>
                </div>
                <div className="port1__img-wrap">
                  {
                    Array.isArray(projectDetail?.imageUrl) && projectDetail.imageUrl.map((img, index) => {
                      if (index === 0) return null;
                      return (
                        <div 
                          className="port1-img" 
                          key={`${index}-project-detail-key`}
                          style={{
                            maxHeight: '150px',
                            overflow: 'hidden'
                          }}
                        >
                          <a href={img.url} data-lightbox="portfolio">
                            <img alt="Portfolio Small 1" src={img.url} />
                          </a>
                        </div>
                      );
                    }) 
                  }
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="port__text">
                  <h3>{ projectDetail?.title }</h3>
                  <p className="m-b-20 pre-wrap" >
                    { projectDetail?.description }
                  </p>
                  <p>
                  </p>
                </div>
                { (projectDetail?.project_client || projectDetail?.project_date || projectDetail?.project_type) && 
                  (<div className="port__info">
                    <ul className="port__info-list clearfix ul--no-style">
                      {
                        projectDetail?.project_client && (
                          <li>
                            <span className="port__info-title">Cliente</span>
                            <span className="port__info-value">{projectDetail?.project_client}</span>
                          </li>
                        )
                      }
                      {
                        projectDetail?.project_type && (
                          <li>
                            <span className="port__info-title">Tipo</span>
                            <span className="port__info-value">{projectDetail?.project_type.label}</span>
                          </li>
                        )
                      }
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
                  </div>)
                }
              </div>
              <div className='col-12 p-5' style={{ display: 'flex', justifyContent: 'end', alignContent: 'center' }}>
                <Link 
                  href={PAGES_PATH.SOME_PROJECTS}
                  style={{ color: 'white', cursor: 'pointer' }} 
                  className="au-btn au-btn--pill au-btn--yellow au-btn--big au-btn--white"
                >
                  Ver más proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ); 
};


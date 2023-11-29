import { ProjectDetail, ProjectTypes } from '@/utils/types';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { pagination } from '../helpers/helpers';
import { projects } from '@/utils/data/projects';
import { useRouter } from 'next/navigation';
import { PAGES_PATH } from '@/utils/pages';

interface paginationIndex {
  startIndex: number;
  lastIndex: number; 
}

export const ProjectsComponent = () => {
  const router = useRouter();
  const [ projectBlog, setProjectBlog ] = useState<ProjectDetail[]>();
  const [ projectBlogFilter, setProjectBlogFilter ] = useState<ProjectDetail[]>(projects);
  const [ sliceIndex, setSliceIndex ] = useState<paginationIndex>({ startIndex: 0, lastIndex: 2 });
  const [ projectFilter, setProjectFilter ] = useState<ProjectTypes | undefined>(undefined);

  useEffect(() => {
    setProjectBlog(pagination(projectBlogFilter, sliceIndex))
  }, [projectBlogFilter, sliceIndex]);

  const handlePagination = () => {
    setSliceIndex({
      startIndex: sliceIndex.startIndex,
      lastIndex: sliceIndex.lastIndex + 2,
    })
  }

  useEffect(() => {
    if (projectFilter) {
      setProjectBlogFilter(projects.filter(project => project.type === projectFilter));
    } else {
      setProjectBlogFilter(projects);
    }
    setSliceIndex({ startIndex: 0, lastIndex: 4 })
  }, [projectFilter]);

  return (
    <>
      <section className="project1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="filter-wrap">
                <ul id="filter" className="ul--no-style ul--inline">
                  <li 
                    onClick={() => setProjectFilter(undefined)} 
                    className="active"
                  >
                    <span>Mostrar todos</span>
                  </li>
                  <li onClick={() => setProjectFilter(ProjectTypes.RESIDENCIAL)}>
                    <span>Residencial</span>
                  </li>
                  {/* <li onClick={() => setProjectFilter(ProjectTypes.INSTITUCIONAL)}>
                    <span>Institucional</span>
                  </li> */}
                  <li onClick={() => setProjectFilter(ProjectTypes.EDIFICIOS)}>
                    <span>Edificios</span>
                  </li>
                  {/* <li onClick={() => setProjectFilter(ProjectTypes.INTERIORISMO)}>
                    <span>Interiorismo</span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div id="isotope-grid" className="project--hover clearfix">
            { projectBlog?.map( project => {
              return (
                <div 
                  onClick={() => router.push(`/${PAGES_PATH.PROJECT_DETAIL}?projectId=${project.id}`)}
                  className={`col-md-6 col-sm-12 item ${project.type} animate__animated animate__fadeIn`}
                  key={project.title}
                >
                  <div className="project__item">
                    <div className="pro__img">
                      <div style={{  maxHeight: '350px', overflow: 'hidden' }}>
                        <img alt="Project 1" src={`/img/projects/${project.id}/${project.img[0]}.jpg`} />
                      </div>
                      <a type='button' style={{ cursor: 'pointer' }} className="pro-link">
                        <div className="pro-info pro-info--darker">
                          <h2 className="company">
                            { project.client }
                          </h2>
                          <p className="cat-name">
                            <em>
                              { project.title }
                            </em>
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )
            }) }
          </div>
          {
            !(sliceIndex.lastIndex >= projectBlogFilter.length) && (
              <div className="see-more">
                <a 
                  onClick={handlePagination}
                  type='button' 
                  style={{ color: 'white', cursor: 'pointer' }} 
                  className="au-btn au-btn--pill au-btn--yellow au-btn--big au-btn--white"
                >
                  Cargar Más
                </a>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

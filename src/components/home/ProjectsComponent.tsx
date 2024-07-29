import { getAllProjects } from "@/services/projects-service";
import { PAGES, PAGES_PATH } from "@/utils/pages";
import { Project } from "@/utils/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ProjectsComponent = () => {
  const [projectsData, setProjectsData] = useState<Project[]>();

  useEffect(() => {
    getAllProjects()
      .then((response) => setProjectsData(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="latest-project">
      {  
        projectsData?.length && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <h2 className="title">
                  Nuestros
                  <br />
                  <span>Proyectos</span>
                </h2>
                <p className="title-detail">
                </p>
              </div>
            </div>
          </div>
        )
      }
      <div className="row no-gutters">
        {projectsData?.length &&
          projectsData.map((project, index: number) => {
            if (index > 5) return null;
            return (
              <div className="col-lg-4 col-md-6">
                <div className="latest__item" style={{ overflow: 'hidden', maxHeight: '270px'}}>
                  <img alt={`Proyecto ${index} de Aluplast`} referrerPolicy="no-referrer" title="Imagen ilustrativa de un proyecto en aluminio | Aluplast" src={project.images[0].url} />
                  <Link
                    title="Visitar detalle de proyecto"
                    href={{
                      pathname: PAGES_PATH.PROJECT_DETAIL,
                      query: { projectId: project.id },
                    }}
                    className="overlay overlay--invisible overlay--p-15"
                  >
                    <div className="overlay--border"></div>
                  </Link>
                  <div className="latest__item--content">
                    <div className="latest__item--inner">
                      <Link
                        title="Visitar detalle de proyecto"
                        href={{
                          pathname: PAGES_PATH.PROJECT_DETAIL,
                          query: { projectId: project.id },
                        }}
                      >
                        <h3>{project.title}</h3>
                      </Link>
                      {
                        project.project_type && (
                          <div className="cat-name">
                            <Link
                              href={{
                                pathname: PAGES_PATH.PROJECT_DETAIL,
                                query: { projectId: project.id },
                              }}
                            >
                              <em>{project.project_type.label}</em>
                            </Link>
                          </div>
                        )
                      }
                      
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

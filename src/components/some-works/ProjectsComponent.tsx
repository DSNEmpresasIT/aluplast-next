import { getAllProjects } from "@/services/projects-service";
import { PAGES_PATH } from "@/utils/pages";
import { ProjectTypes } from "@/utils/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { pagination } from "../helpers/helpers";
import { useRouter } from "next/navigation";

type PaginationIndex = {
  startIndex: number;
  lastIndex: number;
};

export const ProjectsComponent = () => {
  const router = useRouter();
  const [projectData, setProjectData] = useState<any[]>();
  const [projectBlog, setProjectBlog] = useState<any[]>();
  const [projectBlogFilter, setProjectBlogFilter] = useState<any[]>();
  const [sliceIndex, setSliceIndex] = useState<PaginationIndex>({ startIndex: 0, lastIndex: 6 });
  const [projectFilter, setProjectFilter] = useState<ProjectTypes | undefined>(undefined);

  useEffect(() => {
    if (projectBlogFilter) {
      setProjectBlog(pagination(projectBlogFilter, sliceIndex));
    }
  }, [projectBlogFilter, sliceIndex]);

  useEffect(() => {
    getAllProjects(1, 10, "")
      .then((response) => {
        setProjectData(response.data);
        console.log(response, " response de get all projects");
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setSliceIndex({ startIndex: 0, lastIndex: 6 });
  }, [projectFilter, projectData]);

  return (
    <>
      <section className="project1">
        <div className="container">
          {/* Filtro comentado */}
          {/* <div className="row">
            <div className="col-md-12">
              <div id="filter-wrap">
                <ul id="filter" className="ul--no-style ul--inline mt-5">
                  <li 
                    onClick={() => setProjectFilter(undefined)} 
                    className="active"
                  >
                    <span>Mostrar todos</span>
                  </li>
                  <li onClick={() => setProjectFilter(ProjectTypes.RESIDENCIAL)}>
                    <span>Residencial</span>
                  </li>
                  <li onClick={() => setProjectFilter(ProjectTypes.INSTITUCIONAL)}>
                    <span>Institucional</span>
                  </li>
                  <li onClick={() => setProjectFilter(ProjectTypes.EDIFICIOS)}>
                    <span>Edificios</span>
                  </li>
                  <li onClick={() => setProjectFilter(ProjectTypes.INTERIORISMO)}>
                    <span>Interiorismo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <div id="isotope-grid" className="project--hover clearfix mt-5">
            {projectData?.map((project, i) => {
              const projectImage = project.projects[0].images[0].url;
              console.log(projectImage, 'imagen de proyecto map')
              return (
                <div
                  onClick={() =>
                    router.push(`${PAGES_PATH.PROJECT_DETAIL}?customerId=${project.id}`)
                  }
                  className={`col-md-6 col-sm-12 item ${project.project_type} animate__animated animate__fadeIn`}
                  key={i}
                >
                  <div className="project__item">
                    <div className="pro__img">
                      <div style={{ maxHeight: "350px", overflow: "hidden" }}>
                        {projectImage && <img alt={project.title} src={projectImage} />}
                      </div>
                      <a type="button" style={{ cursor: "pointer" }} className="pro-link">
                        <div className="pro-info pro-info--darker">
                          <h2 className="company" style={{ color: "white" }}>
                            {project.name}
                          </h2>
                          <p className="cat-name">
                            <em>{project.projects[0].title}</em>
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

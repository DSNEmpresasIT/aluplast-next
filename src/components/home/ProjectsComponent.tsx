import { getAllProjects } from "@/services/projects-service";
import { PAGES, PAGES_PATH } from "@/utils/pages";
import { ProjectDetail } from "@/utils/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ProjectsComponent = () => {
  const [projectsData, setProjectsData] = useState<ProjectDetail[]>();

  useEffect(() => {
    getAllProjects()
      .then((response) => (setProjectsData(response), console.log(response)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="latest-project">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <h2 className="title">
              latest
              <span>project</span>
            </h2>
            <p className="title-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        {projectsData?.length &&
          projectsData.map((project, index: number) => {
            if (index > 5) return null;
            return (
              <div className="col-lg-4 col-md-6">
                <div className="latest__item">
                  <img alt="Project 7" src={project.imageUrl[0].url} />
                  <Link
                    href={{
                      pathname: PAGES_PATH.PROJECT_DETAIL,
                      query: { projectId: project._id },
                    }}
                    data-lightbox="Lastest Project"
                    className="overlay overlay--invisible overlay--p-15"
                  >
                    <div className="overlay--border"></div>
                  </Link>
                  <div className="latest__item--content">
                    <div className="latest__item--inner">
                      <Link
                        href={{
                          pathname: PAGES_PATH.PROJECT_DETAIL,
                          query: { projectId: project._id },
                        }}
                      >
                        <h3>{project.title}</h3>
                      </Link>
                      <div className="cat-name">
                        <Link
                          href={{
                            pathname: PAGES_PATH.PROJECT_DETAIL,
                            query: { projectId: project._id },
                          }}
                        >
                          <em>{project.type}</em>
                        </Link>
                      </div>
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

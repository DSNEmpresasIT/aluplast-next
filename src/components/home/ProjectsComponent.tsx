import { getAllProjects } from "@/services/projects-service";
import { PAGES_PATH } from "@/utils/pages";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ProjectsComponent = () => {
  const [projectsData, setProjectsData] = useState<any[]>([]);

  useEffect(() => {
    getAllProjects(1, 10, "")
      .then((response) => {
        setProjectsData(response.data);
        console.log(response, " response de get all projects");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="latest-project">
      {projectsData.length > 0 && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <h2 className="title">
                Nuestros
                <br />
                <span>Clientes</span>
              </h2>
              <p className="title-detail">Conoce sus proyectos destacados</p>
            </div>
          </div>
        </div>
      )}
      <div className="row no-gutters">
        {projectsData.map((customer, index) => {
          if (!customer.projects || customer.projects.length === 0) return null;

          const project = customer.projects[0];
          const projectImage = project.images?.[0]?.url;

          return (
            <div key={customer.id} className="col-lg-4 col-md-6">
              <div
                className="latest__item"
                style={{ overflow: "hidden", maxHeight: "270px" }}
              >
                {projectImage && (
                  <img
                    alt={`Proyecto de ${customer.name}`}
                    referrerPolicy="no-referrer"
                    title={`Imagen de un proyecto de ${customer.name}`}
                    src={projectImage}
                  />
                )}
                <Link
                  title="Ver más proyectos"
                  href={{
                    pathname: PAGES_PATH.PROJECT_DETAIL,
                    query: { customerId: project.id },
                  }}
                  className="overlay overlay--invisible overlay--p-15"
                >
                  <div className="overlay--border"></div>
                </Link>
                <div className="latest__item--content">
                  <div className="latest__item--inner">
                    <h3>{customer.name}</h3>
                    <p>Aluplast</p>
                    <Link
                      href={{
                        pathname: PAGES_PATH.PROJECT_DETAIL,
                        query: { customerId: project.id },
                      }}
                    >
                      <em>Ver proyectos</em>
                    </Link>
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


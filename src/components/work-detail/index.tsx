'use client'
import { PAGES_PATH } from "@/utils/pages";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProjectDetailComponent } from "./ProjectDetailComponent";
import { getProjectDetail } from "@/services/projects-service";
import { Project } from "@/utils/types";

export const  Index = () => {
  const router = useRouter();
  const projectId = useSearchParams().get('projectId');
  const [ projectDetail, setProjectDetail ] = useState<Project>() 

  useEffect(() => {
    if (projectId) {
      getProjectDetail(projectId)
        .then(res => setProjectDetail(res))
        .catch(err => router.push(`/${PAGES_PATH.SOME_PROJECTS}?errorProject=true`))
    }
  }, [projectId])
  return (
    <div className="page-wrap">
      <section className="breadcrumbs-wrap" style={{ paddingTop: "13vh" }}>
        <div className="section-content section-content--w1140">
          <div className="container clearfix">
            <div className="breadcrumbs-inner">
              <ul className="breadcrumbs1 ul--inline ul--no-style">
                <li>
                  <a href="/">Home</a>
                </li>
                <span className="span-active"> / </span>
                <li>
                  <a>Proyectos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {
        projectDetail && <ProjectDetailComponent projectDetail={projectDetail} />
      }
    </div>
  );
};

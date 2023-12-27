import { TexturesComponent } from "@/components/textures/TexturesComponent";
import { PAGES_PATH } from "@/utils/pages";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata  = {
  title: 'Texturas, tratamientos y anodizados'
}

const page = () => {
  return (
    <div className="page-wrap">
      <section className="breadcrumbs-wrap" style={{ paddingTop: '13vh' }}>
        <div className="section-content section-content--w1140">
          <div className="container clearfix">
            <div className="breadcrumbs-inner">
              <ul className="breadcrumbs1 ul--inline ul--no-style">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <span className="span-active">/</span>
                <li>
                  <Link href={`/${PAGES_PATH.CATALOG_PATH}`}>Catálogo</Link>
                </li>
                <span className="span-active">/</span>
                <li className="active">Texturas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <TexturesComponent />
    </div>
  );
};

export default page;

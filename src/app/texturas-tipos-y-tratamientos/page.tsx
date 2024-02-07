import { TexturesComponent } from "@/components/textures/TexturesComponent";
import { PAGES_PATH } from "@/utils/pages";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata  = {
  title: 'Descubre Nuestras Texturas | Aluplast aberturas de Aluminio',
  description: 'Explora nuestra colección exclusiva de texturas para aberturas de aluminio en Aluplast. Descubre cómo nuestras innovadoras texturas pueden agregar elegancia y personalidad a tus ventanas y puertas.¡Sumérgete en el mundo de las texturas únicas para aberturas de aluminio ahora!',
  alternates: {
    canonical: ''
  }
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

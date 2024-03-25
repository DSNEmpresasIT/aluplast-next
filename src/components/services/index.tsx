import React from 'react'
import { BreadcumbsComponent } from './BreadcumbsComponent'

interface ServicesData {
  image: string;
  title: string;
  description: string 
}

const LeftComponent = ({ data }: { data: ServicesData }) => (
  <div className="process-item">
    <div className="process__left wow fadeInLeft" data-wow-delay="1s">
      <div className="pro__img">
        <img alt="Process 1" src={`/img/services/${data.image}.png`} />
      </div>
    </div>
    <div className="process__right pro__text-wrap bg-f8 wow fadeInRight" data-wow-delay="1s">
      <div className="pro__text">
        <h2>
          {/* <span>01</span> */}
          { data.title }
        </h2>
        <p className='service-description'>
          {data.description}
        </p>
      </div>
    </div>
  </div>
)

const RightComponent = ({ data }: { data: ServicesData }) => (
  <div className="process-item">
    <div className="process__left pro__text-wrap bg-f8 wow fadeInLeft" data-wow-delay="1s">
      <div className="pro__text">
        <h2>
          {/* <span>02</span> */}
          {data.title}
        </h2>
        <p className="mb-0 service-description">
          { data.description }
        </p>
        <p>
        </p>
      </div>
    </div>
    <div className="process__right wow fadeInRight" data-wow-delay="1s">
      <div className="pro__img">
        <img alt="Process 2" src={`/img/services/${data.image}.png`} />
      </div>
    </div>
  </div>
)

export const Index = () => {
  const servicesData: ServicesData[] = [
    {
      image: '1',
      title: '🤝 Acompañamiento y Seguimiento en Obra',
      description: 'Con Aluplast, tu proyecto está respaldado. Nuestro equipo ofrece un acompañamiento integral y seguimiento en obra, garantizando la excelencia en cada paso. ¡Confía en nosotros para tus aberturas!'
    },
    {
      image: '2',
      title: '✨ Diseño Asistido por Profesionales',
      description: 'Transforma tu visión en realidad con nuestro diseño asistido por profesionales. En Aluplast, combinamos tu estilo con la funcionalidad óptima, creando aberturas que destacan en estética y rendimiento.'
    },
    {
      image: '3',
      title: '📈 Evaluamos la Mejor Opción para tu Proyecto',
      description: 'En Aluplast, entendemos la singularidad de cada proyecto. Nuestros expertos evalúan meticulosamente tus necesidades para ofrecerte la mejor opción en aberturas, asegurando resultados excepcionales y duraderos.'
    },
    {
      image: '4',
      title: '🏢 ShowRoom en Sucursales',
      description: 'Descubre la calidad y variedad de nuestras aberturas en persona. Visita nuestro ShowRoom en nuestras sucursales, donde podrás apreciar de cerca la elegancia y durabilidad de nuestros productos.'
    },
    {
      image: '5',
      title: '👷‍♂️ Logística y Distribución',
      description: 'Agilidad y eficiencia definen nuestra logística y distribución. Aluplast garantiza la entrega puntual de tus aberturas en cualquier punto de Entre Ríos y Provincias vecinas, asegurando la satisfacción total de nuestros clientes.'
    },
  ]

  return (
    <div className='page-wrap'>
      <BreadcumbsComponent />
      <section className="process-page">
        <div className="container">
          {
            servicesData.map((service: ServicesData, index: number) => {
              if (index % 2) {
                return <RightComponent data={service} key={`services-key-${index}`} />
              }
              
              return <LeftComponent data={service} key={`services-key-${index}`} />
            }) 
          }
        </div>
      </section>
    </div>

  )
}

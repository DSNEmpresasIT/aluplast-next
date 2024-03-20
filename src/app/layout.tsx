import WhatsAppButtonComponent from '@/components/commons/WhatsAppButtonComponent'
import { BackToTopComponent } from '@/components/commons/BackToTopComponent'
import { FooterComponent } from '@/components/commons/footer/FooterComponent'
import { HeaderDesktopComponent } from '@/components/commons/headers/HeaderDesktopComponent'
import { HeaderMobileComponent } from '@/components/commons/headers/HeaderMobileComponent'
import { HeaderStickComponent } from '@/components/commons/headers/HeaderStickComponent'
import { BodyLayout } from './BodyLayout'
import { Metadata } from 'next'

export const dynamic = 'force-static';


export const metadata: Metadata = {
  keywords: 'Aberturas en Urdinarrain, Fabrica de Aberturas en Entre Ríos, Aberturas de Aluminio y PVC en Argentina, Tipologías de Aberturas, Oscilobatientes Urdinarrain, Corredizas de Calidad Argentina, Pivotantes Aluminio Entre Ríos, Soluciones en Aberturas Argentina, Excelencia en Aberturas, Satisfacción del Cliente Aberturas, Ventanas de PVC en Urdinarrain, Puertas de Aluminio Argentina, Ventanas de Diseño en Entre Ríos, Fabricante de Aberturas de Calidad, Ventanas Modernas Urdinarrain, Soluciones Innovadoras en Aberturas, Aberturas a Medida Entre Ríos, Cerramientos de Aluminio Urdinarrain, Calidad Certificada en Aberturas, Diseños Exclusivos de Ventanas, Fachadas de Aluminio en Argentina, Aberturas Eficientes Energéticamente, Puertas de Seguridad Urdinarrain, Ventanas Resistentes al Clima, Fabricante de Puertas Pivotantes, Aberturas para Proyectos Residenciales, Ventanas de Alta Gama Argentina, Aberturas Personalizadas Urdinarrain, Puertas de Entrada de Lujo, Ventanas Antirruido en Entre Ríos', 
  authors: {
    name: 'DSN Empresas',
    url: 'https://www.dsnempresas.com.ar/'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="homepage-box" lang="es">
      <head>
        <meta property="og:image" content="https://aluplast.com.ar/img/whoweare/we-are-01.jpg" />
        <meta property="og:image:width" content="100" />
        <meta content="text/html;charset=UTF-8" />
        <meta name="googlebot" content="index, follow" />
        <meta name="robots" content="index, follow, revisit-after=604800"></meta>
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="/font/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/font/mdi-font/css/material-design-iconic-font.min.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/bootstrap4/bootstrap.min.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/owl-carousel/animate.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/revolution/settings.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/revolution/navigation.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/revolution/layers.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/colorbox/colorbox.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/lightbox2/src/css/lightbox.css" />
        <link rel="stylesheet" referrerPolicy='no-referrer' type="text/css" href="/vendor/smk-accordion/accordion.css" />
        {/* {
          pageTitle === PAGES.ABOUT_US && (
            <link rel="stylesheet" type="text/css" href="/vendor/slick/slick.css">
            <link rel="stylesheet" type="text/css" href="/vendor/slick/slick-theme.css">
          )
        } */}
        <link rel="stylesheet" type="text/css" href="/css/font.css" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
      </head>
      <BodyLayout>
        <HeaderDesktopComponent />
        <HeaderMobileComponent />
        <HeaderStickComponent />
        {children}
        <BackToTopComponent />
        <FooterComponent />
        <WhatsAppButtonComponent />
      </BodyLayout>
    </html>
  )
}

import type { Metadata } from 'next'
import WhatsAppButtonComponent from '@/components/commons/WhatsAppButtonComponent'
import { BackToTopComponent } from '@/components/commons/BackToTopComponent'
import { FooterComponent } from '@/components/commons/footer/FooterComponent'
import { HeaderDesktopComponent } from '@/components/commons/headers/HeaderDesktopComponent'
import { HeaderMobileComponent } from '@/components/commons/headers/HeaderMobileComponent'
import { HeaderStickComponent } from '@/components/commons/headers/HeaderStickComponent'
import { BodyLayout } from './BodyLayout'

export const metadata: Metadata = {
  title: 'Aluplast',
  description: 'Aluplast',
  keywords: "aluminio, Entre Ríos, Concordia, pvc, aberturas, cerramientos, sistemas complementarios, portones, control solar, vidrios, garage, diseño, puertas, ventanas, industria",
}

export const dynamic = 'force-static';


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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="/font/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/font/mdi-font/css/material-design-iconic-font.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/bootstrap4/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/owl-carousel/animate.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/revolution/settings.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/revolution/navigation.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/revolution/layers.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/colorbox/colorbox.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/lightbox2/src/css/lightbox.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/smk-accordion/accordion.css" />
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

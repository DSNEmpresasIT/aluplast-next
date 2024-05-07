import WhatsAppButtonComponent from '@/components/commons/WhatsAppButtonComponent'
import { BackToTopComponent } from '@/components/commons/BackToTopComponent'
import { FooterComponent } from '@/components/commons/footer/FooterComponent'
import { HeaderDesktopComponent } from '@/components/commons/headers/HeaderDesktopComponent'
import { HeaderMobileComponent } from '@/components/commons/headers/HeaderMobileComponent'
import { HeaderStickComponent } from '@/components/commons/headers/HeaderStickComponent'
import { BodyLayout } from './BodyLayout'
import { Metadata, MetadataRoute } from 'next'
import { PAGES, keywords } from '@/utils/pages'
import { ModalComponent } from '@/components/commons/ModalComponent'
import { CartContextProvider } from '@/context/cart-context'

export const dynamic = 'force-static';

export function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/dashboard/',
      },
    ],
    sitemap: 'https://aluplast.com.ar/sitemap.xml',
  }
}

export const metadata: Metadata = {
  openGraph: {
    title: {
      default: PAGES.HOME,
      template: '%s | Urdinarrain - Entre Ríos'
    },
    description: "Descubre la excelencia en aberturas de aluminio y PVC en Urdinarrain, Entre Ríos. Fabricamos oscilobatientes, corredizas, pivotantes y más. Garantizamos calidad y satisfacción para nuestros clientes.",
    authors: ['David Caro - @FullStack Developer', 'DSN Empresas @2024'],
    images: [
      {
        url: 'https://aluplast.com.ar/img/whoweare/we-are-01.jpg',
        height: 200,
        width: 200,
        alt: PAGES.HOME
      }
    ]
  },
  title: {
    default: PAGES.HOME,
    template: '%s | Urdinarrain - Entre Ríos'
  },
  description: "Descubre la excelencia en aberturas de aluminio y PVC en Urdinarrain, Entre Ríos. Fabricamos oscilobatientes, corredizas, pivotantes y más. Garantizamos calidad y satisfacción para nuestros clientes.",
  keywords, 
  authors: {
    name: 'DSN Empresas',
    url: 'https://www.dsnempresas.com.ar/'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: 'origin-when-cross-origin',
  robots: {
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      notranslate: true,
    }
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
        <meta content="text/html;charset=UTF-8" />
        {/* <meta property="og:image" content="https://aluplast.com.ar/img/whoweare/we-are-01.jpg" /> */}
        {/* <meta property="og:image:width" content="100" /> */}
        {/* <meta name="googlebot" content="index, follow" /> */}
        {/* <meta name="robots" content="index, follow, revisit-after=604800"></meta> */}
        {/* <meta name="google" content="notranslate" /> */}
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
        <link rel="stylesheet" type="text/css" href="/css/custom.css" />
      </head>
      <BodyLayout>
        <CartContextProvider>
          <HeaderDesktopComponent />
          <HeaderMobileComponent />
          <HeaderStickComponent />
          {children}
          <BackToTopComponent />
          <FooterComponent />
          <WhatsAppButtonComponent />
          <ModalComponent />
        </CartContextProvider>
      </BodyLayout>
    </html>
  )
}

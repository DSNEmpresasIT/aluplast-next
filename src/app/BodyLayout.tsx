'use client'
import 'animate.css';
import React, { ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { PAGES, PAGES_PATH } from '@/utils/pages'
import { LoaderComponent } from '@/components/commons/LoaderComponent'

export const BodyLayout = ({ children }: { children: ReactNode }) => {
  const [ isJQueryLoad, setIsJQueryLoad ] = useState<boolean>(false);
  const pathname = usePathname();
  console.log(pathname)

  return (
    <body className={ (pathname === `/${PAGES_PATH.CATALOG_PATH}`) ? 'box' : '' }>
      {children}
      {!isJQueryLoad && <LoaderComponent />}
      <Script async type="text/javascript" src="/vendor/jquery-3.2.1.min.js" onLoad={() => setIsJQueryLoad(true)} />
      <Script type="text/javascript" src="/vendor/wow/wow.min.js" />
      <Script type="text/javascript" src="/vendor/bootstrap4/popper.min.js" />
      <Script type="text/javascript" src="/vendor/bootstrap4/bootstrap.min.js" />
      <Script type="text/javascript" src="/vendor/counter-up/jquery.waypoints.min.js" />
      <Script type="text/javascript" src="/vendor/counter-up/jquery.counterup.min.js" />
      <Script type="text/javascript" src="/vendor/lightbox2/src/js/lightbox.js" />
      <Script type="text/javascript" src="/vendor/owl-carousel/owl.carousel.min.js" />
      <Script type="text/javascript" src="/vendor/revolution/jquery.themepunch.revolution.min.js" />
      <Script type="text/javascript" src="/vendor/revolution/jquery.themepunch.tools.min.js" />
      <Script type="text/javascript" src="/vendor/isotope/isotope.pkgd.min.js" />
      <Script type="text/javascript" src="/vendor/revolution/local/revolution.extension.actions.min.js"/>
      <Script type="text/javascript" src="/vendor/revolution/local/revolution.extension.carousel.min.js"/>
      <Script type="text/javascript" src="/vendor/revolution/local/revolution.extension.kenburn.min.js"/>
      <Script type="text/javascript" src="/vendor/revolution/local/revolution.extension.layeranimation.min.js"/>
      <Script type="text/javascript" src="/vendor/revolution/local/revolution.extension.navigation.min.js"/>
      <Script type="text/javascript" src="/vendor/revolution/local/revolution.extension.parallax.min.js"/>
      <Script type="text/javascript" src="/vendor/revolution/local/revolution.extension.slideanims.min.js"/>
      <Script type="text/javascript" src="/vendor/revolution/local/revolution.extension.video.min.js"/>
      <Script type="text/javascript" src="/js/main.js"/>      
      <Script type="text/javascript" src="/js/main.js"/>
      <Script type="text/javascript" src="/js/revo-custom.js"/>
      <Script type="text/javascript" src="/js/wow-custom.js"/>
      <Script type="text/javascript" src="/js/count.js"/>
    </body>
  )
}

import { getInstagramImages } from "@/services/instagram-services";
import { Constants } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import errorData from '@/utils/data/handlerData.json';

interface InstagramObject {
  id: string;
  media_url: string;
  permalink: string;
}

export const InstagramGalleryFooter = () => {
  const [ imagesData, setImagesData ] = useState<InstagramObject[]>();
  const [ nextLink, setNextLink ] = useState<string>()
  const [ fetchError, setError ] = useState<boolean>(false);

  useEffect(() => {
    getInstagramImages()
      .then((response) => {
        setNextLink(response.next)
        setImagesData(response.images)
      })
      .catch((err) => (console.log(err), setError(true)))
  }, [])
  
  useEffect(() => {
    if (nextLink && imagesData && imagesData?.length < 6) {
      getInstagramImages(nextLink)
        .then((response) => setImagesData([...imagesData, ...response.images]))
        .catch((err) => (console.log(err), setError(true)))
    }
  }, [nextLink])


  useEffect(() => {
    if (fetchError) {
      setImagesData([...errorData.lastPosts])
    }
  }, [fetchError])
  return (
    <div className="col-lg-4 col-md-6">
      <>
        <h5 className="title-footer m-b-30">Instagram</h5>
        <div className="gallery clearfix">
          {
            imagesData
            ? (
              imagesData.map((img, i) => {
                if (i < Constants.FOOTER_IG_GALLERY_NUMBER) {
                  return (
                    <div className="gallery__item" key={`${img.id}${i}`}>
                      <img title={`Imagen ${i+1} traida del Instagram oficial de Alupast`} alt={`Imagen instagram ${i+1}`} src={img.media_url} style={{ maxHeight: '82.5px', minWidth: '82.5px', minHeight: '82.5px' }}/>
                      <a title="Visitar instagram Aluplast" href={img.permalink} target="_blank" rel="noreferrer" className="pro-link">
                        <div className="overlay overlay--invisible overlay--yellow"></div>
                      </a>
                    </div>
                  )
                }
              })
            )
            : (
              <span style={{ marginTop: '30px' }} className='page-loader__spin'></span>   
            )
          }
        </div>
      </>
      <h5 className="title-footer">Nuestras redes</h5>
      <div className="social-footer">
        <a title="Enlaces de las redes sociales de Alupast | fábrica de aperturas de Aluminio" href="https://www.facebook.com/AluplastAberturas">
          <i className="zmdi zmdi-facebook"></i>
        </a>
        <a title="Enlaces de las redes sociales de Alupast | fábrica de aperturas de Aluminio" href="https://www.instagram.com/aluplast.aberturas/">
          <i className="zmdi zmdi-instagram"></i>
        </a>
        <a title="Enlaces de las redes sociales de Alupast | fábrica de aperturas de Aluminio" href="https://www.youtube.com/@aluplastmedia">
          <i className="zmdi zmdi-youtube"></i>
        </a>
        <a title="Enlaces de las redes sociales de Alupast | fábrica de aperturas de Aluminio" href="https://wa.me/+5493446598417">
          <i className="zmdi zmdi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

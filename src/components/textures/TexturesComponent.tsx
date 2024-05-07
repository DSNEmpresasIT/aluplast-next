'use client'
import React, { useEffect, useState } from 'react'
import { texturesData } from '@/utils/data/catalog';
import './texturescomponent.css';

export const TexturesComponent = () => {
  const [imageName, setImageState] = useState<string>('anodizadogris');
  const [isAnimationOn, setIsAnimationOn] = useState<boolean>(false);

  const handleSetNewTexture = (texture:string) => {
    setImageState(texture);
  }

  const animation = () => {
    setIsAnimationOn(true);
    setTimeout(() => {
      setIsAnimationOn(false)
    }, 500)
  }

  useEffect(() => {
    animation();
  }, [imageName])

  return (
    <section className="pro-list-wrap">
      <div className="section-content section-content--w1140">
        <div className="container">
          <div className="pro-list">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="row pt-3">
                  <div className='col-12'>
                    <h3>Texturas, anodizado y pintura</h3>
                    <p className='pt-3'>
                      Nuestros métodos de tratamiento de superficie, pintura y anodizado, pueden reforzar las ventajas del aluminio y rematar tu producto con un hermoso acabado. El anodizado sella y protege el aluminio extruido. La pintura te ofrece una selección ilimitada de colores y en diversos brillos, con una excelente consistencia de color.
                      <br />
                      <br />
                      Al anodizar tus extrusiones de aluminio obtendrás una superficie que repele la suciedad y mejora la resistencia a la corrosión, lo cual te proporcionará una superficie con revestimiento aislado eléctricamente y preservará el acabado del metal. Y además, es una superficie muy agradable al tacto.
                    </p>
                  </div>
                  {
                    texturesData.map((texture, i) => {
                        return (
                          <div key={i} className="col-3 textures-button-container">
                            <button type="button" onClick={() => handleSetNewTexture(texture.img)}>
                              <img src={`/img/textures/${texture.img}.png`}  style={{ border: '1px solid #000' }} alt={`${texture.img}`}/>
                              { texture.name }
                            </button>
                          </div>
                        )
                      }
                    )
                  }
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pt-5 ">
                <div className={`row animate__animated ${ isAnimationOn && 'animate__fadeIn' }`}>
                  <img className='ml-5' src={`/img/textures/examples/${imageName}.png`} alt="example" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

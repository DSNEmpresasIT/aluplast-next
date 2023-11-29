import Image from 'next/image'
import React from 'react'

const SliderComponent = () => {
  return (
    <section className="slide">
      <div className="rev_slider_wrapper">
        <div id="revolution-slider3" className="rev_slider" data-version="5.4.5">
          <ul>
            <li data-transition="fade" data-slotamount="7" data-masterspeed="2000">
              <Image width={0} height={0} quality={100} src="/img/slider/1.jpg" alt="Slide 1" />
              <div className="tp-caption" data-x="center" data-y="['300','190','190','160']" data-whitespace="no-wrap" data-frames='[{"delay":0,"speed":4500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'>
                <div className="slide-title slide-title-3">
                  <span>Confort</span> y <span>estilo</span>
                  <br /> que se sienten
                </div>
              </div>
            </li>
            <li data-transition="incube" data-slotamount="7" data-masterspeed="2000">
              <Image width={0} height={0} quality={100}src="/img/slider/2.jpg" alt="Slide 2" />
              <div className="tp-caption" data-x="center" data-y="['300','190','190','160']" data-whitespace="no-wrap" data-frames='[{"delay":1000,"speed":2500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'>
                <div className="slide-title slide-title-3">
                  Control de temperatura
                  <br />
                  con <span>Elegancia</span>
                </div>
              </div>
            </li>
            <li data-transition="slidedown" data-slotamount="7" data-masterspeed="2000" data-delay="5000">
              <Image width={0} height={0} quality={100}src="/img/slider/3.jpg" alt="Slide 3" />
              <div className="tp-caption" data-x="center" data-y="['300','190','190','160']" data-whitespace="no-wrap" data-frames='[{"delay":1600,"speed":1000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'>
                <div className="slide-title slide-title-3">
                  Control <span>total</span>
                  <br />
                  bienestar absoluto
                </div>
              </div>
            </li>
            <li data-transition="fade" data-slotamount="7" data-masterspeed="2000">
              <Image width={0} height={0} quality={100}src="/img/slider/5.jpg" alt="Slide 1" />
              <div className="tp-caption" data-x="center" data-y="['300','190','190','160']" data-whitespace="no-wrap" data-frames='[{"delay":0,"speed":4500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'>
                <div className="slide-title slide-title-3">
                  La <span>calidad</span> no es
                  <br /> un acto, es un {" "}
                  <span>Hábito</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SliderComponent;

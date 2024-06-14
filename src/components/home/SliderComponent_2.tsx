import { TransitionTypes, sliderData } from '@/utils/data/home'
import Image from 'next/image'
import React from 'react'

export const SliderComponent_2 = () => {
  return (
    <section className="slide2">
      <div className="rev_slider_wrapper">
        <div id="revolution-slider2" className="rev_slider" data-version="5.4.4" style={{ display: 'none' }}>
          <ul>
            { sliderData.map((data, index) => (
              <li key={`slider_2-key-${index}`} data-transition={index % 2 === 0 ? TransitionTypes.scaledownfromtop : TransitionTypes.fade} data-slotamount="7" data-masterspeed="2000" data-delay="10000">
                <Image width={0} height={0} quality={100} src={`/img/slider/${index + 1}.jpg`} alt="Slide 1" />
                <div className="tp-caption slide-content-2 slide-title text-white" data-x="center" data-y="center" data-fontsize="[72, 72, 58, 38]" data-lineheight="[106, 106, 76, 50]"
                  data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'>
                  <data.text />
                </div>

                <a  href="https://wa.me/+5493446598417" target='_blank' className="tp-caption au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--slide" data-x="center" data-y="center"
                  data-voffset="['150','150','120','95']" data-frames='[{"delay":3000,"speed":1000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'>
                    <i className="zmdi zmdi-whatsapp" style={{ fontSize: '23px' }}></i>
                </a>
              </li>
            )) }
          </ul>
        </div>
      </div>
      <a className="mouse">
        <span className="mouse__wheel"></span>
        <i className="zmdi zmdi-chevron-down"></i>
      </a>
    </section>
  )
}

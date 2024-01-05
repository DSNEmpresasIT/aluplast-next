import Image from "next/image";
import React from "react";

const transitionTypes = {
  incube: "incube",
  fade: "fade",
  slidedown: "slidedown",
};

const SliderComponent = () => {
  const sliderData = [
    {
      text: () => (
        <>
          <span>Unicenter</span>
          <br />
          Shopping
        </>
      ),
      transition: transitionTypes.incube,
    },
    {
      text: () => (
        <>
          <span>Bureau</span>
          <br />
          Diagonal
        </>
      ),
      transition: transitionTypes.slidedown,
    },
    {
      text: () => (
        <>
          Aperturas de
          <br />
          <span>alta</span>
          <br />
          prestación
        </>
      ),
      transition: transitionTypes.incube,
    },
    {
      text: () => (
        <>
          La <span>calidad</span> no es
          <br /> un acto, es un <span>Hábito</span>
        </>
      ),
      transition: transitionTypes.slidedown,
    },
  ];

  return (
    <section className="slide">
      <div className="rev_slider_wrapper">
        <div
          id="revolution-slider3"
          className="rev_slider"
          data-version="5.4.5"
        >
          <ul>
            {sliderData.map((slide, index) => (
              <li
                data-transition={slide.transition}
                data-slotamount="7"
                data-masterspeed="2000"
                key={`${index}-slider-component-key`}
              >
                <Image
                  width={0}
                  height={0}
                  quality={100}
                  src={`/img/slider/${index + 1}.jpg`}
                  alt="Slide 1"
                />
                <div
                  className="tp-caption"
                  data-x="center"
                  data-y="['300','190','190','160']"
                  data-whitespace="no-wrap"
                  data-frames='[{"delay":0,"speed":4500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                >
                  <div className="slide-title slide-title-3">
                    <slide.text />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;

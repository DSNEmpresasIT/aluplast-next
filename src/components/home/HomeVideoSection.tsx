import React from "react";
import Iframe from "react-iframe";

const HomeVideoSection = () => {
  return (
    <section className="youtube-inframe-video row" style={{ margin: "0" }}>
      <div className="col-12 col-md-6">
        <Iframe
          width="100%"
          height="400px"
          styles={{ border: 'none' }}
          url="https://www.youtube.com/embed/UFolnhSaJG0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></Iframe>
      </div>
      <div className="col-6 d-none d-md-block">
        <Iframe
          width="100%"
          height="400px"
          styles={{ border: 'none' }}
          url="https://www.youtube.com/embed/Nrf8er8kjCc?si=99RP2_3tmoSFec7q"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></Iframe>
      </div>
    </section>
  );
};

export default HomeVideoSection;

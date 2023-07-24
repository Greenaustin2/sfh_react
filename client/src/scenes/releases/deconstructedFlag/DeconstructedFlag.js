import flagImage1 from "./deconstructed-flag1.jpg";
import s from "../../../css/content.module.css";
import { useState } from "react";
import Lightbox from "../../../components/Lightbox";

// import flagImage2 from "../images/009-deconstructed-flag/deconstructed-flag2.jpg";

const DeconstructedFlag = (props) => {
  // const [toggle, setToggle] = useState(false);
  const sources = [flagImage1];
  const types = ["image"];
  return (
    <div className={s.content} id="df">
      <div className={s.contentTop}>
        <h2>Deconstructed Flag</h2>
      </div>
      <div className={s.contentLeft}>
        <img
          id={s.albumArt}
          alt="flag"
          src={flagImage1}
          onClick={props.toggleLightbox}
        />
      </div>
      <div className={s.contentRight}>
        <p>
          Risograph Print, 11 x 14.25 in
          <br />
          80lb Neenah Vellum, Edition of 108
          <br />
          <br />
          Deconstructed Flag targets the overall political divide America has
          reached in light of current events. This print realizes dogmatic views
          and the inability to compromise that has left the country in a
          constant state of tension. Most importantly, Deconstructed Flag acts
          as a symbol to encourage empathy and communication over intolerance.
          <br />
          <br />
          All proceeds will be donated to Planned Parenthood, ACLU, and NoDAPL.
          <br />
          <br />
          Printed by No Style Press: http://nostyle.us
          <br />
          <br />
          Released February 13, 2017
          <br />
          VI-009
          <br />
          <br />
          <em style={{ color: "red" }}>SOLD OUT</em>
        </p>
      </div>
      <div className={s.contentBottom}></div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default DeconstructedFlag;

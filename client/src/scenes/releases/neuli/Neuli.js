import neuli1 from "./neuli-1.jpg";
import neuli2 from "./neuli-2.jpg";
import neuli3 from "./neuli-3.jpg";
import neuli4 from "./neuli-4.jpg";
import neuli5 from "./neuli-5.jpg";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const Neuli = (props) => {
  const sources = [neuli1, neuli2, neuli3, neuli4, neuli5];
  const types = Array(5).fill("image");
  return (
    <div className={s.content} id="nli">
      <div className={s.contentTop}>
        <h2>NEULI</h2>
      </div>
      <div className={s.contentLeft}>
        <img
          alt="book cover"
          id={s.albumArt}
          src={neuli1}
          onClick={props.toggleLightbox}
        />
      </div>
      <div className={s.contentRight}>
        <p>
          <span style={{ fontWeight: "bold" }}>NEULI</span> re-contextualizes
          images from a common packaging and sales catalog known as ULINE.
          <br />
          It acts as an ode to Marcel Duchamp and the readymade in modern
          context.
          <br />
          <br />
          <a href="https://jaysonpayne.com/" target="_blank" rel="noreferrer">
            Jayson Payne
          </a>
          , 2016
          <br />
          30 Pages, 4.25 X 5.5 in
          <br />
          <br />
          Released April 14, 2016
          <br />
          VI_004
          <br />
        </p>
      </div>
      <div className={s.contentBottom}></div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default Neuli;

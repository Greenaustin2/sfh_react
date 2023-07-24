import cardImage from "./sfcard.png";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const PlayingCard = (props) => {
  const sources = [cardImage];
  const types = ["image"];
  return (
    <div className={s.content} id="sfc">
      <div className={s.contentTop}>
        <h2>SFH 52</h2>
      </div>
      <div className={s.contentLeft}>
        <img
          alt="playing card"
          id={s.albumArt}
          src={cardImage}
          onClick={props.toggleLightbox}
        />
      </div>
      <div className={s.contentRight}>
        <p>
          Deck of 52 playing cards.
          <br />
          1/1
          <br />
          <br />
          VI_000
        </p>
      </div>
      <div className={s.contentBottom}></div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default PlayingCard;

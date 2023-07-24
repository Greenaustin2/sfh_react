import hmfCover from "./hmf-cover.jpg";
import hmf1 from "./hmf-1.jpg";
import hmf2 from "./hmf-2.jpg";
import hmf3 from "./hmf-3.jpg";
import hmf4 from "./hmf-4.jpg";
import hmf5 from "./hmf-5.jpg";
import hmf6 from "./hmf-6.jpg";
import hmf7 from "./hmf-7.jpg";
import hmf8 from "./hmf-8.jpg";
import hmf9 from "./hmf-9.jpg";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const HelloMyFriends = (props) => {
  const sources = [hmf1, hmf2, hmf3, hmf4, hmf5, hmf6, hmf7, hmf8, hmf9];
  const types = Array(9).fill("image");
  return (
    <div class={s.content} id="hmf">
      <div className={s.contentTop}>
        <h2>Hello My Friends</h2>
      </div>
      <div className={s.contentLeft}>
        <img
          id={s.albumArt}
          src={hmfCover}
          alt="cover"
          onClick={props.toggleLightbox}
        />
      </div>
      <div className={s.contentRight}>
        <p>
          A found footage chronicle of youth, drug abuse, viral culture, self
          worth, and identity in the armpit of America.
          <br />
          <br />
          <span style={{ color: "red" }}>Coming soon.</span>
          <br />
          VI_016
        </p>
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default HelloMyFriends;

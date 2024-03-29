import albumCover1 from "./wpb-cover1.jpg";
import albumCover2 from "./wpb-cover2.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const WatchedPot = (props) => {
  const sources = [albumCover1, albumCover2];
  const types = ["image", "image"];
  return (
    <div className={s.content} id="wpb">
      <div className={s.contentTop}>
        <h2>Watched Pot Boils</h2>
      </div>
      <div className={s.contentLeft}>
        <img
          alt="cover"
          id={s.albumArt}
          src={albumCover1}
          onClick={props.toggleLightbox}
        />
      </div>
      <div className={s.contentRight}>
        <p>
          An encapsulated year in NY.
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>TRACKLIST</span>
          <br />
          01_Stay Indoors
          <br />
          02_Quarter Down
          <br />
          03_K2
          <br />
          04_Stand Clear
          <br />
          05_Alright Now
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>INSTRUMENTATION</span>
          <br />
          Lucida classical guitar
          <br />
          Rhodes Suitcase 73
          <br />
          Kord MS-20 Mini <br />
          Alesis HR-16
          <br />
          Shoes on wood floor
          <br />
          Steel wool
          <br />
          Cast iron pan
          <br />
          Broom
          <br />
          Arborio rice
          <br />
          Fork
          <br />
          Wooden spoon
          <br />
          Various samples
          <br />
          <br />
          released June 25, 2018 <br />
          VI_014
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/3noCAiVtAbZ22LxCT0LwpA?si=tGA9j9ZVQdiRdiFzeqRQeA",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_khqfcjVSRqgrArD9XwN2EyibNejaUeT0s&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/watched-pot-boils-ep/1402811732",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default WatchedPot;

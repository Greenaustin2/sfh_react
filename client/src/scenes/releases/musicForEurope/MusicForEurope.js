import albumCover1 from "./mfe-cover.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const MusicForEurope = (props) => {
  const sources = [albumCover1, "https://youtu.be/48pJt2vByGk"];
  const types = ["image", "youtube"];
  return (
    <div className={s.content} id="mfe">
      <div className={s.contentTop}>
        <h2>Music for Europe</h2>
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
          Part 1/3 of an original score for a film series by{" "}
          <a
            href="https://www.megastrata.com/"
            target="_blank"
            rel="noreferrer"
          >
            Matt Payne
          </a>
          .<br />
          <br />
          <span style={{ fontWeight: "bold" }}>TRACKLIST</span>
          <br />
          01_Maxwell's Demon
          <br />
          02_10% Linen
          <br />
          03_I Could Hurt a Fly
          <br />
          04_Funky One/Detached
          <br />
          05_The Many Deaths of Vincent Thomas
          <br />
          <br />
          released March 15, 2016
          <br />
          VI_001
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/6LyVyR9XWEcgU9E9pbjMaz?si=Z2pAAd2cTKCDSWYwTh-PEQ",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_k0lxis52RtxCjRTexj67zBiKqO8zEoydg&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/music-for-europe-ep/1229373661",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default MusicForEurope;

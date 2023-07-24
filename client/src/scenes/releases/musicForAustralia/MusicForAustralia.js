import albumCover1 from "./mfa-cover.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const MusicForAustralia = (props) => {
  const sources = [albumCover1, "https://youtu.be/4236m_pr8UQ"];
  const types = ["image", "youtube"];
  return (
    <div class={s.content} id="mfa">
      <div class={s.contentTop}>
        <h2>Music for Australia</h2>
      </div>
      <div class={s.contentLeft}>
        <img
          alt="cover"
          id={s.albumArt}
          src={albumCover1}
          onClick={props.toggleLightbox}
        />
      </div>
      <div class={s.contentRight}>
        <p>
          Part 2/3 of an original score for a film series by{" "}
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
          01_As It Came To Be
          <br />
          02_17 All Over Again
          <br />
          03_The Sound of Traffic
          <br />
          04_Blow
          <br />
          05_In Bloom
          <br />
          06_Viscosity 6%
          <br />
          07_Enigmatic Superstar (Parts 1-3)
          <br />
          <br />
          released March 25, 2016
          <br />
          VI_003
        </p>
      </div>
      <div class={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/59D9mXG2BLeJM3nH4ae4xX?si=IDznQdmSQWizCN0rpnN-dw",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_kRxiY06B1JP6GEZx9JU3IZVL39Duk_p3g&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/music-for-australia/1219176879",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default MusicForAustralia;

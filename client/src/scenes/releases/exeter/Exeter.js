import albumCover1 from "./ext-front.jpg";
import albumCover2 from "./ext-back.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import Lightbox from "../../../components/Lightbox";

import s from "../../../css/content.module.css";

const Exeter = (props) => {
  const sources = [albumCover1, albumCover2];
  const types = ["image", "image"];
  return (
    <div className={s.content} id="ext">
      <div className={s.contentTop}>
        <h2>Exeter (unfinished randoms)</h2>
      </div>
      <div className={s.contentLeft}>
        <img
          alt="album cover"
          id={s.albumArt}
          src={albumCover1}
          onClick={props.toggleLightbox}
        />
      </div>
      <div className={s.contentRight}>
        <p>
          <span style={{ fontWeight: "bold" }}>TRACKLIST</span>
          <br />
          01_Day II
          <br />
          02_Radiator
          <br />
          03_Shewts n' Ladders
          <br />
          04_New Normal
          <br />
          05_Bernadette
          <br />
          06_Sound Signature
          <br />
          07_Danish
          <br />
          08_Live from the Basement
          <br />
          09_Low Sodium
          <br />
          10_Buoy
          <br />
          11_Buoy (demo)
          <br />
          12_Bubbling
          <br />
          13_Popped
          <br />
          14_See ya in NYC
          <br />
          <br />
          Recorded subterraneanly at:
          <br />
          9423 N Exeter Ave
          <br />
          Portland, OR 97203
          <br />
          <br />
          released May 27, 2023
          <br />
          VI_015
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/7ad9Hb1fnnck2NfP3mrmRL?si=qvQfdUxxSGWuMO0wTzr_SQ",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_l2WLyeVjhCbemnqk1kBFIFAOztH09f108&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/exeter-unfinished-randoms/1690212646",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default Exeter;

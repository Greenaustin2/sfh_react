import albumCover1 from "./mfh-cover.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const MusicForHawaii = (props) => {
  const sources = [albumCover1, "https://youtu.be/JwM_2fJvKwg"];
  const types = ["image", "youtube"];
  return (
    <div className={s.content} id="mfh">
      <div className={s.contentTop}>
        <h2>Music for Hawaii</h2>
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
          Part 3/3 of an original score for a film series by{" "}
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
          01_Toaster
          <br />
          02_Running Systems
          <br />
          03_Tepid Coloring
          <br />
          04_Eyes Glow emerald
          <br />
          05_It Was Me
          <br />
          <br />
          released April 11, 2016 <br />
          VI_003
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/6dlnTf8jtPm92FiaokNcoC?si=GFi_FfwiSdGf_axtRG8q3A",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_lZxmHCQ74zPMy2mrVtKB7rp6hTsQLv6Vo&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/music-for-hawaii-ep/1219176791",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default MusicForHawaii;

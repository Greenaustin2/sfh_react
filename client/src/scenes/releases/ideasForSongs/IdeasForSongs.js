import albumCover1 from "./ifs-cover.jpg";
import albumCover2 from "./ifs-banner.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const IdeasForSongs = (props) => {
  const sources = [albumCover1, albumCover2, "https://youtu.be/72uWZKKZG6k"];
  const types = ["image", "image", "youtube"];
  return (
    <div className={s.content} id="ifs">
      <div className={s.contentTop}>
        <h2>Ideas for Songs</h2>
      </div>
      <div className={s.contentLeft}>
        <img
          id={s.albumArt}
          src={albumCover1}
          alt="cover"
          onClick={props.toggleLightbox}
        />
      </div>
      <div className={s.contentRight}>
        <p>
          A collection of music by{" "}
          <a
            href="https://open.spotify.com/artist/2s0QRzzqB4LmZ8hwz72MlM?si=47I2AYa6R8eHw6I4FUx-AA"
            target="_blank"
            rel="noreferrer"
          >
            Super-16
          </a>
          .<br />
          <br />
          <span style={{ fontWeight: "bold" }}>TRACKLIST</span>
          <br />
          01_Suite 405
          <br />
          02_98 & Windy
          <br />
          03_Nylon Diet
          <br />
          04_Polive
          <br />
          05_On Fremont St.
          <br />
          <br />
          released December 30, 2016
          <br />
          VI_008
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/2CYVQNB81LPZDNqeLEPSPh?si=8czvthqeQ0e9b0PbnwhRZA",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_lZyt-7mCk235cJHWLcMCQsWt-vVbHBxY8&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/ideas-for-songs/1212644721",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default IdeasForSongs;

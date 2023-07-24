import albumCover1 from "./01-cover1.jpg";
import albumCover2 from "./01-cover2.jpg";
import Lightbox from "../../../components/Lightbox";
import StreamingIcons from "../../../components/StreamingIcons";
import s from "../../../css/content.module.css";

const DigitalMusic = (props) => {
  const sources = [albumCover1, albumCover2, "https://youtu.be/6msE-Qw0mho"];
  const types = ["image", "image", "youtube"];
  return (
    <div className={s.content} id="01">
      <div className={s.contentTop}>
        <h2>01101101 01110101 01110011 01101001 01100011</h2>
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
          Digital Music - from{" "}
          <a
            href="https://open.spotify.com/artist/2s0QRzzqB4LmZ8hwz72MlM?si=47I2AYa6R8eHw6I4FUx-AA"
            target="_blank"
            rel="noreferrer"
          >
            Super-16
          </a>
          .<br />
          <b />
          <span style={{ fontWeight: "bold" }}>TRACKLIST</span>
          <br />
          01_Evening Homes
          <br />
          02_The Sound of Traffic
          <br />
          03_5:00 AM Kelty
          <br />
          <br />
          released May 13, 2016
          <br />
          VI_006
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/5OAAlUyd4BlhiPWQK2x6Z4?si=EEYu3q0uRRiiwO6eu-mm0w",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_krNuNcf7JRCnPJT9D7-geyK_xm_Rl2iD0&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/01101101-01110101-01110011-01101001-01100011/1229309545",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default DigitalMusic;

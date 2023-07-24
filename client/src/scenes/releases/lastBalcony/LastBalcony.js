import albumCover1 from "./lb-cover1.jpg";
import albumCover2 from "./lb-cover2.jpg";
import albumCover3 from "./lb-cover3.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const LastBalcony = (props) => {
  const sources = [
    albumCover1,
    albumCover2,
    albumCover3,
    "https://youtu.be/KAzqNZbTHvg",
  ];
  const types = ["image", "image", "image", "youtube"];
  return (
    <div className={s.content} id="lb">
      <div className={s.contentTop}>
        <h2>Last Balcony</h2>
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
          An improvised digital conversation. Recorded live on a balcony.
          <br />
          <br />
          June 25, 2016
          <br />
          2157 Maple St.
          <br />
          Costa Mesa, California
          <br />
          <br />
          <b>TRACKLIST</b>
          <br />
          01_IMG 2157
          <br />
          02_Couched
          <br />
          03_59.2 Seagrams
          <br />
          04_Full Moon, Rear Window
          <br />
          05_5:00 AM Bluffs
          <br />
          06_Balcony Falls
          <br />
          07_Steamers at Sunset
          <br />
          08_Ace High
          <br />
          09_Twins
          <br />
          10_177.81%
          <br />
          <br />
          <b>INSTRUMENTATION</b>
          <br />
          Korg MS-20 Mini
          <br />
          Roland JP-08
          <br />
          Line 6 DL4
          <br />
          TC Electronic Shaker
          <br />
          Danelectro Reel Echo
          <br />
          2011 15" Macbook Pro, Ableton Live 8.1.4
          <br />
          2015 15" Macbook Pro, Ableton Live 9<br />
          <br />
          released June 12, 2017
          <br />
          VI_010
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/45w4KqKO0Y6l0uQ2ENbjGx?si=MekiYnu3SOCFxZiNHtm3mA",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_niU09hFF0JGWEycjZziNX5j_0Kst_Escw&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/last-balcony/1251032596",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default LastBalcony;

import albumCover from "./com_art.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import s from "../../../css/content.module.css";

const CollectionOfMusic = () => {
  return (
    <div className={s.content} id="com">
      <div className={s.contentTop}>
        <h2>Collection of Music</h2>
      </div>
      <div className={s.contentLeft}>
        <img alt="album cover" id={s.albumArt} src={albumCover} />
      </div>
      <div className={s.contentRight}>
        <p>
          13 songs for bass and Rhodes
          <br />
          <br />
          <span className="bold">TRACKLIST</span>
          <br />
          01_Ostia
          <br />
          02_Hello My Friends
          <br />
          03_Wrong Way Down a One Way
          <br />
          04_Down Water St.
          <br />
          05_Gin/Zantac 150
          <br />
          06_Gavage
          <br />
          07_Käbəlˌstōn Nītˌmer
          <br />
          08_Automatism 86
          <br />
          09_Pişmiş
          <br />
          10_Hot Behind
          <br />
          11_Juniper
          <br />
          12_Long Ways from Home
          <br />
          13_Till Death
          <br />
          <br />
          <span className="bold">INSTRUMENTATION</span>
          <br />
          1980 Rhodes Suitcase 73
          <br />
          Squire P-Bass
          <br />
          <br />
          Special thanks to debt, savings bonds and the culinary industry.
          <br />
          <br />
          released April 12, 2019
          <br />
          VI_014
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/1zsJrZ3hAvWJlexfU2p4lQ?si=ShoRGpJkSOygieVyA1yQlg",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_nmM3k7U50VcuaxcImkR_7WRsVfz6jQvPw&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/collection-of-music/1459223243",
          }}
        />
      </div>
    </div>
  );
};

export default CollectionOfMusic;

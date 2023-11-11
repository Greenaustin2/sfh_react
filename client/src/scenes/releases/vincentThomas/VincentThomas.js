import StreamingIcons from "../../../components/StreamingIcons";
import albumCover1 from "./vt-cover.jpg";
import albumCover2 from "./vt-cover-full.jpg";
import albumCover3 from "./vt-cover2.png";
import albumCover4 from "./vt-cover3.png";
import posters from "./posters.jpg";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const VincentThomas = (props) => {
  const sources = [
    albumCover2,
    albumCover3,
    albumCover4,
    posters,
    "https://youtu.be/HgVYq-RAPw4",
  ];
  const types = ["image", "image", "image", "image", "youtube"];
  return (
    <div className={s.content} id="tmdovt">
      <div className={s.contentTop}>
        <h2>The Many Deaths of Vincent Thomas</h2>
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
          Between April and June of 2016, an upwards of 300 videos were
          published to the internet and subsequently deleted by June 8th. They
          profile a man who we will refer to as Vincent Thomas. Vincent’s
          intentions were clear: to provide the public a tour of the reservoir
          behind his house. We do not condone or vilify Vincent’s actions, all
          of which took place unaware of our presence.
          <br />
          <br />
          Six Finger Hand invites you to experience The Many Deaths of Vincent
          Thomas; an original found footage documentary. Download the film and
          comprehensive guide below.
          <br />
          <br />
          Released July 28, 2017
          <br />
          VI_011
          <br />
          <br />
          <br />
        </p>
        <p style={{ color: "red" }}>
          <a
            href="https://download1073.mediafire.com/1rs3bi1giedgYbSCUlgq85k_y04eiC6-sLZ54MMPzNSiDIRk57f4QQyJ_qJGH3l_bcA6zFbgec7RpbioJ_xV4x8J9I7QGjhjxV08UKaggqU9OP1nH1nXazhvlqh3QwYURS_k-Rw2e2_baDilLtHvgNFsJ8neflPxl2sqDqzciCQH/khvfdg73i0crd9g/THE_MANY_DEATHS_OF_VINCENT_THOMAS.zip"
            id="downloadButton"
            target="_blank"
            rel="noreferrer"
          >
            <em>DOWNLOAD</em>
          </a>
        </p>
      </div>

      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/4M2A2MTSr3z2tw8I3TBSqC?si=C9_4yePAQ92r5lv0tEh38g",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_nO7rzK1VzPkshfpFnyC8p4_t70LJzt1xY&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/the-many-deaths-of-vincent-thomas/1271133681",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default VincentThomas;

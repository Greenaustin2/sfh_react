import albumCover1 from "./tp-cover1.jpg";
import albumCover2 from "./tp-cover2.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const Transpositions = (props) => {
  const sources = [
    albumCover1,
    albumCover2,
    "https://youtu.be/q9GWTbEG0bU",
    "https://youtu.be/AEkqrfeAHQk",
  ];
  const types = ["image", "image", "youtube", "youtube"];
  return (
    <div className={s.content} id="tps">
      <div className={s.contentTop}>
        <h2>TRANSPOSITIONS</h2>
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
          An 8 track album incorporating the saxophone shifting through
          different styles and ideas from our affiliates.
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Personnel</span>:<br />
          01_Gas Giant (Matt Payne)
          <br />
          02_Vague Language (Modal, Matt Payne)
          <br />
          03_Electric Sheep (Jayson Payne, Matt Payne)
          <br />
          04_Fata Morgana (Matt Payne, Ipsum Caballum)
          <br />
          05_Mercy Kill (Ipsum Caballum)
          <br />
          06_Effort (Ipsum Caballum)
          <br />
          07_The Richest Man in the Cemetery (SUPER-16)
          <br />
          08_Separation Anxiety (Ipsum Caballum)
          <br />
          <br />
          released June 18, 2016
          <br />
          VI_007
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/0dn1xovkxfRLv9zjsevdw1?si=Dg86eT-aQWiehv15G235fQ",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_ntPa18cY838IahscoYPUx_PWydFgsmnoI&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/transpositions/1212746795",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default Transpositions;

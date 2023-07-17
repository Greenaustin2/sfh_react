import albumCoverOne from "./tp-cover1.jpg";
import albumCoverTwo from "./tp-cover2.jpg";
import StreamingIcons from "../../../components/StreamingIcons";

const Transpositions = () => {
  return (
    <div className="content" id="tps">
      <div className="content-top">
        <h2>TRANSPOSITIONS</h2>
      </div>
      <div className="content-left">
        <img alt="album cover" id="album-art" src={albumCoverOne} />
      </div>
      <div className="content-right">
        <p>
          An 8 track album incorporating the saxophone shifting through
          different styles and ideas from our affiliates.
          <br />
          <br />
          <span className="bold">Personnel</span>:<br />
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
      <div className="content-bottom">
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
    </div>
  );
};

export default Transpositions;

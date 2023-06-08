import albumCoverFront from "../images/015-exeter/ext-front.jpg";
import albumCoverBack from "../images/015-exeter/ext-back.jpg";

const Exeter = () => {
  return (
    <div className="content" id="ext">
      <div className="content-top">
        <h2>Exeter (unfinished randoms)</h2>
      </div>
      <div className="content-left">
        <a data-fslightbox="ext" href="images/015_exeter/ext-front.jpg">
          <img id="album-art" src={albumCoverFront} />
        </a>
        <a data-fslightbox="ext" href="images/015_exeter/ext-back.jpg"></a>
      </div>
      <div className="content-right">
        <p>
          <span className="bold">TRACKLIST</span>
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
      <div className="content-bottom">
        <a
          href="https://open.spotify.com/album/7ad9Hb1fnnck2NfP3mrmRL?si=O1p7X8gXRn-HGtuOpoO96Q"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/spotify.png"
            alt="spotify icon"
          />
        </a>
        <a
          href="https://music.apple.com/us/album/exeter-unfinished-randoms/1690212646"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/apple.png"
            alt="apple music icon"
          />
        </a>
        <a
          href="https://music.youtube.com/playlist?list=OLAK5uy_l2WLyeVjhCbemnqk1kBFIFAOztH09f108&feature=share"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/youtube-music.png"
            alt="youtube music icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Exeter;

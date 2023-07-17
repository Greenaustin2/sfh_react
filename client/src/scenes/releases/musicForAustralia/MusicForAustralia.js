import albumCoverOne from "./mfa-cover.jpg";
import StreamingIcons from "../../../components/StreamingIcons";

const MusicForAustralia = () => {
  return (
    <div class="content" id="mfa">
      <div class="content-top">
        <h2>Music for Australia</h2>
      </div>
      <div class="content-left">
        <img alt="album cover" id="album-art" src={albumCoverOne} />

        {/* https://youtu.be/4236m_pr8UQ */}
      </div>
      <div class="content-right">
        <p>
          Part 2/3 of an original score for a film series by{" "}
          <a
            href="https://www.megastrata.com/"
            target="_blank"
            rel="noreferrer"
          >
            Matt Payne
          </a>
          .<br />
          <br />
          <span class="bold">TRACKLIST</span>
          <br />
          01_As It Came To Be
          <br />
          02_17 All Over Again
          <br />
          03_The Sound of Traffic
          <br />
          04_Blow
          <br />
          05_In Bloom
          <br />
          06_Viscosity 6%
          <br />
          07_Enigmatic Superstar (Parts 1-3)
          <br />
          <br />
          released March 25, 2016
          <br />
          VI_003
        </p>
      </div>
      <div class="content-bottom">
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/59D9mXG2BLeJM3nH4ae4xX?si=IDznQdmSQWizCN0rpnN-dw",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_kRxiY06B1JP6GEZx9JU3IZVL39Duk_p3g&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/music-for-australia/1219176879",
          }}
        />
      </div>
    </div>
  );
};

export default MusicForAustralia;

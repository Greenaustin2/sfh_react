import albumCoverOne from "./ifs-cover.jpg";
import albumCoverTwo from "./ifs-banner.jpg";

import StreamingIcons from "../../../components/StreamingIcons";

const IdeasForSongs = () => {
  return (
    <div className="content" id="ifs">
      <div className="content-top">
        <h2>Ideas for Songs</h2>
      </div>
      <div className="content-left">
        <img id="album-art" src={albumCoverOne} />
      </div>
      <div className="content-right">
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
          <span className="bold">TRACKLIST</span>
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
  );
};

export default IdeasForSongs;

const IdeasForSongs = () => {
  return (
    <div className="content" id="ifs">
      <div className="content-top">
        <h2>Ideas for Songs</h2>
      </div>
      <div className="content-left">
        <a
          data-fslightbox="ifs"
          href="images/008_ideas-for-songs/ifs-cover.jpg"
        >
          <img id="album-art" src="images/008_ideas-for-songs/ifs-cover.jpg" />
        </a>
        <a
          data-fslightbox="ifs"
          href="images/008_ideas-for-songs/ifs-banner.jpg"
        ></a>
        <a data-fslightbox="ifs" href="https://youtu.be/72uWZKKZG6k"></a>
      </div>
      <div className="content-right">
        <p>
          A collection of music by{" "}
          <a
            href="https://open.spotify.com/artist/2s0QRzzqB4LmZ8hwz72MlM?si=47I2AYa6R8eHw6I4FUx-AA"
            target="_blank"
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
      <div className="content-bottom">
        <a
          href="https://open.spotify.com/album/2CYVQNB81LPZDNqeLEPSPh?si=Duat_ULMRfKUgrooZ2cg8g"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/spotify.png"
            alt="spotify icon"
          />
        </a>
        <a
          href="https://music.apple.com/us/album/ideas-for-songs/1212644721"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/apple.png"
            alt="apple music icon"
          />
        </a>
        <a
          href="https://music.youtube.com/playlist?list=OLAK5uy_lZyt-7mCk235cJHWLcMCQsWt-vVbHBxY8&feature=share"
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

export default IdeasForSongs;

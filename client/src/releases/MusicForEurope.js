const MusicForEurope = () => {
  return (
    <div className="content" id="mfe">
      <div className="content-top">
        <h2>Music for Europe</h2>
      </div>
      <div className="content-left">
        <a data-fslightbox="mfe" href="images/001_music-for/mfe-cover.jpg">
          <img id="album-art" src="images/001_music-for/mfe-cover.jpg" />
        </a>
        <a data-fslightbox="mfe" href="https://youtu.be/48pJt2vByGk"></a>
      </div>
      <div className="content-right">
        <p>
          Part 1/3 of an original score for a film series by{" "}
          <a href="https://www.megastrata.com/">Matt Payne</a>.<br />
          <br />
          <span className="bold">TRACKLIST</span>
          <br />
          01_Maxwell's Demon
          <br />
          02_10% Linen
          <br />
          03_I Could Hurt a Fly
          <br />
          04_Funky One/Detached
          <br />
          05_The Many Deaths of Vincent Thomas
          <br />
          <br />
          released March 15, 2016
          <br />
          VI_001
        </p>
      </div>
      <div className="content-bottom">
        <a
          href="https://open.spotify.com/album/6LyVyR9XWEcgU9E9pbjMaz?si=Z2pAAd2cTKCDSWYwTh-PEQ"
          target="_blank"
        >
          <img id="streaming-icon" src="images/streaming-icons/spotify.png" />
        </a>
        <a
          href="https://music.apple.com/us/album/music-for-europe-ep/1229373661"
          target="_blank"
        >
          <img id="streaming-icon" src="images/streaming-icons/apple.png" />
        </a>
        <a
          href="https://music.youtube.com/playlist?list=OLAK5uy_k0lxis52RtxCjRTexj67zBiKqO8zEoydg&feature=share"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/youtube-music.png"
          />
        </a>
      </div>
    </div>
  );
};

export default MusicForEurope;

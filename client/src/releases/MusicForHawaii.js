const MusicForHawaii = () => {
  return (
    <div className="content" id="mfh">
      <div className="content-top">
        <h2>Music for Hawaii</h2>
      </div>
      <div className="content-left">
        <a data-fslightbox="mfh" href="images/001_music-for/mfh-cover.jpg">
          <img id="album-art" src="images/001_music-for/mfh-cover.jpg" />
        </a>
        <a data-fslightbox="mfh" href="https://youtu.be/JwM_2fJvKwg"></a>
      </div>
      <div className="content-right">
        <p>
          Part 3/3 of an original score for a film series by{" "}
          <a href="https://www.megastrata.com/">Matt Payne</a>.<br />
          <br />
          <span className="bold">TRACKLIST</span>
          <br />
          01_Toaster
          <br />
          02_Running Systems
          <br />
          03_Tepid Coloring
          <br />
          04_Eyes Glow emerald
          <br />
          05_It Was Me
          <br />
          <br />
          released April 11, 2016 <br />
          VI_003
        </p>
      </div>
      <div className="content-bottom">
        <a
          href="https://open.spotify.com/album/6dlnTf8jtPm92FiaokNcoC?si=GFi_FfwiSdGf_axtRG8q3A"
          target="_blank"
        >
          <img id="streaming-icon" src="images/streaming-icons/spotify.png" />
        </a>
        <a
          href="https://music.apple.com/us/album/music-for-hawaii-ep/1219176791"
          target="_blank"
        >
          <img id="streaming-icon" src="images/streaming-icons/apple.png" />
        </a>
        <a
          href="https://music.youtube.com/playlist?list=OLAK5uy_lZxmHCQ74zPMy2mrVtKB7rp6hTsQLv6Vo&feature=share"
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

export default MusicForHawaii;

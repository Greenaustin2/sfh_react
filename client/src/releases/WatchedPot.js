const WatchedPot = () => {
  return (
    <div className="content" id="wpb">
      <div className="content-top">
        <h2 className="stretch">Watched Pot Boils</h2>
      </div>
      <div className="content-left">
        <a data-fslightbox="wpb" href="images/013_watched-pot/wpb-cover1.jpg">
          <img id="album-art" src="images/013_watched-pot/wpb-cover1.jpg" />
        </a>
        <a
          data-fslightbox="wpb"
          href="images/013_watched-pot/wpb-cover2.jpg"
        ></a>
      </div>
      <div className="content-right">
        <p>
          An encapsulated year in NY.
          <br />
          <br />
          <span className="bold">TRACKLIST</span>
          <br />
          01_Stay Indoors
          <br />
          02_Quarter Down
          <br />
          03_K2
          <br />
          04_Stand Clear
          <br />
          05_Alright Now
          <br />
          <br />
          <span className="bold">INSTRUMENTATION</span>
          <br />
          Lucida classical guitar
          <br />
          Rhodes Suitcase 73
          <br />
          Kord MS-20 Mini <br />
          Alesis HR-16
          <br />
          Shoes on wood floor
          <br />
          Steel wool
          <br />
          Cast iron pan
          <br />
          Br /oom
          <br />
          Arborio rice
          <br />
          Fork
          <br />
          Wooden spoon
          <br />
          Various samples
          <br />
          <br />
          released June 25, 2018 <br />
          VI_014
        </p>
      </div>
      <div className="content-bottom">
        <a
          href="https://open.spotify.com/album/3noCAiVtAbZ22LxCT0LwpA?si=tGA9j9ZVQdiRdiFzeqRQeA"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/spotify.png"
            alt="spotify icon"
          />
        </a>
        <a
          href="https://music.apple.com/us/album/watched-pot-boils-ep/1402811732"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/apple.png"
            alt="apple music icon"
          />
        </a>
        <a
          href="https://music.youtube.com/playlist?list=OLAK5uy_khqfcjVSRqgrArD9XwN2EyibNejaUeT0s&feature=share"
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

export default WatchedPot;

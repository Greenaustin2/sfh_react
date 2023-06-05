const DigitalMusic = () => {
  return (
    <div className="content" id="01">
      <div className="content-top">
        <h2>01101101 01110101 01110011 01101001 01100011</h2>
      </div>
      <div className="content-left">
        <a data-fslightbox="01" href="images/006_01/01-cover1.jpg">
          <img id="album-art" src="images/006_01/01-cover1.jpg" />
        </a>
        <a data-fslightbox="01" href="images/006_01/01-cover2.jpg"></a>
        <a data-fslightbox="01" href="https://youtu.be/6msE-Qw0mho"></a>
      </div>
      <div className="content-right">
        <p>
          Digital Music - from{" "}
          <a
            href="https://open.spotify.com/artist/2s0QRzzqB4LmZ8hwz72MlM?si=47I2AYa6R8eHw6I4FUx-AA"
            target="_blank"
          >
            Super-16
          </a>
          .<br />
          <b />
          <span className="bold">TRACKLIST</span>
          <br />
          01_Evening Homes
          <br />
          02_The Sound of Traffic
          <br />
          03_5:00 AM Kelty
          <br />
          <br />
          released May 13, 2016
          <br />
          VI_006
        </p>
      </div>
      <div className="content-bottom">
        <a
          href="https://open.spotify.com/album/5OAAlUyd4BlhiPWQK2x6Z4?si=XKuENKP-R4eRVs7hPahrgw"
          target="_blank"
        >
          <img id="streaming-icon" src="images/streaming-icons/spotify.png" />
        </a>
        <a
          href="https://music.apple.com/us/album/01101101-01110101-01110011-01101001-01100011/1229309545"
          target="_blank"
        >
          <img id="streaming-icon" src="images/streaming-icons/apple.png" />
        </a>
        <a
          href="https://music.youtube.com/playlist?list=OLAK5uy_krNuNcf7JRCnPJT9D7-geyK_xm_Rl2iD0&feature=share"
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

export default DigitalMusic;

const Transpositions = () => {
  return (
    <div className="content" id="tps">
      <div className="content-top">
        <h2>TRANSPOSITIONS</h2>
      </div>
      <div className="content-left">
        <a data-fslightbox="tp" href="images/007_transpositions/tp-cover1.jpg">
          <img id="album-art" src="images/007_transpositions/tp-cover1.jpg" />
        </a>
        <a
          data-fslightbox="tp"
          href="images/007_transpositions/tp-cover2.jpg"
        ></a>
        <a data-fslightbox="tp" href="https://youtu.be/AEkqrfeAHQk"></a>
        <a data-fslightbox="tp" href="https://youtu.be/q9GWTbEG0bU"></a>
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
        <a
          href="https://open.spotify.com/album/0dn1xovkxfRLv9zjsevdw1?si=Dg86eT-aQWiehv15G235fQ"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/spotify.png"
            alt="spotify icon"
          />
        </a>
        <a
          href="https://music.apple.com/us/album/transpositions/1212746795"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/apple.png"
            alt="apple music icon"
          />
        </a>
        <a
          href="https://music.youtube.com/playlist?list=OLAK5uy_ntPa18cY838IahscoYPUx_PWydFgsmnoI&feature=share"
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

export default Transpositions;

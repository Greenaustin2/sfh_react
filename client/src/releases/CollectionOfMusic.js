const CollectionOfMusic = () => {
  return (
    <div className="content" id="com">
      <div className="content-top">
        <h2>Collection of Music</h2>
      </div>
      <div className="content-left">
        <a
          data-fslightbox="com"
          href="images/014_collection-of-music/com_art.jpg"
        >
          <img
            id="album-art"
            src="images/014_collection-of-music/com_art.jpg"
          />
        </a>
        <a data-fslightbox="com" href="https://youtu.be/1Zz3YMT2HQc"></a>
      </div>
      <div className="content-right">
        <p>
          13 songs for bass and Rhodes
          <br />
          <br />
          <span className="bold">TRACKLIST</span>
          <br />
          01_Ostia
          <br />
          02_Hello My Friends
          <br />
          03_Wrong Way Down a One Way
          <br />
          04_Down Water St.
          <br />
          05_Gin/Zantac 150
          <br />
          06_Gavage
          <br />
          07_Käbəlˌstōn Nītˌmer
          <br />
          08_Automatism 86
          <br />
          09_Pişmiş
          <br />
          10_Hot Behind
          <br />
          11_Juniper
          <br />
          12_Long Ways from Home
          <br />
          13_Till Death
          <br />
          <br />
          <span className="bold">INSTRUMENTATION</span>
          <br />
          1980 Rhodes Suitcase 73
          <br />
          Squire P-Bass
          <br />
          <br />
          Special thanks to debt, savings bonds and the culinary industry.
          <br />
          <br />
          released April 12, 2019
          <br />
          VI_014
        </p>
      </div>
      <div className="content-bottom">
        <a
          href="https://open.spotify.com/album/1zsJrZ3hAvWJlexfU2p4lQ?si=WAf4z0T7RTWM9UB-6CZisw"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/spotify.png"
            alt="spotify icon"
          />
        </a>
        <a
          href="https://music.apple.com/us/album/collection-of-music/1459223243"
          target="_blank"
        >
          <img
            id="streaming-icon"
            src="images/streaming-icons/apple.png"
            alt="apple music icon"
          />
        </a>
        <a
          href="https://music.youtube.com/playlist?list=OLAK5uy_nmM3k7U50VcuaxcImkR_7WRsVfz6jQvPw&feature=share"
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

export default CollectionOfMusic;

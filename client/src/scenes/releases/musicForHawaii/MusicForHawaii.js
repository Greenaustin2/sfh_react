import albumCoverOne from "./mfh-cover.jpg";
import StreamingIcons from "../../../components/StreamingIcons";

const MusicForHawaii = () => {
  return (
    <div className="content" id="mfh">
      <div className="content-top">
        <h2>Music for Hawaii</h2>
      </div>
      <div className="content-left">
        <img alt="album cover" id="album-art" src={albumCoverOne} />
        {/* https://youtu.be/JwM_2fJvKwg */}
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
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/6dlnTf8jtPm92FiaokNcoC?si=GFi_FfwiSdGf_axtRG8q3A",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_lZxmHCQ74zPMy2mrVtKB7rp6hTsQLv6Vo&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/music-for-hawaii-ep/1219176791",
          }}
        />
      </div>
    </div>
  );
};

export default MusicForHawaii;

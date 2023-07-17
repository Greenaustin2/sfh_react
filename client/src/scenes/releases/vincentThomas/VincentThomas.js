import StreamingIcons from "../../../components/StreamingIcons";
import albumCoverOne from "./vt-cover.jpg";
import albumCoverTwo from "./vt-cover-full.jpg";
import albumCoverThree from "./vt-cover2.png";
import albumCoverFour from "./vt-cover3.png";
import posters from "./posters.jpg";

const VincentThomas = () => {
  return (
    <div className="content" id="tmdovt">
      <div className="content-top">
        <h2>The Many Deaths of Vincent Thomas</h2>
      </div>
      <div className="content-left">
        <img alt="album cover" id="album-art" src={albumCoverOne} />

        {/* https://youtu.be/HgVYq-RAPw4 */}
      </div>
      <div className="content-right">
        <p>
          Between April and June of 2016, an upwards of 300 videos were
          published to the internet and subsequently deleted by June 8th. They
          profile a man who we will refer to as Vincent Thomas. Vincent’s
          intentions were clear: to provide the public a tour of the reservoir
          behind his house. We do not condone or vilify Vincent’s actions, all
          of which took place unaware of our presence.
          <br />
          <br />
          Six Finger Hand invites you to experience The Many Deaths of Vincent
          Thomas; an original found footage documentary. Download the film and
          comprehensive guide below.
          <br />
          <br />
          Released July 28, 2017
          <br />
          VI_011
          <br />
          <br />
          <br />
        </p>
        <p id="red">
          <a
            href="https://download1073.mediafire.com/hdoywuuo2segWmAlgz4z9HAnxqPtY3oFo4xbAkxtRAI-n8MnfAGF3hnaQM7OQv1SjxerR2dow0FPExz4n_C5_Q1h0V2ZOag1otWXSe1lsOcHw2QhWnf9H1phAyNG80XtQ0N3VtbJmjS_0yK8jCLDjHfsxqp5k6h13PcTGigUu-D6auvM/khvfdg73i0crd9g/THE_MANY_DEATHS_OF_VINCENT_THOMAS.zip"
            id="downloadButton"
            target="_blank"
            rel="noreferrer"
          >
            <em>DOWNLOAD</em>
          </a>
        </p>
      </div>

      <div className="content-bottom">
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/4M2A2MTSr3z2tw8I3TBSqC?si=C9_4yePAQ92r5lv0tEh38g",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_nO7rzK1VzPkshfpFnyC8p4_t70LJzt1xY&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/the-many-deaths-of-vincent-thomas/1271133681",
          }}
        />
      </div>
    </div>
  );
};

export default VincentThomas;

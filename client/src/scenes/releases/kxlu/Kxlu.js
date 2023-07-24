import albumCover1 from "./kxlu-front.jpg";
import albumCover2 from "./kxlu-back.jpg";
import albumCover3 from "./kxlu-kw.jpg";
import StreamingIcons from "../../../components/StreamingIcons";
import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const Kxlu = (props) => {
  const sources = [albumCover1, albumCover2, albumCover3];
  const types = ["image", "image", "image"];
  return (
    <div className={s.content} id="sfh">
      <div className={s.contentTop}>
        <h2>SFH_KXLU_YYYY-mm-dd</h2>
      </div>
      <div className={s.contentLeft}>
        <img
          alt="cover"
          id={s.albumArt}
          src={albumCover1}
          onClick={props.toggleLightbox}
        />
      </div>

      <div className={s.contentRight}>
        <p>
          This is a compilation of released and unreleased material arranged by
          Six Finger Hand for live br /oadcast.
          <br />
          <br />
          Six Finger Hand
          <br />
          252 Vernon Ave
          <br />
          br /ooklyn, New York 11206
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>(Tracks 1-3)</span>
          <br />
          December 14th, 2017
          <br />
          8:00-9 PM PST
          <br />
          KXLU 88.9 FM
          <br />—<br />
          One LMU Drive, Malone 402
          <br />
          Los Angeles, CA 90045
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>(Tracks 1-4)</span>
          <br />
          January 23rd, 2018
          <br />
          6:00-7:30 PM ET
          <br />
          Know Wave
          <br />—<br />
          Chinatown
          <br />
          New York, NY 10002
          <br />
          <br />
          <br />
          Special thanks to Gabr /ielle Costa and Theo Constantinou.
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>01_SFH_KXLU_2017-12-14.vi</span>
          <br />
          1. Life and Time - Austin Green
          <br />
          2. Wasting Time - Polly Esther
          <br />
          3. Through Navy Way - Austin Green & Giuseppe Lobasso
          <br />
          4. Not Celebr /ity, Not Nice Guy - Six Finger Hand
          <br />
          5. F-15 - Six Finger Hand
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>02_SFH_KXLU_2017-12-14.vi</span>
          <br />
          1. Kits - Super-16
          <br />
          2. Xanadu - Super-16
          <br />
          3. Short Gasps (Real Boiz) - Ipsum Caballum
          <br />
          4. Be Rad and More Gone - Ipsum Caballum
          <br />
          5. You Owe Me 13 Dollars Back In 1972 - Misn0mer
          <br />
          6. On The Sunny Side of the Volcano - Super-16
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>03_SFH_KXLU_2017-12-14.vi</span>
          <br />
          1. Time - Ipsum Caballum
          <br />
          2. Polive - Super-16
          <br />
          3. Twins - Austin Green & Giuseppe Lobasso
          <br />
          4. Gas Giant - Matt Payne
          <br />
          5. Crimes & Punishment - Ipsum Caballum
          <br />
          6. Anessas - Super-16
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            04_SFH_KW_2018-01-23.vi (20:38)
          </span>
          <br />
          1. Handling Acid - Ipsum Caballum
          <br />
          2. Airplane Mode - Ipsum Caballum
          <br />
          3. Ripped - Ipsum Caballum
          <br />
          4. Stolid - Austin Green & Giuseppe Lobasso
          <br />
          5. Pam - Ipsum Caballum (Unreleased)
          <br />
          6. Falling With Style - Ipsum Caballum
          <br />
          7. Happy 4th - Super-16
          <br />
          <br />
          <br />
          released December 14, 2017
          <br />
          VI_012
        </p>
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/2aQ9T2LzQzGbZuMPHTxP0h?si=AGquBv_rTtSjeSmk7yutpg",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_kmbbqHKxxdd0t-5vxbTrdQnwMbr /LXI0eA&feature=share",
            appleMusic:
              "https://music.apple.com/us/album/live-on-air/1401052025",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default Kxlu;

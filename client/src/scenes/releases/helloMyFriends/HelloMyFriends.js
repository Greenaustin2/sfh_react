import { useEffect, useState } from "react";
// import dropbox from "../../../utils/dropbox";
import cover1 from "./front_final.jpg";
import cover2 from "./back_final.jpg";
import filmCover from "./film_cover_ascii.jpg";
import hmf1 from "./hmf-1.jpg";
import hmf2 from "./hmf-2.jpg";
import hmf3 from "./hmf-3.jpg";
import hmf4 from "./hmf-4.jpg";
import hmf5 from "./hmf-5.jpg";
import hmf6 from "./hmf-6.jpg";
import hmf7 from "./hmf-7.jpg";
import hmf8 from "./hmf-8.jpg";
import hmf9 from "./hmf-9.jpg";
import StreamingIcons from "../../../components/StreamingIcons";

import Lightbox from "../../../components/Lightbox";
import s from "../../../css/content.module.css";

const HelloMyFriends = (props) => {
  // const [email, setEmail] = useState("");

  const sources = [
    // filmCover,
    // "https://youtu.be/XWPHrZOmHd4?si=O3a1fTUxsI4T0JCV",
    cover1,
    cover2,
    hmf1,
    hmf2,
    hmf3,
    hmf4,
    hmf5,
    hmf6,
    hmf7,
    hmf8,
    hmf9,
  ];
  const types = Array(11).fill("image");
  // types.unshift("youtube");
  // types.unshift("image");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await dropbox(email);
  //   setEmail("");
  // };
  return (
    <div className={s.content} id="hmf">
      <div className={s.contentTop}>
        <h2>Hello My Friends</h2>
      </div>
      <div className={s.contentLeft}>
        <img
          id={s.albumArt}
          src={cover1}
          alt="cover"
          onClick={props.toggleLightbox}
        />
      </div>
      <div className={s.contentRight}>
        <p>
          A found footage chronicle of youth, drug abuse, self-worth, and
          identity in rural America.
          <br />
          <br />
          OST streaming everywhere.
          <br />
          <br />
          <span style={{ color: "red" }}>Film coming soon.</span>
          <br />
          VI_016
        </p>
        <p></p>
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input type="submit" value="submit"></input>
        </form> */}
      </div>
      <div className={s.contentBottom}>
        <StreamingIcons
          urls={{
            spotify:
              "https://open.spotify.com/album/5yBLjNzMUL200NHztYNlJG?si=AHHMTHR-SJuJWhYIA7JH5A",
            youtubeMusic:
              "https://music.youtube.com/playlist?list=OLAK5uy_mYGFJuptMLUt8btLfXlUrBZD8xcW4Tq-o&si=pgZpSXilSc0nRIb5",
            appleMusic:
              "https://music.apple.com/us/album/hello-my-friends/1714521912",
          }}
        />
      </div>
      <Lightbox sources={sources} types={types} toggle={props.toggle} />
    </div>
  );
};

export default HelloMyFriends;

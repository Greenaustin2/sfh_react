import { useEffect, useState } from "react";
// import dropbox from "../../../utils/dropbox";
import cover1 from "./front_final.jpg";
import cover2 from "./back_final.jpg";
// import filmCover from "./hmf-cover.jpg";
import filmCover from "./yt.png";

// import filmCover from "./film_cover_ascii.jpg";
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
    "https://youtu.be/XWPHrZOmHd4",
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
  types.unshift("youtube");
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
        {/* <div className={s.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sRwYp4F-4lk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div> */}
        <img
          id={s.albumArt}
          src={filmCover}
          alt="cover"
          onClick={props.toggleLightbox}
        />
      </div>
      {/* <div className={s.contentRight}>
        <p>
          A found footage chronicle of youth, drug abuse, self-worth, and
          identity in rural America.
          <br />
          <br />
          OST streaming everywhere.
          <br />
          <br />
          <span style={{ color: "red" }}>Short film streaming 11/11.</span>
          <br />
          VI_016
        </p>

      </div> */}

      <div className={s.contentRight}>
        <p>
          A found footage chronicle of youth, drug abuse, self-worth, and
          identity in rural America.
          <br />
          <br />
          <br />
          We discovered Alexander Alexanderson on Youtube in 2016 via his video
          entitled “chugging whiskey, fuck the government”. The entirety of his
          channel’s contents were downloaded and catalogued, all of which has
          since been removed from the internet. Over the past 7 years this ~90
          hours of footage has slowly morphed into a cohesive 48 minute short
          film. We hope you find Alexander as eccentric and outlandish as we
          did, and still do.
          <br />
          <br />
          <br />
          <a
            href="https://youtu.be/gRCCA5MMXP4"
            target="_blank"
            rel="noreferrer"
          >
            STREAM
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            href="https://download948.mediafire.com/9w1i9en979gg9IZDtV7JrP-PSZR1EXpfrEkZdHDvEdPGRQFLlO8hmbACkzLT67d9lrdlufjDwuKFDyRVWGEoObE01eQpPSq_VTWj9rpTrQ-FVSkSa_BpXMpgXI983cVKA4i-w7Ji8P2sq4zxO7Wlx17EyNj7XiD_rkFaJAN_YI_U-A/m5jt696wwb4vvse/hello_my_friends.zip"
            target="_blank"
            rel="noreferrer"
          >
            DOWNLOAD
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            href="https://drive.google.com/drive/folders/1kbdP3KS1nasXbCgKpRClpe5B7FeQqybL?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            CLOUD
          </a>
          <br />
          <br />
          <br />
          Released 11_11_2023
          <br />
          VI_016
        </p>
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

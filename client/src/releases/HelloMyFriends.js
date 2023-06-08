import hmfCover from "../images/016-hmf/hmf-cover.jpg";
import hmf1 from "../images/016-hmf/hmf-1.jpg";
import hmf2 from "../images/016-hmf/hmf-2.jpg";
import hmf3 from "../images/016-hmf/hmf-3.jpg";
import hmf4 from "../images/016-hmf/hmf-4.jpg";
import hmf5 from "../images/016-hmf/hmf-5.jpg";
import hmf6 from "../images/016-hmf/hmf-6.jpg";
import hmf7 from "../images/016-hmf/hmf-7.jpg";
import hmf8 from "../images/016-hmf/hmf-8.jpg";
import hmf9 from "../images/016-hmf/hmf-9.jpg";

const HelloMyFriends = () => {
  return (
    <div class="content" id="hmf">
      <div className="content-top">
        <h2>Hello My Friends</h2>
      </div>
      <div className="content-left">
        <a
          data-fslightbox="hmf"
          href="images/016_hello-my-friends/hmf-cover.jpg"
        >
          <img id="album-art" src={hmfCover} />
        </a>{" "}
        <a
          data-fslightbox="hmf"
          href="images/016_hello-my-friends/hmf-2.jpg"
        ></a>
        <a
          data-fslightbox="hmf"
          href="images/016_hello-my-friends/hmf-3.jpg"
        ></a>
        <a
          data-fslightbox="hmf"
          href="images/016_hello-my-friends/hmf-4.jpg"
        ></a>
        <a
          data-fslightbox="hmf"
          href="images/016_hello-my-friends/hmf-5.jpg"
        ></a>
        <a
          data-fslightbox="hmf"
          href="images/016_hello-my-friends/hmf-6.jpg"
        ></a>
        <a
          data-fslightbox="hmf"
          href="images/016_hello-my-friends/hmf-7.jpg"
        ></a>
        <a
          data-fslightbox="hmf"
          href="images/016_hello-my-friends/hmf-8.jpg"
        ></a>
        <a
          data-fslightbox="hmf"
          href="images/016_hello-my-friends/hmf-9.jpg"
        ></a>
      </div>
      <div className="content-right">
        <p>
          A found footage chronicle of youth, drug abuse, viral culture, self
          worth, and identity in the armpit of America.
          <br />
          <br />
          <span className="red">Coming soon.</span>
          <br />
          VI_016
        </p>
      </div>
      <div className="content-bottom">
        <a href="" target="_blank">
          <img id="streaming-icon" src="images/streaming-icons/spotify.png" />
        </a>
        <a href="" target="_blank">
          <img id="streaming-icon" src="images/streaming-icons/apple.png" />
        </a>
        <a href="" target="_blank">
          <img
            id="streaming-icon"
            src="images/streaming-icons/youtube-music.png"
          />
        </a>
      </div>
    </div>
  );
};

export default HelloMyFriends;

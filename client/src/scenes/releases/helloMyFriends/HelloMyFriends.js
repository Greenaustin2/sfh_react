import hmfCover from "./hmf-cover.jpg";
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

const HelloMyFriends = () => {
  return (
    <div class="content" id="hmf">
      <div className="content-top">
        <h2>Hello My Friends</h2>
      </div>
      <div className="content-left">
        <img id="album-art" src={hmfCover} />
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
    </div>
  );
};

export default HelloMyFriends;

import header from "./spotify-header-invisible.jpg";
// import "../css/styles.css";

const About = () => {
  return (
    <div className="content" id="about">
      <div className="content-top">
        <h2>
          <span className="font1">VI</span> <span className="font2">VI</span>{" "}
          <span className="font3">VI</span> <span className="font4">VI</span>{" "}
          <span className="font5">VI</span> <span className="font6">VI</span>
        </h2>
      </div>
      <div className="content-left">
        <img alt="playing card" id="album-art-no" src={header} />
      </div>
      <div className="content-right">
        <p>
          Six Finger Hand is an audio//visual collective based in New York,
          California and Oregon, presenting self motivated projects and
          commissioned works. For any/all questions or comments, inquire below.{" "}
          <br />
          <br />
          est. 2016
          <br />
          <br />
          <br />
          <a href="mailto:vi@sixfingerhand.xyz">vi@sixfingerhand.xyz</a>
        </p>
      </div>
      <div className="content-bottom"></div>
    </div>
  );
};

export default About;

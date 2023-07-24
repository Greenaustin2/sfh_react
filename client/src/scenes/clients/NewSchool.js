import s from "../../css/content.module.css";

const NewSchool = () => {
  return (
    <div className={s.content} id="ns">
      <div className={s.contentTop}>
        <h2>The New School</h2>
      </div>
      <div className={s.contentLeft}>
        <div className={s.videoContainer}>
          <iframe
            className="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9YoIXXPJ0YU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className={s.contentRight}>
        <p>
          At Parsons, Ani has gained digital skills in an urban setting in which
          he can take his drawing—and personal and professional aspirations—to
          the next level.
          <br />
          <br />
          In his BFA Illustration program, Dubai-born Ani was challenged to go
          beyond drawing to master other design tools, which led him to creative
          practices including animation, his new career focus. Life in New York
          City offers him ample creative inspiration while broadening his
          perspective on life and his future.
        </p>
      </div>
      <div className={s.contentBottom}>
        <p>
          <br />
          Original score by Six Finger Hand
          <br />
          <br />
          <a
            href="https://www.newschool.edu/parsons/"
            target="_blank"
            rel="noreferrer"
          >
            <em>Parsons School of Design</em>
          </a>
          <br />
          <a href="https://www.newschool.edu/" target="_blank" rel="noreferrer">
            <em>The New School</em>
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewSchool;

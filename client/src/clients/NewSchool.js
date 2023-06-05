const NewSchool = () => {
  return (
    <div className="content" id="ns">
      <div className="content-top">
        <h2>The New School</h2>
      </div>
      <div className="content-left">
        <div className="video-container">
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
      <div className="content-right">
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
      <div className="content-bottom">
        <p>
          <br />
          Original score by Six Finger Hand
          <br />
          <br />
          <a href="https://www.newschool.edu/parsons/">
            <em>Parsons School of Design</em>
          </a>
          <br />
          <a href="https://www.newschool.edu/">
            <em>The New School</em>
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewSchool;

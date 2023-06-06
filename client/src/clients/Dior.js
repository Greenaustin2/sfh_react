const Dior = () => {
  return (
    <div className="content" id="dior">
      <div className="content-top">
        <h2>Dior</h2>
      </div>
      <div className="content-left">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Q16yd0iVd30"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="content-right">
        <p>
          In this transporting behind-the-scenes film of different shoots for
          Dior Magazine No.36, entitled "From Dior to Greece", immerse yourself
          in the atmosphere and inspirations of the Dior Cruise 2022 collection
          designed by Maria Grazia Chiuri. Sporty silhouettes inspired by
          classical Greece and mythical female goddesses and divinities are
          captured against ancient ruins and the sea, with commentaries by the
          photographers who collaborated on the project.
        </p>
      </div>
      <div className="content-bottom">
        <p>
          <br />
          Original score from Six Finger Hand
          <br />
          <br />
          <a href="http://baron-baron.com/">© Fabien Baron</a>
        </p>
      </div>
    </div>
  );
};

export default Dior;

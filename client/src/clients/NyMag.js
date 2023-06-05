const NyMag = () => {
  return (
    <div className="content" id="nym">
      <div className="content-top">
        <h2>New York Magazine</h2>
      </div>
      <div className="content-left">
        <div className="video-container">
          <iframe
            className="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LgmC-OWnk_M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="content-right">
        <p>
          What it's like to be a New York City delivery worker.
          <br />
          <br />A film by{" "}
          <a href="https://www.danilop.com/">
            <em>Danilo Parra</em>
          </a>{" "}
          for New York Magazine.
          <br />
          Read the full report{" "}
          <a href="https://www.curbed.com/article/nyc-delivery-workers.html">
            <em>here</em>
          </a>
          .
        </p>
      </div>
      <div className="content-bottom">
        <p>
          <br></br>
          Original score by Six Finger Hand
          <br />
          <br />
          <a href="https://nymag.com/">
            <em>New York Magazine</em>
          </a>
        </p>
      </div>
    </div>
  );
};

export default NyMag;

const About = () => {
  return (
    <div className="content" id="mcad">
      <div className="content-top">
        <h2>Monster Children x Adidas</h2>
      </div>
      <div className="content-left">
        <div className="video-container">
          <iframe
            className="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7vqpqSS2CnI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="content-right">
        <p>
          Featuring the adidas Skateboarding team in Tokyo during the Skate Copa
          Classics event and rolled around the streets with Alec Majerus, Silas
          Baxter Neal, Dan Mancina, Diego Najera, Dennis Durrant, Jake Donnelly,
          Frankie Spears, Brad Saunders, Shin Sanbongi and Kento Yoshioka.
          <br />
          <br />
          Filmed, directed and edited by Michael Cukr
          <br />
          Produced by Kevin Duffel
          <br />
          Photography by Andrew James Peters
          <br />
        </p>
      </div>
      <div className="content-bottom">
        <p>
          <br />
          Original score by Six Finger Hand
          <br />
          <br />
          <small>
            01:20 - 03:00
            <br />
            06:30 - 07:05
          </small>
        </p>
      </div>
    </div>
  );
};

export default About;

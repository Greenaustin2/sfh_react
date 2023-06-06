const Apartamento = () => {
  return (
    <div className="content" id="apt">
      <div className="content-top">
        <h2>Apartamento</h2>
      </div>
      <div className="content-left">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/560310218?h=e1e989406e"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="content-right">
        <p>
          Tabboo! A short film by{" "}
          <a href="https://www.michaelcukr.com/" target="_blank">
            Michael Cukr
          </a>
          <br />
          <br />
          TABBOO! has entered an exciting new stage in a life already jam-packed
          with excitement. The artist’s formative years were spent in parallel
          schools of culture: the art world and the drag world. He created a
          routine in which days were spent making paintings and nights were
          spent performing, with neither form of expression more important to
          him than the other. Revered for his impactful presence in nightlife,
          he came up during New York City’s mega club heyday—the ‘80s and
          ‘90s—with now mainstream stars Leigh Bowery, RuPaul, and Lady Bunny.
          True to his moniker, TABBOO!’s stage persona is unexpected,
          irreverent, and magnetic, sharing more with performance art than
          contemporary drag. Iconic moments such as the 1993 Wigstock debut of
          his sexual freedom anthem ‘It’s Natural’ have secured his legendary
          status, but the last few years have marked a shift in the appreciation
          of his talents. For decades, drag fame thwarted a welcome reception
          from an uptight artworld.
        </p>
      </div>
      <div className="content-bottom">
        <br />
        <p>
          Original score by Six Finger Hand
          <br />
        </p>
        <a href="https://www.apartamentomagazine.com/">
          <em>Apartamento Magazine</em>
        </a>
      </div>
    </div>
  );
};

export default Apartamento;

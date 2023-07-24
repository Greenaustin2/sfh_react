import s from "../../css/content.module.css";

const Apartamento = () => {
  return (
    <div className={s.content} id="apt">
      <div className={s.contentTop}>
        <h2>Apartamento</h2>
      </div>
      <div className={s.contentLeft}>
        <div className={s.videoContainer}>
          <iframe
            title="vimeo player"
            src="https://player.vimeo.com/video/560310218?h=e1e989406e"
            // style={{
            //   position: "absolute",
            //   top: 0,
            //   left: 0,
            //   width: "98%",
            //   height: "98%",
            // }}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className={s.contentRight}>
        <p>
          Tabboo! A short film by{" "}
          <a
            href="https://www.michaelcukr.com/"
            target="_blank"
            rel="noreferrer"
          >
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
      <div className={s.contentBottom}>
        <br />
        <p>
          Original score by Six Finger Hand
          <br />
        </p>
        <a
          href="https://www.apartamentomagazine.com/"
          target="_blank"
          rel="noreferrer"
        >
          <em>Apartamento Magazine</em>
        </a>
      </div>
    </div>
  );
};

export default Apartamento;

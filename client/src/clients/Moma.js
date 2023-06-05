const Moma = () => {
  return (
    <div className="content" id="moma">
      <div className="content-top">
        <h2>MoMA</h2>
      </div>
      <div className="content-left">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sRwYp4F-4lk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="content-right">
        <p>
          Architect <a href="https://linktr.ee/jo.hwang">Joyce Hwang</a> looks
          to other species for design lessons. "Animals are incredibly smart
          because they are survivors," she says. Hwang's work at University of
          Buffalo is at the forefront of a movement to design structures for
          nonhuman species. She studies the ways that wildlife–birds, bees, and
          bats–find shelter in the built environment. "They’re not extracting
          resources. They’re able to work with what they have. We look at the
          way the animals have survived for ages and ages without causing
          environmental crises."
          <br />
          <br />
          Built Ecologies: Architecture and Environment is a video series from
          MoMA’s Emilio Ambasz Institute for the Joint Study of the Built and
          the Natural Environment that features prominent architects and
          thinkers doing innovative work across environmental topics. In each
          episode, these figures are invited to define the terms “architecture”
          and “environment,” producing a through-line between videos that
          otherwise capture a wide variety of practices and backgrounds.
        </p>
      </div>
      <div className="content-bottom">
        <p>
          <br />
          Original score by Six Finger Hand
          <br />
          <br />
          <a href="https://www.moma.org/collection/">MoMA</a>
        </p>
      </div>
    </div>
  );
};

export default Moma;

const PlayingCard = () => {
  return (
    <div className="content" id="sfc">
      <div className="content-top">
        <h2>SFH 52</h2>
      </div>
      <div className="content-left">
        <a data-fslightbox="sfc" href="images/sfcard.png">
          <img id="album-art" src="images/sfcard.png" />
        </a>
      </div>
      <div className="content-right">
        <p>
          Deck of 52 playing cards.
          <br />
          1/1
          <br />
          <br />
          VI_000
        </p>
      </div>
      <div className="content-bottom"></div>
    </div>
  );
};

export default PlayingCard;

import cardImage from "./sfcard.png";

const PlayingCard = () => {
  return (
    <div className="content" id="sfc">
      <div className="content-top">
        <h2>SFH 52</h2>
      </div>
      <div className="content-left">
        <img alt="playing card" id="album-art" src={cardImage} />
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

const GraphicBalance = () => {
  return (
    <div className="content" id="gb">
      <div className="content-top">
        <h2>Graphic Balance</h2>
      </div>
      <div className="content-left">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QK86har69HI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="content-right">
        <p>
          An alternative video feed, currently under construction.
          <br />
          <br />
          <img
            className="construction"
            src="images/construction.png"
            alt="cone image"
          />
          <br />
          <br />
          <span className="red">Coming Soon</span>
          <br />
          VI_005
        </p>
      </div>
      <div className="content-bottom"></div>
    </div>
  );
};

export default GraphicBalance;

import s from "../../../css/content.module.css";
import construction from "../../../images/other/construction.png";

const GraphicBalance = () => {
  return (
    <div className={s.content} id="gb">
      <div className={s.contentTop}>
        <h2>Graphic Balance</h2>
      </div>
      <div className={s.contentLeft}>
        <div className={s.videoContainer}>
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
      <div className={s.contentRight}>
        <p>
          An alternative video feed, currently under construction.
          <br />
          <br />
          <img
            style={{ width: "40px", height: "auto" }}
            src={construction}
            alt="construction cone"
          />
          <br />
          <br />
          <span style={{ color: "red" }}>Coming Soon</span>
          <br />
          VI_005
        </p>
      </div>
      <div className={s.contentBottom}></div>
    </div>
  );
};

export default GraphicBalance;

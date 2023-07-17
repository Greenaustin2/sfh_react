import { spotify, appleMusic, youtubeMusic } from "../images/index";
import s from "../css/content.module.css";

const StreamingIcons = (urls) => {
  const url = urls["urls"];
  return (
    <div className="content-bottom">
      <a href={url["spotify"]} target="_blank" rel="noreferrer">
        <img alt="spotify icon" id={s.streamingIcon} src={spotify} />
      </a>
      <a href={url["appleMusic"]} target="_blank" rel="noreferrer">
        <img alt="apple music icon" id={s.streamingIcon} src={appleMusic} />
      </a>
      <a href={url["youtubeMusic"]} target="_blank" rel="noreferrer">
        <img alt="youtube music icon" id={s.streamingIcon} src={youtubeMusic} />
      </a>
    </div>
  );
};

export default StreamingIcons;

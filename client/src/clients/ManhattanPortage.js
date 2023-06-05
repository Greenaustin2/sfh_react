const ManhattanPortage = () => {
  return (
    <div className="content" id="mp">
      <div className="content-top">
        <h2>Manhattan Portage</h2>
      </div>
      <div className="content-left">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dlXMsql1ZVk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/grLBbe6u2Lg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="content-right">
        <p>
          <a href="https://www.manhattanportage.com/?gclid=Cj0KCQjwiZqhBhCJARIsACHHEH_jUo1yThZMBVZGffcIwTARuz9gh0r9psuZFlGni5f8lhepI_Y14vQaAm6pEALw_wcB">
            Manhattan Portage
          </a>
          <br />
          <br />
          Directed by{" "}
          <a href="http://www.petersutherland.com/">Peter Sutherland</a>
          <br />
          <br />
          Produced by{" "}
          <a href="https://sewardparkfilms.nyc/">Seward Park Films Inc.</a>
        </p>
      </div>
      <div className="content-bottom">
        <p>
          <br />
          Original score by Six Finger Hand
        </p>
      </div>
    </div>
  );
};

export default ManhattanPortage;

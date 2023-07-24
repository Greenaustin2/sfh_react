const [toggle, setToggle] = useState(false);
const sources = [];
const types = [];
return (
  <div className={s.content} id="">
    <div className={s.contentTop}></div>
    <div className={s.contentLeft}>
      <img
        id={s.albumArt}
        alt="cover"
        src={flagImage1}
        onClick={() => setToggle(!toggle)}
      />
    </div>
    <div className={s.contentRight}></div>
    <div className={s.contentBottom}></div>
    <Lightbox sources={sources} types={types} toggler={toggle} />
  </div>
);

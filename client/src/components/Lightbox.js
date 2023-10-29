import FsLightbox from "fslightbox-react";
import "../css/lightbox.css";

const Lightbox = ({ sources, types, toggle }) => {
  // console.log(sources);
  // console.log(toggle);
  return <FsLightbox sources={sources} toggler={toggle} types={types} />;
};

export default Lightbox;

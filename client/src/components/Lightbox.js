import FsLightbox from "fslightbox-react";

const Lightbox = ({ sources, types, toggle }) => {
  console.log(sources);
  console.log(toggle);
  return <FsLightbox sources={sources} toggler={toggle} types={types} />;
};

export default Lightbox;

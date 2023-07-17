import neuliOne from "./neuli-1.jpg";
import neuliTwo from "./neuli-2.jpg";
import neuliThree from "./neuli-3.jpg";
import neuliFour from "./neuli-4.jpg";
import neuliFive from "./neuli-5.jpg";

const Neuli = () => {
  return (
    <div className="content" id="nli">
      <div className="content-top">
        <h2>NEULI</h2>
      </div>
      <div className="content-left">
        <img alt="book cover" id="album-art" src={neuliOne} />
      </div>
      <div className="content-right">
        <p>
          NEULI re-contextualizes images from a common packaging and sales
          catalog known as ULINE.
          <br />
          It acts as an ode to Marcel Duchamp and the readymade in modern
          context.
          <br />
          <br />
          Jayson Payne, 2016
          <br />
          30 Pages, 4.25 X 5.5 in
          <br />
          <br />
          Released April 14, 2016
          <br />
          VI_004
          <br />
        </p>
      </div>
      <div className="content-bottom"></div>
    </div>
  );
};

export default Neuli;

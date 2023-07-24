import { Route, Routes } from "react-router-dom";
import * as Releases from "../scenes/index";
import * as Client from "../scenes/clients/index";

const ContentRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Releases.Empty />} />
      <Route path="/about" element={<Releases.About {...props} />} />
      <Route
        path="/collection-of-music"
        element={<Releases.CollectionOfMusic {...props} />}
      />
      <Route
        path="/deconstructed-flag"
        element={<Releases.DeconstructedFlag {...props} />}
      />
      <Route
        path="/digital-music"
        element={<Releases.DigitalMusic {...props} />}
      />
      <Route path="/exeter" element={<Releases.Exeter {...props} />} />
      <Route path="/graphic-balance" element={<Releases.GraphicBalance />} />
      <Route
        path="/hello-my-friends"
        element={<Releases.HelloMyFriends {...props} />}
      />
      <Route
        path="/ideas-for-songs"
        element={<Releases.IdeasForSongs {...props} />}
      />
      <Route
        path="/SFH-KXLU-YYYY-mm-dd"
        element={<Releases.Kxlu {...props} />}
      />
      <Route
        path="/last-balcony"
        element={<Releases.LastBalcony {...props} />}
      />
      <Route
        path="/music-for-australia"
        element={<Releases.MusicForAustralia {...props} />}
      />
      <Route
        path="/music-for-europe"
        element={<Releases.MusicForEurope {...props} />}
      />
      <Route
        path="/music-for-hawaii"
        element={<Releases.MusicForHawaii {...props} />}
      />
      <Route path="/neuli" element={<Releases.Neuli {...props} />} />
      <Route path="/vi_000" element={<Releases.PlayingCard {...props} />} />
      <Route
        path="/transpositions"
        element={<Releases.Transpositions {...props} />}
      />
      <Route
        path="/vincent-thomas"
        element={<Releases.VincentThomas {...props} />}
      />
      <Route
        path="/watched-pot-boils"
        element={<Releases.WatchedPot {...props} />}
      />
      <Route path="/apartamento" element={<Client.Apartamento />} />
      <Route path="/dior" element={<Client.Dior />} />
      <Route path="/manhattan-portage" element={<Client.ManhattanPortage />} />
      <Route path="/moma" element={<Client.Moma />} />
      <Route path="/mc-adidas" element={<Client.MonsterChildrenAdidas />} />
      <Route path="/new-school" element={<Client.NewSchool />} />
      <Route path="/ny-mag" element={<Client.NyMag />} />
    </Routes>
  );
};

export default ContentRoutes;

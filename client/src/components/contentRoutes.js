import { Route, Routes } from "react-router-dom";
import * as Releases from "../releases/index";
import * as Client from "../clients/index";

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Releases.Empty />} />
      <Route path="/about" element={<Releases.About />} />
      <Route
        path="/collection-of-music"
        element={<Releases.CollectionOfMusic />}
      />
      <Route
        path="/deconstructed-flag"
        element={<Releases.DeconstructedFlag />}
      />
      <Route path="/digital-music" element={<Releases.DigitalMusic />} />
      <Route path="/exeter" element={<Releases.Exeter />} />
      <Route path="/graphic-balance" element={<Releases.GraphicBalance />} />
      <Route path="/hello-my-friends" element={<Releases.HelloMyFriends />} />
      <Route path="/ideas-for-songs" element={<Releases.IdeasForSongs />} />
      <Route path="/SFH-KXLU-YYYY-mm-dd" element={<Releases.Kxlu />} />
      <Route path="/last-balcony" element={<Releases.LastBalcony />} />
      <Route
        path="/music-for-australia"
        element={<Releases.MusicForAustralia />}
      />
      <Route path="/music-for-europe" element={<Releases.MusicForEurope />} />
      <Route path="/music-for-hawaii" element={<Releases.MusicForHawaii />} />
      <Route path="/neuli" element={<Releases.Neuli />} />
      <Route path="/vi_000" element={<Releases.PlayingCard />} />
      <Route path="/transpositions" element={<Releases.Transpositions />} />
      <Route path="/vincent-thomas" element={<Releases.VincentThomas />} />
      <Route path="/watched-pot-boils" element={<Releases.WatchedPot />} />
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

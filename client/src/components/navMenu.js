import TreeMenu from "react-simple-tree-menu";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router";
import Apartamento from "../clients/Apartamento";
import Dior from "../clients/Dior";

const NavMenu = () => {
  const navigate = useNavigate();

  const treeData = {
    releases: {
      label: "releases",
      nodes: {
        all: {
          label: "all",
          nodes: {
            helloMyFriends: {
              label: "_Hello My Friends",
              index: 16,
            },
            exeter: {
              label: "_Exeter (unfinished randoms",
              index: 15,
            },
            collectionOfMusic: {
              label: "_Collection of Music",
              index: 14,
            },
            watchedPotBoils: {
              label: "_Watched Pot Boils",
              index: 13,
            },
            kxlu: {
              label: "_SFH_KXLU_YYYY-mm-dd",
              index: 12,
            },
            vincentThomas: {
              label: "_The Many Deaths of Vincent Thomas",
              index: 11,
            },
            lastBalcony: {
              label: "_Last Balcony",
              index: 10,
            },
            deconstructedFlag: {
              label: "_Deconstructed Flag",
              index: 9,
            },
            ideasForSongs: {
              label: "_Ideas for Songs",
              index: 8,
            },
            transpositions: {
              label: "_Transpositions",
              index: 7,
            },
            digitalMusic: {
              label: "_01101101 01110101 01110011 01101001 01100011",
              index: 6,
            },
            graphicBalance: {
              label: "_Graphic Balance",
              index: 5,
            },
            neuli: {
              label: "_NEULI",
              index: 4,
            },
            musicForHawaii: {
              label: "_Music for Hawaii",
              index: 3,
            },
            musicForAustralia: {
              label: "_Music for Australia",
              index: 3,
            },
            musicForEurope: {
              label: "_Music For Europe",
              index: 1,
            },
            vi_000: {
              label: "_VI_000",
              index: 0,
            },
          },
        },
        audio: {
          label: "audio",
          nodes: {},
        },
        visual: {
          label: "visual",
          nodes: {},
        },
      },
    },
    clients: {
      label: "clients",
      nodes: {
        vi_000: {
          label: "_VI_000",
          index: 0,
        },
      },
    },
    about: {
      label: "about",
      nodes: {
        vi_000: {
          label: "_VI_000",
          index: 0,
        },
      },
    },
  };
  return (
    // <TreeMenu
    //   data={treeData}
    //   hasSearch={false}
    //   onClickItem={function populate({ ...props }) {
    //     if (!props.hasNodes) {
    //       navigate("/" + props.key);
    //       console.log(props.key);
    //     }
    //   }}
    // />
    <>
      <Link to="/circle">Apartamento</Link>
      <Link to="/square">Dior</Link>

      <Routes>
        <Route path="/circle" element={<Apartamento />} />
        <Route path="/square" element={<Dior />} />
      </Routes>
    </>
  );
};

export default NavMenu;

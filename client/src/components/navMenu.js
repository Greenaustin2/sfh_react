import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Apartamento from "../clients/Apartamento";
import Dior from "../clients/Dior";
import About from "../releases/About";
import "../../node_modules/react-simple-tree-menu/dist/main.css";
import TreeMenu from "react-simple-tree-menu";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const NavMenu = () => {
  const treeData = {
    releases: {
      label: "releases",
      children: {
        all: {
          label: "all",
          children: {
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
          children: {},
        },
        visual: {
          label: "visual",
          children: {},
        },
      },
    },
    clients: {
      label: "clients",
      children: {
        vi_000: {
          label: "_VI_000",
          index: 0,
        },
      },
    },
    about: {
      label: "about",
      children: {
        vi_000: {
          label: "_VI_000",
          index: 0,
        },
      },
    },
  };

  const treeDataList = [
    {
      id: "releases",
      label: "releases",
      nodeId: "1",
      children: [
        {
          id: "all",
          label: "all",
          nodeId: "4",
          children: [
            {
              id: "hmf",
              label: "_Hello My Friends",
              href: "/hello_my_friends",
              nodeId: "7",
              children: [],
            },
          ],
        },
        {
          id: "audio",
          label: "audio",
          nodeId: "5",
          children: [
            {
              id: "hmf",
              label: "_Hello My Friends",
              href: "/hello_my_friends",
              nodeId: "9",
              children: [],
            },
            {
              id: "exeter",
              label: "_Exeter (unfinished randoms",
              href: "/exeter",
              nodeId: "8",
              children: [],
            },
          ],
        },
        {
          id: "visual",
          label: "visual",
          nodeId: "6",
          children: [
            {
              id: "wpb",
              label: "_Watched Pot Boils",
              href: "/watched_pot_boils",
              nodeId: "11",
              children: [],
            },
            {
              id: "kxlu",
              label: "_SFH_KXLU_YYYY-mm-dd",
              href: "/SFH_KXLU_YYYY-mm-dd",
              nodeId: "10",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "clients",
      label: "clients",
      nodeId: "2",
      children: [
        {
          id: "apartamento",
          label: "apartamento",
          href: "/apartamento",
          nodeId: "12",
          children: [],
        },
      ],
    },
    {
      id: "about",
      label: "about",
      href: "about",
      nodeId: "3",
      children: [],
    },
  ];
  const handleClick = (node) => {
    console.log(node);
  };
  const getTreeItemsFromData = (treeDataList) => {
    return treeDataList.map((treeItemData) => {
      let children = undefined;
      if (treeItemData.children && treeItemData.children.length > 0) {
        children = getTreeItemsFromData(treeItemData.children);
      }
      return (
        <TreeItem
          key={treeItemData.id}
          nodeId={treeItemData.nodeId}
          label={treeItemData.label}
          children={children}
          onIconClick={handleClick(treeItemData.label)}
        />
      );
    });
  };
  const DataTreeView = ({ treeDataList }) => {
    return (
      <div>
        <TreeView>{getTreeItemsFromData(treeDataList)}</TreeView>
      </div>
    );
  };

  return (
    <div>
      <DataTreeView treeDataList={treeDataList} />
    </div>
  );
};

export default NavMenu;

import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem, { useTreeItem } from "@mui/lab/TreeItem";
import clsx from "clsx";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

const CustomContentRoot = styled("div")(({ theme }) => ({
  WebkitTapHighlightColor: "transparent",
  "&:hover, &.Mui-disabled, &.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused, &.Mui-selected:hover":
    {
      backgroundColor: "transparent",
    },
  [`& .MuiTreeItem-contentBar`]: {
    position: "absolute",
    width: "100%",
    height: 24,
    left: 0,
    "&:hover &": {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-disabled &": {
      opacity: theme.palette.action.disabledOpacity,
      backgroundColor: "transparent",
    },
    "&.Mui-focused &": {
      backgroundColor: theme.palette.action.focus,
    },
    "&.Mui-selected &": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity
      ),
    },
    "&.Mui-selected:hover &": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    "&.Mui-selected.Mui-focused &": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity
      ),
    },
  },
}));

const CustomContent = React.forwardRef(function CustomContent(props, ref) {
  const navigate = useNavigate();
  const {
    className,
    classes,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event) => {
    preventSelection(event);
  };

  const handleClick = (event) => {
    if (props.nodeId > 5) {
      navigate(props.href);
    }
    handleExpansion(event);
    handleSelection(event);
  };

  return (
    <CustomContentRoot
      className={clsx(className, classes.root, {
        "Mui-expanded": expanded,
        "Mui-selected": selected,
        "Mui-focused": focused,
        "Mui-disabled": disabled,
      })}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      ref={ref}
    >
      <div className="MuiTreeItem-contentBar" />
      <div className={classes.iconContainer}>{icon}</div>
      <Typography component="div" className={classes.label}>
        {label}
      </Typography>
    </CustomContentRoot>
  );
});

CustomContent.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  /**
   * className applied to the root element.
   */
  className: PropTypes.string,
  /**
   * The icon to display next to the tree node's label. Either a parent or end icon.
   */
  displayIcon: PropTypes.node,
  /**
   * The icon to display next to the tree node's label. Either an expansion or collapse icon.
   */
  expansionIcon: PropTypes.node,
  /**
   * The icon to display next to the tree node's label.
   */
  icon: PropTypes.node,
  /**
   * The tree node label.
   */
  label: PropTypes.node,

  /**
   * The id of the node.
   */
  nodeId: PropTypes.string.isRequired,
};

function CustomTreeItem(props) {
  return <TreeItem ContentComponent={CustomContent} {...props} />;
}

const getTreeItemsFromData = (treeDataList) => {
  return treeDataList.map((treeItemData) => {
    let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return (
      <CustomTreeItem
        key={treeItemData.label}
        nodeId={treeItemData.nodeId}
        label={treeItemData.label}
        children={children}
        className="buttons"
        ContentProps={{ href: treeItemData.href }}
        // onClick={console.log(props.label)}
      />
    );
  });
};
const DataTreeView = ({ treeDataList }) => {
  return (
    <div>
      <TreeView
        aria-label="icon expansion"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, position: "relative" }}
      >
        {getTreeItemsFromData(treeDataList)}
      </TreeView>
    </div>
  );
};

export default function BarTreeView() {
  const treeDataList = [
    {
      label: "releases",
      href: "",
      nodeId: "1",
      children: [
        {
          label: "all",
          href: "",
          nodeId: "2",
          children: [
            {
              label: "_Hello My Friends",
              href: "/hello-my-friends",
              nodeId: "22",
              children: [],
            },
            {
              label: "_Exeter (unfinished randoms)",
              href: "/exeter",
              nodeId: "21",
              children: [],
            },
            {
              label: "_Collection of Music",
              href: "/collection-of-music",
              nodeId: "20",
              children: [],
            },
            {
              label: "_Watched Pot Boils",
              href: "/watched-pot-boils",
              nodeId: "19",
              children: [],
            },
            {
              label: "_SFH_KXLU_YYYY-mm-dd",
              href: "/SFH-KXLU-YYYY-mm-dd",
              nodeId: "7",
              children: [],
            },
            {
              label: "_The Many Deaths of Vincent Thomas",
              href: "/vincent-thomas",
              nodeId: "18",
              children: [],
            },
            {
              label: "_Last Balcony",
              href: "/last-balcony",
              nodeId: "17",
              children: [],
            },
            {
              label: "_Deconstructed Flag",
              href: "/deconstructed-flag",
              nodeId: "16",
              children: [],
            },
            {
              label: "_Ideas for Songs",
              href: "/ideas-for-songs",
              nodeId: "15",
              children: [],
            },
            {
              label: "_Transpositions",
              href: "/transpositions",
              nodeId: "14",
              children: [],
            },
            {
              label: "_01101101 01110101 01110011 01101001 01100011",
              href: "/digital-music",
              nodeId: "13",
              children: [],
            },
            {
              label: "_Graphic Balance",
              href: "/graphic-balance",
              nodeId: "12",
              children: [],
            },
            {
              label: "_Neuli",
              href: "/neuli",
              nodeId: "11",
              children: [],
            },
            {
              label: "_Music for Hawaii",
              href: "/music-for-hawaii",
              nodeId: "10",
              children: [],
            },
            {
              label: "_Music for Australia",
              href: "/music-for-australia",
              nodeId: "9",
              children: [],
            },
            {
              label: "_Music for Europe",
              href: "/music-for-europe",
              nodeId: "8",
              children: [],
            },
            {
              label: "_VI_000",
              href: "/vi_000",
              nodeId: "7",
              children: [],
            },
          ],
        },
        {
          id: "audio",
          label: "audio",
          href: "a",
          nodeId: "3",
          children: [
            {
              label: "_Exeter (unfinished randoms)",
              href: "/exeter",
              nodeId: "21",
              children: [],
            },
            {
              label: "_Collection of Music",
              href: "/collection-of-music",
              nodeId: "20",
              children: [],
            },
            {
              label: "_Watched Pot Boils",
              href: "/watched-pot-boils",
              nodeId: "19",
              children: [],
            },
            {
              label: "_SFH_KXLU_YYYY-mm-dd",
              href: "/SFH-KXLU-YYYY-mm-dd",
              nodeId: "7",
              children: [],
            },
            {
              label: "_Last Balcony",
              href: "/last-balcony",
              nodeId: "17",
              children: [],
            },
            {
              label: "_Ideas for Songs",
              href: "/ideas-for-songs",
              nodeId: "15",
              children: [],
            },
            {
              label: "_Transpositions",
              href: "/transpositions",
              nodeId: "14",
              children: [],
            },
            {
              label: "_01101101 01110101 01110011 01101001 01100011",
              href: "/digital-music",
              nodeId: "13",
              children: [],
            },
            {
              label: "_Music for Hawaii",
              href: "/music-for-hawaii",
              nodeId: "10",
              children: [],
            },
            {
              label: "_Music for Australia",
              href: "/music-for-australia",
              nodeId: "9",
              children: [],
            },
            {
              label: "_Music for Europe",
              href: "/music-for-europe",
              nodeId: "8",
              children: [],
            },
          ],
        },
        {
          id: "visual",
          label: "visual",
          href: "a",
          nodeId: "4",
          children: [
            {
              label: "_Hello My Friends",
              href: "/hello-my-friends",
              nodeId: "22",
              children: [],
            },
            {
              label: "_The Many Deaths of Vincent Thomas",
              href: "/vincent-thomas",
              nodeId: "18",
              children: [],
            },
            {
              label: "_Deconstructed Flag",
              href: "/deconstructed-flag",
              nodeId: "16",
              children: [],
            },
            {
              label: "_Graphic Balance",
              href: "/graphic-balance",
              nodeId: "12",
              children: [],
            },
            {
              label: "_Neuli",
              href: "/neuli",
              nodeId: "11",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "clients",
      label: "clients",
      href: "a",
      nodeId: "5",
      children: [
        {
          label: "_Apartamento",
          href: "/apartamento",
          nodeId: "29",
          children: [],
        },
        {
          label: "_Dior",
          href: "/dior",
          nodeId: "28",
          children: [],
        },
        {
          label: "_Manhattan Portage",
          href: "/manhattan-portage",
          nodeId: "27",
          children: [],
        },
        {
          label: "_MoMA",
          href: "/moma",
          nodeId: "26",
          children: [],
        },
        {
          label: "_Monster Children x Adidas",
          href: "/mc-adidas",
          nodeId: "25",
          children: [],
        },
        {
          label: "_New School ",
          href: "/new-school",
          nodeId: "24",
          children: [],
        },
        {
          label: "_New York Magazine ",
          href: "/ny-mag",
          nodeId: "23",
          children: [],
        },
      ],
    },
    {
      id: "about",
      label: "about",
      href: "/about",
      nodeId: "6",
      children: [],
    },
  ];

  return (
    <div>
      <DataTreeView treeDataList={treeDataList} />
    </div>
  );
}

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
  const [content, setContent] = useState("");
  const {
    className,
    classes,
    label,
    href,
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
      console.log(content);
      setContent(props.label.substring(1).replace(/\s/g, ""));
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

  href: PropTypes.string,
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
      id: "releases",
      label: "releases",
      //   href: "",
      nodeId: "1",
      children: [
        {
          id: "all",
          label: "all",
          //   href: "",
          nodeId: "3",
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
          //   href: "",
          nodeId: "4",
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
          //   href: "",
          nodeId: "5",
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
      //   href: "",
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

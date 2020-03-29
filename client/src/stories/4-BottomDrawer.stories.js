import React from "react";
import "../index.scss";
import "tachyons";
import BottomDrawer from "../components/BottomDrawer";

export default {
  title: "Bottom Drawer",
  component: BottomDrawer
};

export const DefaultMenu = () => (
  <BottomDrawer active={true} title="780 Comments" setActive={() => {}} />
);

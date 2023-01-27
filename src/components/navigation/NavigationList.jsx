import React from "react";


import List from "devextreme-react/list.js";
import { navigation, continents } from "./data.js";
import TreeView from "devextreme-react/tree-view";

export default function NavigationList() {
  function GroupTemplate(item) {
    return `${item.text}`;
  }
  const navigations = [
    {
      text: "Home",
      path: "/home",
      icon: "home",
    },
    {
      text: "Examples",
      icon: "folder",
      items: [
        {
          text: "Profile",
          path: "/profile",
        },
        {
          text: "Tasks",
          path: "/tasks",
        },
      ],
    },
  ];
  return (
    <div className="list" >
      <TreeView
        ref={null}
        items={navigations}
        keyExpr={"path"}
        selectionMode={"single"}
        focusStateEnabled={false}
        expandEvent={"click"}
        height={"92vh"}
        
        //className="panel-list dx-theme-accent-as-background-color"
      />
    </div>
  );
}

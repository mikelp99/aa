import Toolbar, { Item } from "devextreme-react/toolbar";
import { useState } from "react";
import NavigationList from "./NavigationList";
import Drawer from "devextreme-react/drawer";
import "./styles.css";
import { Popover } from "devextreme-react/popover";
export default function Navigation() {
  const [opened, setOpened] = useState(true);
  const [usuarioOpt, setUsuarioOpt] = useState(false);
  const openButtom = {
    icon: "menu",
    onClick: () => {
      setOpened(!opened);
    },
  };
  const closeButtom = {
    icon: "back",
    onClick: () => {
      setOpened(!opened);
    },
  };
  const renderLabel = () => {
    return (
      <>
        <div
          id="nombre"
          onClick={() => setUsuarioOpt(true)}
          className="toolbar-label"
        >
          mparra
        </div>
      </>
    );
  };
  const renderAvatar = () => {
    return (
      <>
        <div onClick={() => setUsuarioOpt(true)} className="avatar">
          M
        </div>
      </>
    );
  };

  return (
    <>
      <div className="toolBarMargin">
        <Toolbar>
          <Item
            location="before"
            widget="dxButton"
            options={opened === true ? closeButtom : openButtom}
          />
          <Item location="after" locateInMenu="auto" render={renderLabel} />
          <Item location="after" locateInMenu="auto" render={renderAvatar} />
        </Toolbar>
        <Popover
          target="#nombre"
          position="top"
          width={300}
          visible={usuarioOpt}
          onHiding={() => setUsuarioOpt(false)}
        >
          2012 Sales Report has to be completed so we can determine if major
          changes are required to sales strategy.
        </Popover>
      </div>

      <Drawer
        opened={opened}
        openedStateMode={"shrink"}
        position={"left"}
        revealMode={"expand"}
        component={NavigationList}
        minSize={35}
      >
        <div id="content" className="dx-theme-background-color">
          holaaaa
        </div>
      </Drawer>
    </>
  );
}

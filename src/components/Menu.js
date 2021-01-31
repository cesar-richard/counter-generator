import React from "react";
import { Button, Input, Icon, Menu } from "semantic-ui-react";

const NavMenu = ({ addCounter, clear, sortCounters }) => {
  const [name, setName] = React.useState("");

  return (
    <Menu attached="top">
      <Menu.Menu style={{ width: "100%" }}>
        <Input
          icon={
            <Icon
              name="plus"
              inverted
              circular
              link
              onClick={() => {
                addCounter(name);
                setName("");
              }}
            />
          }
          placeholder="Ajouter"
          onChange={(e, d) => setName(d.value)}
          style={{ width: "100%" }}
        />
        <Button
          content="Sort"
          labelPosition="left"
          icon="sort amount down"
          onClick={sortCounters}
        />
        <Button
          negative
          content="Clear"
          icon="trash"
          labelPosition="right"
          onClick={clear}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default NavMenu;

import React from "react";
import { Input, Icon, Menu, Segment } from "semantic-ui-react";
import CardList from "./CardList";
import uuid from "react-uuid";
import { Event } from "../Tracking";

const AddCounter = ({ children, onAddCard }) => {
  const [list, setList] = React.useState(
    localStorage.getItem("countersState")
      ? JSON.parse(localStorage.getItem("countersState"))
      : []
  );
  const [name, setName] = React.useState("");

  const addCard = () => {
    const newList = [{ name, uuid: uuid() }, ...list];
    setList(newList);
    setName("");
    localStorage.setItem("countersState", JSON.stringify(newList));
    Event("CARD", "Added card", "AddCounter");
  };
  const onCardDelete = uuid => {
    const newList = list.filter(x => x.uuid !== uuid);
    setList(newList);
    localStorage.setItem("countersState", JSON.stringify(newList));
    Event("CARD", "Removed card", "AddCounter");
  };

  return (
    <>
      <Menu attached="top">
        <Menu.Menu>
          <Input
            icon={<Icon name="plus" inverted circular link onClick={addCard} />}
            placeholder="Ajouter"
            onChange={(e, d) => setName(d.value)}
          />
        </Menu.Menu>
      </Menu>
      <Segment attached="bottom">
        <CardList list={list} onCardDelete={onCardDelete} />
      </Segment>
    </>
  );
};

export default AddCounter;

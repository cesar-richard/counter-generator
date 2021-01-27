import React from "react";
import { Input, Icon, Menu, Segment } from "semantic-ui-react";
import CardList from "./CardList";
import uuid from "react-uuid";

const AddCounter = ({ children, onAddCard }) => {
  const [list, setList] = React.useState([]);
  const [name, setName] = React.useState("");

  const addCard = () => {
    setList([{ name, uuid: uuid() }, ...list]);
    setName("");
  };
  const onCardDelete = uuid => {
    setList(list.filter(x => x.uuid !== uuid));
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

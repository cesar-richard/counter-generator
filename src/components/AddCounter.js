import React from "react";
import { Segment } from "semantic-ui-react";
import NavMenu from "./Menu";
import CardList from "./CardList";
import uuid from "react-uuid";
import { Event } from "../Tracking";

const AddCounter = ({ children, onAddCard }) => {
  const [list, setList] = React.useState(
    localStorage.getItem("countersState")
      ? JSON.parse(localStorage.getItem("countersState"))
      : []
  );

  const addCounter = name => {
    console.log(list);
    const newList = [{ name, uuid: uuid(), count: 0 }, ...list];
    localStorage.setItem("countersState", JSON.stringify(newList));
    setList(newList);
  };

  const sortCountersValues = () => {
    const newList = localStorage.getItem("countersState")
      ? JSON.parse(localStorage.getItem("countersState"))
      : [];
    newList.sort((a, b) => {
      return b.count - a.count;
    });
    localStorage.setItem("countersState", JSON.stringify(newList));
    setList(newList);
    Event("CARD", "Sorted cards", "AddCounter");
  };

  const sortCountersNames = () => {
    const newList = localStorage.getItem("countersState")
      ? JSON.parse(localStorage.getItem("countersState"))
      : [];
    newList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    console.log(newList);
    localStorage.setItem("countersState", JSON.stringify(newList));
    setList(newList);
    Event("CARD", "Sorted cards", "AddCounter");
  };

  const clear = () => {
    localStorage.setItem("countersState", []);
    setList([]);
    Event("CARD", "Clear", "AddCounter");
  };

  const onCardDelete = uuid => {
    const newList = list.filter(x => x.uuid !== uuid);
    setList(newList);
    localStorage.setItem("countersState", JSON.stringify(newList));
    Event("CARD", "Removed card", "AddCounter");
  };

  return (
    <>
      <NavMenu
        addCounter={addCounter}
        sortCountersValues={sortCountersValues}
        sortCountersNames={sortCountersNames}
        clear={clear}
      />
      <Segment attached="bottom">
        <CardList list={list} onCardDelete={onCardDelete} />
      </Segment>
    </>
  );
};

export default AddCounter;

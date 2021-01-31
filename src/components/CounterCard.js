import React from "react";
import { Button, Card, Icon, Label } from "semantic-ui-react";
import { Event } from "../Tracking";

const CounterCard = ({ uuid, name, onDelete }) => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    const newList = JSON.parse(localStorage.getItem("countersState"));
    newList.map(x => {
      if (x.uuid === uuid) x.count = count + 1;
      return x;
    });
    localStorage.setItem("countersState", JSON.stringify(newList));
    setCount(count + 1);
    Event("COUNTER", "Incremented value", "CounterCard");
    return;
  };
  const decrement = () => {
    if (count === 0) return;
    const newList = JSON.parse(localStorage.getItem("countersState"));
    newList.map(x => {
      if (x.uuid === uuid) x.count = count - 1;
      return x;
    });
    setCount(count - 1);
    Event("COUNTER", "Decremented value", "CounterCard");
    return;
  };
  return (
    <Card>
      <Card.Content>
        <Card.Header style={{ textAlign: "center" }}>
          {name}
          <Label.Group circular>
            <Label color="red" size="mini" as="a" onClick={onDelete}>
              Delete
              <Icon name="close" />
            </Label>
          </Label.Group>
        </Card.Header>
        <Card.Meta style={{ textAlign: "center" }}></Card.Meta>
        <Card.Description style={{ textAlign: "center", fontSize: "xx-large" }}>
          {count}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button negative onClick={decrement}>
            Remove
          </Button>
          <Button.Or text="or" />
          <Button positive onClick={increment}>
            Add
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default CounterCard;

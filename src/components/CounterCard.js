import React from "react";
import { Button, Card, Icon, Label } from "semantic-ui-react";

const CounterCard = ({ name, onDelete }) => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
    return;
  };
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
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

import React from "react";
import CounterCard from "./CounterCard";
import { Container, CardGroup } from "semantic-ui-react";

function CardList({ list, onCardDelete }) {
  return (
    <Container fluid style={{ padding: "15px" }}>
      <CardGroup>
        {list.map(x => {
          return (
            <CounterCard
              key={x.uuid}
              uuid={x.uuid}
              name={x.name}
              onDelete={() => {
                onCardDelete(x.uuid);
              }}
            />
          );
        })}
      </CardGroup>
    </Container>
  );
}

export default CardList;

import React from "react";
import AddCounter from "./components/AddCounter";
import packageInfos from "../package.json";
import { Container, Segment, List } from "semantic-ui-react";
import { PageView, initGA } from "./Tracking";
import "./App.css";

function App() {
  React.useEffect(() => {
    initGA("G-ZM3S5P9M1T");
    PageView();
  });
  return (
    <div
      style={{ minHeight: "100vh", flexDirection: "column", display: "flex" }}
    >
      <Container fluid style={{ padding: "15px", flex: 1 }}>
        <AddCounter style={{ height: "100%" }} />
      </Container>
      <Segment inverted vertical style={{ padding: "1em 0em" }}>
        <Container textAlign="center">
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              {packageInfos.name} - v{packageInfos.version}
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}

export default App;

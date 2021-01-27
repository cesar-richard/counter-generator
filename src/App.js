import React from "react";
import AddCounter from "./components/AddCounter";
import { Container } from "semantic-ui-react";
import { PageView, initGA } from "./Tracking";
import "./App.css";

function App() {
  React.useEffect(() => {
    initGA("G-ZM3S5P9M1T");
    PageView();
  });
  return (
    <Container fluid style={{ padding: "15px" }}>
      <AddCounter />
    </Container>
  );
}

export default App;

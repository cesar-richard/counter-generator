import AddCounter from "./components/AddCounter";
import { Container } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container fluid style={{ padding: "15px" }}>
      <AddCounter />
    </Container>
  );
}

export default App;

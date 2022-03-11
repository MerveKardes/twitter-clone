import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Widgets from "./layout/Widgets";
import Container from "./layout/Container";

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  );
};

export default App;

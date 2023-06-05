import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card/Card";
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Counter />
      <div style={{ display: "flex" }}>
        <Card
          name="Audi 1"
          image="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        />
        <Card
          name="Audi 2"
          image="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?cs=srgb&dl=pexels-yurii-hlei-1545743.jpg&fm=jpg"
        />
        <Card
          name="Audi 3"
          image="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        />
      </div>
    </div>
  );
}

export default App;

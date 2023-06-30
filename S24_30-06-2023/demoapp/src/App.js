import logo from "./logo.svg";
import "./App.css";
import Video from "./Assets/Videos/Video-1.mp4";

function App() {
  return (
    <div className="App">
      <div>
        <video controls muted autoPlay loop>
          <source src={Video} />
        </video>
      </div>
      <div style={{ position: "relative", top: "50px" }}>
        <h1>Geeks Shopping Mart</h1>
        <p style={{ padding: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo
          deserunt deleniti tempore laudantium animi error? Aut, sunt maiores
          nostrum recusandae qui, consequuntur illum ad aliquam, magnam vel
          magni odio.deserunt deleniti tempore laudantium animi error? Aut, sunt
          maiores nostrum recusandae qui, consequuntur
        </p>
        <button>Explore More</button>
      </div>
    </div>
  );
}

export default App;

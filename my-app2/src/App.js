import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function Avatar(props) {
  return (
    <div className="avatar">
      <p>Tên: {props.name}</p>
      <p>Tuổi : {props.tuoi}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Avatar name="Le Huu Thu" tuoi="24" />
          <Avatar name="Abcd" tuoi="24" />
        </div>
      </div>
    </div>
  );
}

export default App;

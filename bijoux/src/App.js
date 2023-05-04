import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Navbar from "./Components/pages/Main/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <Main /> */}
    </div>
  );
}

export default App;

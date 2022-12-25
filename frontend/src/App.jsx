import { useState } from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;

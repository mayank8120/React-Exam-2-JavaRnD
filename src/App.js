import React from "react";
import './App.css';
import Routes from "./Routes";

const sty = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
}
const App = () => {

  return (
    <div style={sty}>
      <Routes />
    </div>
  );
};

export default App;

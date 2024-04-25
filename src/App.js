import React from "react";
import ReactDOM from "react-dom/client";
import BigBoard from "./components/BigBoard/BigBoard";
import NavBar from "./components/NavBar/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <NavBar/>
      <BigBoard />
    </div>
  );
};

root.render(<App />);

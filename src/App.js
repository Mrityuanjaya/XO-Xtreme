import React from "react";
import ReactDOM from "react-dom/client";
import BigBoard from "./components/BigBoard/BigBoard";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <Header />
      <BigBoard />
    </div>
  );
};

root.render(<App />);

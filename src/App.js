import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./components/Board/Board";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Board />
    </>
  );
};

root.render(<App />);

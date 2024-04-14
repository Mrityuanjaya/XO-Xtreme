import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./components/Board/Board";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Board />
    </div>
  );
};

root.render(<App />);

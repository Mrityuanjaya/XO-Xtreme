import React from "react";
import ReactDOM from "react-dom/client";
import BigBoard from "./components/BigBoard/BigBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="flex items-center justify-center">
      <BigBoard />
    </div>
  );
};

root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <NavBar/>
      <HomePage />
    </div>
  );
};

root.render(<App />);

import React, { useState } from "react";
import BigBoard from "../../components/BigBoard/BigBoard";
import SideMenu from "../../components/SideMenu/SideMenu";

const HomePage = () => {
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const onXwin = () => {
    setXWins((prev) => prev + 1);
  };
  const onOwin = () => {
    setOWins((prev) => prev + 1);
  };

  return (
    <div className="flex flex-wrap h-[90vh] items-center justify-around">
      <BigBoard onXwin={onXwin} onOwin={onOwin} />
      <SideMenu xWins={xWins} oWins={oWins} />
    </div>
  );
};

export default HomePage;

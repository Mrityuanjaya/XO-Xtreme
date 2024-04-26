import React from "react";

const Scoreboard = (props) => {
  return (
    <div class="w-96">
      <table class="w-full border border-blue-500">
        <thead>
          <tr class="bg-blue-100">
            <th class="border-2 border-gray-300 px-4 py-2">Player 1</th>
            <th class="border-2 border-gray-300 px-4 py-2">Player 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-2 border-gray-300 px-4 py-2 text-center">{props.xWins}</td>
            <td class="border-2 border-gray-300 px-4 py-2 text-center">{props.oWins}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;

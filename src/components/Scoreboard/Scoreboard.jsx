import React from "react";

const Scoreboard = (props) => {
    return (
        <div className="w-72 md:w-96">
            <table className="w-full">
                <thead>
                    <tr className="bg-red-200">
                        <th className="border-2 border-gray-500 text-lg px-4 py-4">
                            Player 1 (X)
                        </th>
                        <th className="border-2 border-gray-500 text-lg px-4 py-4">
                            Player 2 (O)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-2 border-gray-500 text-xl px-4 py-2 text-center">
                            {props.xWins}
                        </td>
                        <td className="border-2 border-gray-500 text-xl px-4 py-2 text-center">
                            {props.oWins}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Scoreboard;

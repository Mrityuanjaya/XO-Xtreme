export const RULES = [
    {
        heading: "What is XO-Xtreme?",
        content:
            "XO-Xtreme is an extended Tic-Tac-Toe game where we have Nine 3X3 boards where a Player can only make a move inside the Active Boards only. Whenever a Player wins a 3X3 board, it gets replaced with the winning symbol. The aim is to win three 3X3 boards in a row, column or diagonal.",
        cloudinaryUrl:
            "https://res.cloudinary.com/dbrsurqjw/image/upload/v1715197340/Board_ewtbef.svg",
    },
    {
        heading: "What is an Active Board?",
        content:
            "An Active Board is a board inside which the current player can move. An Active Board is highlighed with Blue color whereas the Inactive boards are in Gray color. Initally, all the boards are Active Boards.",
        cloudinaryUrl:
            "https://res.cloudinary.com/dbrsurqjw/image/upload/v1715197002/ActiveInactiveBoard_xqnzbf.svg",
    },
    {
        heading:
            "How to find out which board will become Active in the next move?",
        content:
            "Initally, all the boards are Active Boards. For every subsequent move, the next active board is determined by the position of the current move. If the current move is made in the top left cell of the active board, then the next active board will be the top-left one. Similarly, if the current move is made in the center cell, then the next active board will be the center board.",
        cloudinaryUrl:
            "https://res.cloudinary.com/dbrsurqjw/image/upload/v1715197341/NextActiveBoard_slyk2w.svg",
    },
    {
        heading:
            "What will happen if the next Active Board is full or already won?",
        content:
            "If the next Active Board is full or already won, the all the empty boards which have not been won will become active. Then the next player can move in any of those active boards.",
        cloudinaryUrl:
            "https://res.cloudinary.com/dbrsurqjw/image/upload/v1715197341/FilledWonBoard.drawio_m64as8.svg",
    },
    {
        heading: "How to win the game?",
        content:
            "In order to win the game, you must have atleast 3 winning boards in a row, column or diagonal.",
        cloudinaryUrl:
            "https://res.cloudinary.com/dbrsurqjw/image/upload/v1715197341/Winner_rdvzfz.svg",
    },
];

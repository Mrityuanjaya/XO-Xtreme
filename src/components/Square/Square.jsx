const Square = (props) => {
    return (
        <button
            className={`w-1/3 h-1/3 text-lg md:text-3xl font-bold border-2 md:border-4 ${
                props.isActive ? "border-blue-300" : "border-gray-300"
            }`}
            onClick={props.onSquareClick}
        >
            {props.value}
        </button>
    );
};
export default Square;

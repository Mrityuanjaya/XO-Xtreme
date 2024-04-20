const Square = (props) => {
  return (
    <button
      className="w-1/3 h-1/3 text-3xl font-bold border-4 border-gray-300"
      onClick={props.onSquareClick}
    >
      {props.value}
    </button>
  );
};
export default Square;

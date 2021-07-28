import Board from "./Board";

export default function Game() {

    function handleSquareClick(index: number) {
        alert(index)
    }

    return (
        <>
        <Board clickListener={() => handleSquareClick(9)}/>
        </>
    )
}
import React from "react"
import Square from "./Square"
import './Board.css'

interface BoardProps {
    boardClick: (index: number) => void
}

export default function Board({boardClick} : BoardProps) {

    return (
        <div>
            <p>Board</p>
            <div className="board">
                <div className="row">
                    <Square value="1" index={1} clickListener={boardClick}/>
                    <Square value="2" index={2} />
                    <Square value="3" index={3} />
                </div>

                <div className="row">
                    <Square value="4" index={4} />
                    <Square value="5" index={5}/>
                    <Square value="6" index={6}/>
                </div>

                <div className="row">
                    <Square value="7" index={7}/>
                    <Square value="8" index={8}/>
                    <Square value="9" index={9}/>
                </div>
            </div>
        </div>
    )
}
import './Square.css'

interface SquareProps {
    value: string,
    index: number,
    clickListener?: () => void
}

export default function Square({value, index, clickListener}: SquareProps) {

    return (
        <div>
            <button className="square">{ value }</button>
        </div>
    )
}
import './Board.css'

const Board = (props) =>{

    return(
        <div className={props.className}>{props.children}</div>
    )
    ;
}

export default Board;

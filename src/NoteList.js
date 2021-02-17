import react from "react";

function NoteList(props) {
    var {note} = props
    return (
        <div className="note-list-item" id={note.noteid} onClick={((e) => props.handleClick(e, note))} onMouseOver={((e) => props.handleMouseOver(e, note))} onMouseOut={((e) => props.handleMouseOut(e))}>
            <div>{note.title }</div>  
        </div>
    )
}

export default NoteList
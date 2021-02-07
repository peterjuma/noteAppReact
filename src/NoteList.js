import react from "react";

function NoteList(props) {
    return (
        <div className="note-list-item" id={props.note.noteid}>
            <span>{props.note.title }</span>  
        </div>
    )
}

export default NoteList
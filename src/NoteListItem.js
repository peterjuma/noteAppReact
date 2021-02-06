import react from "react";

function NoteListItem(props) {
    return (
        <div className="note-list-item" id={props.note.noteid}>
            <span>{props.note.title }</span>  
        </div>
    )
}

export default NoteListItem
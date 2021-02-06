import react, { useState } from "react";
import NoteListItem from "./NoteListItem"

function NoteList(props){
    const noteListItems = props.notesData.map((note) => (
        <NoteListItem key={note.noteid} note={note} />
      ));
       return (
          <div className="note-list">
              {noteListItems}
          </div>
      )
}
export default NoteList
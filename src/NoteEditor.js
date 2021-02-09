import React from "react";

function NoteEditor(props) {
    var note = props.editNoteData;
  return (
      <div className="main-editor">
            <div className="title-header">
                <input name="title" type="text" id="notetitle" value={note.notetitle} placeholder="Title" autoComplete="off" onChange={((e) => props.handleEditNote(e, note))} />
            </div>
          <div className="md-editor-tools" id="mdtools">
              <button className="md-buttons" id="btnBold"><i className="fas fa-bold btn"></i></button>
              <button className="md-buttons" id="btnItalic"><i className="fas fa-italic btn"></i></button>
              <button className="md-buttons" id="btnHeading"><i className="fas fa-heading btn"></i></button>
              <button className="md-buttons" id="btnLink"><i className="fas fa-link btn"></i></button>
              <button className="md-buttons" id="btnOList"><i className="fas fa-list-ol btn"></i></button>
              <button className="md-buttons" id="btnUList"><i className="fas fa-list btn"></i></button>
              <button className="md-buttons" id="btnQuote"><i className="fas fa-quote-left btn"></i></button>
              <button className="md-buttons" id="btnImage"><i className="far fa-image fa-lg btn"></i></button>
              <button className="md-buttons" id="btnCode"><i className="fas fa-terminal btn"></i></button>
              <button className="md-buttons" id="btnCodeBlock"><i className="fas fa-code btn"></i></button>
              <button className="md-buttons" id="btnTask"><i className="fas fa-check-square btn"></i></button>
              <button className="md-buttons" id="btnTable"><i className="fas fa-table btn"></i></button>
              <button className="md-buttons" id="btnStrike"><i className="fas fa-strikethrough btn"></i></button>
              <button className="md-buttons" id="previewBtn"><i className="fas fa-eye btn"></i></button>
              <button className="md-buttons" id="splitScreen"><i className="fas fa-columns btn"></i></button>
              <div className="">
                    <button className="md-buttons"><i className="fas fa-window-close btn"></i></button>
                    <button className="md-buttons" id="splitScreen"><i className="fas fa-save btn"></i></button>
                </div>
          </div>
          <div className="md-txtarea">
              <textarea placeholder="Note" id="notebody" value={note.notebody} onChange={((e) => props.handleEditNote(e, note))} />
          </div> 
      </div>
  )
}

export default NoteEditor;



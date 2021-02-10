import React from "react";

function NoteEditor(props) {
    var note = props.editNoteData;
    console.log(note);
    return (
        <div className="main-editor">
            <div className="title-header">
                <input name="title" type="text" id="notetitle" value={note.notetitle} placeholder="Title" autoComplete="off" onChange={((e) => props.handleEditNote(e, note))} />
            </div>
            <div className="md-editor-tools" id="mdtools">
                <i className="fas fa-bold btn"></i>
                <i className="fas fa-italic btn"></i>
                <i className="fas fa-heading btn"></i>
                <i className="fas fa-link btn"></i>
                <i className="fas fa-list-ol btn"></i>
                <i className="fas fa-list btn"></i>
                <i className="fas fa-quote-left btn"></i>
                <i className="far fa-image fa-lg btn"></i>
                <i className="fas fa-terminal btn"></i>
                <i className="fas fa-code btn"></i>
                <i className="fas fa-check-square btn"></i>
                <i className="fas fa-table btn"></i>
                <i className="fas fa-strikethrough btn"></i>
                <i className="fas fa-eye btn"></i>
                <i className="fas fa-columns btn"></i>
                <div className="">
                    <i className="fas fa-window-close btn"></i>
                    <i className="fas fa-save btn" onClick={((e) => props.handleSaveNote(e, note))} data-action={note.action}></i>
                </div>
            </div>
            <div className="md-txtarea">
                <textarea placeholder="Note" id="notebody" value={note.notebody} onChange={((e) => props.handleEditNote(e, note))} />
            </div> 
        </div>
    )
}

export default NoteEditor;



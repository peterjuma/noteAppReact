import "./styles.css";
import "./github.css";
import React, { Component } from "react";
import NavbarSidebar from "./NavbarSidebar"
import NavbarMain from "./NavbarMain"
import NoteList from "./NoteList"
import NoteMain from "./NoteMain"
import readmePath from './README.md'
import NoteEditor from "./NoteEditor"
import notesData from "./LoremNotesum"

// Load First Note
if (notesData.length > 0) {
  var noteid = notesData[0].noteid
  var title = notesData[0].title
  var body = notesData[0].body
}



class App extends Component {
    constructor() {
        super();
        this.state = {
          noteid: noteid || '',
          notetitle: title || '',
          notebody: body || '',
          activepage: "viewnote", // editnote // previewnote // viewnote 
          action:'', // addnote // updatenote
          allnotes: notesData
        };
        this.handleNoteListItemClick = this.handleNoteListItemClick.bind(this)
        this.handleClickHomeBtn = this.handleClickHomeBtn.bind(this)
        this.handleNoteListItemMouseOver = this.handleNoteListItemMouseOver.bind(this)
        this.handleEditNote = this.handleEditNote.bind(this)
        this.handleSaveNote = this.handleSaveNote.bind(this)
      }
      componentDidMount() {
        if(notesData.length == 0){      
          this.handleClickHomeBtn()
        }
      }

      // Handle Click List Item
      handleNoteListItemClick = (e, note) => {
        this.setState(
            { 
              noteid: note.noteid,
              notetitle: note.title,
              notebody: note.body,
              activepage: "viewnote",
              action:''
            }
          )
        // Toggle note-clikced class 
        var noteList = document.querySelectorAll(".note-list-item-clicked");
        noteList.length > 0 ? noteList.forEach(b => b.classList.remove('note-list-item-clicked')) : ""
        document.getElementById(note.noteid).classList.add('note-list-item-clicked');
      }

      // Handle Mouse Hover on List item
      handleNoteListItemMouseOver = (e, note) => {
        var noteList = document.querySelectorAll(".note-list-item-hover");
        noteList.length > 0 ? noteList.forEach(b => b.classList.remove('note-list-item-hover')) : ""
        document.getElementById(note.noteid).classList.add('note-list-item-hover');
      }
      handleNoteListItemMouseOut = () => {
        var noteList = document.querySelectorAll(".note-list-item-hover");
        noteList.length > 0 ? noteList.forEach(b => b.classList.remove('note-list-item-hover')) : ""
      }

      // Handle click home button 
      handleClickHomeBtn = (e) => {
        fetch(readmePath)
        .then(response => {
            return response.text()
        })
        .then(readmetext => {
            var readmetitle = readmetext.split('\n', 1)[0];
            var body = readmetext.split('\n');
            body.splice(0,1);
            var readmebody = body.join('\n');
            this.setState(
              { 
                noteid: '00000000',
                notetitle: readmetitle,
                notebody: readmebody,
                activepage: "viewnote",
                action:''
              }
          )
        })
      }

      handleEditNote = (e, note) => {
        this.setState(
          {
            noteid: note.noteid,
            notetitle: e.target.id === "notetitle" ? e.target.value : note.notetitle,
            notebody: e.target.id === "notebody" ? e.target.value : note.notebody,
            activepage: "editnote",
            action: e.target.dataset.action
          }
        )
      }

      handleSaveNote(e, note) {
        console.log(e.target.dataset);
        this.setState((prevState) => {
          const updatedNotes = prevState.allnotes.map((noteitem) => {
              if (noteitem.noteid === note.noteid) {
                  noteitem.title = document.getElementById('notetitle').value
                  noteitem.body = document.getElementById('notebody').value
                  noteitem.activepage = "viewnote"
                  noteitem.action = e.target.dataset.action
                  console.log(noteitem);
              }
              return noteitem;
          });
          return {
            allnotes: updatedNotes
          };
        });
        // console.log(this.state.allnotes);

        this.setState(
          { 
          noteid: note.noteid,
          notetitle: document.getElementById('notetitle').value,
          notebody: document.getElementById('notebody').value,
          activepage: "viewnote",
          action: note.action
        })

      }

      render() {
        const noteListItems = this.state.allnotes.map((note) => (
          <NoteList key={note.noteid} note={note} handleClick={this.handleNoteListItemClick} 
          handleMouseOver={this.handleNoteListItemMouseOver} handleMouseOut={this.handleNoteListItemMouseOut}/>
        ));

        let ActivePage, RightNavbar;
        if(this.state.activepage === "viewnote"){
          RightNavbar = <NavbarMain display={true} notesData={this.state} handleEditNote={this.handleEditNote}/>
          ActivePage = <NoteMain notesData={this.state}/>
        } 
        if (this.state.activepage === "editnote"){
          RightNavbar = <NavbarMain display={false}/>
          ActivePage = <NoteEditor editNoteData={this.state} handleEditNote={this.handleEditNote} handleSaveNote={this.handleSaveNote}/>
        }   

        return (
          <div className="container">
              <div className="left">   
                  <NavbarSidebar handleClickHomeBtn={this.handleClickHomeBtn} handleEditNote={this.handleEditNote}/>
                  <div className="note-list">
                      {noteListItems}
                  </div>
              </div>
              <div className="right">
                  {RightNavbar}
                  {ActivePage}
              </div>
          </div>
        );
      }
}

export default App;
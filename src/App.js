import "./styles.css";
import "./github.css";
import React, { Component } from "react";
import NavbarLeft from "./NavbarLeft"
import NavbarRight from "./NavbarRight"
import NoteList from "./NoteList"
import NoteMain from "./NoteMain"
import readmePath from './README.md'
import NoteEditor from "./NoteEditor"

// Generate random notes data 
import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 7,
      min: 3
    },
    wordsPerSentence: {
      max: 8,
      min: 4
    }
  });

var rand = Math.floor(Math.random() * 10);
const titleCase = (phrase) => {
  return phrase[0].toUpperCase() + phrase.substring(1);
};

var note = {};
const notesData = [];
for (var i = 0; i < 15; i++) {
    note = {
        noteid: Math.random().toString(16).slice(2),
        title: titleCase(lorem.generateWords(rand)),
        body: lorem.generateParagraphs(rand),
        created_at: Math.round(Date.now()).toString(),
        updated_at: ""
      };
      notesData.push(note);
}
// End of Lorem Ipsum Note

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
          activepage: "viewnote" // editnote // previewnote // viewnote
        };
        this.handleNoteListItemClick = this.handleNoteListItemClick.bind(this)
        this.handleClickHomeBtn = this.handleClickHomeBtn.bind(this)
        this.handleNoteListItemMouseOver = this.handleNoteListItemMouseOver.bind(this)
        this.handleClickEditNote = this.handleClickEditNote.bind(this)
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
              activepage: "viewnote" 
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
                activepage: "viewnote"
              }
          )
        })
      }


      handleClickEditNote = (note) => {
        console.log(note);
        this.setState(
          { 
            noteid: note.noteid,
            notetitle: note.notetitle,
            notebody: note.notebody,
            activepage: "editnote"
          }
        )
      }

      render() {
        const noteListItems = notesData.map((note) => (
          <NoteList key={note.noteid} note={note} handleClick={this.handleNoteListItemClick} handleMouseOver={this.handleNoteListItemMouseOver} handleMouseOut={this.handleNoteListItemMouseOut}/>
        ));

        let ActivePage, RightNavbar;
        if(this.state.activepage === "viewnote"){
          RightNavbar = <NavbarRight display={true} notesData={this.state} handleClickEditNote={this.handleClickEditNote}/>
          ActivePage = <NoteMain notesData={this.state}/>
        } 
        if (this.state.activepage === "editnote"){
          RightNavbar = <NavbarRight display={false}/>
          ActivePage = <NoteEditor editNoteData={this.state}/>
        }   

        return (
          <div className="container">
              <div className="left">   
                  <NavbarLeft handleClickHomeBtn={this.handleClickHomeBtn}/>
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
import React, { Component } from "react";
import NavbarSidebar from "./NavbarSidebar"
import NavbarMain from "./NavbarMain"
import NoteList from "./NoteList"
import NoteMain from "./NoteMain"
import readmePath from './README.md'
import NoteEditor from "./NoteEditor"
import notesData from "./LoremNotesum"
import hljs from 'highlight.js';
import './github-markdown.css';
import keyCodes from "./KeyCodes"

// Markdown
import markdownitEmoji from "markdown-it-emoji";
import markdownitTaskLists from "markdown-it-task-lists";
import * as marked from "marked";
import MarkdownIt from "markdown-it";
import TurndownService from "turndown";
import * as turndownPluginGfm from "turndown-plugin-gfm";
// Turndown
var turndownService = new TurndownService()
var gfm = turndownPluginGfm.gfm
turndownService.use(gfm)
// Markdown-It & markdownitEmoji
var md = new MarkdownIt();
md.use(markdownitEmoji);
// Task List
md.use(markdownitTaskLists)

// Load First Note
if (notesData.length > 0) {
  var noteid = notesData[0].noteid
  var title = notesData[0].title
  var body = notesData[0].body
}

class App extends Component {
    constructor(props) {
        super(props);
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
        this.handleDeleteNote = this.handleDeleteNote.bind(this)
        this.handlePaste = this.handlePaste.bind(this)
        this.processInput = this.processInput.bind(this)
        this.handleKeyEvent = this.handleKeyEvent.bind(this)
        this.setSelectionRange = this.setSelectionRange.bind(this)
        this.handleSearchNotes = this.handleSearchNotes.bind(this)
        this.updateCodeSyntaxHighlighting();
      }
      componentDidMount() {
        if(notesData.length == 0){      
          this.handleClickHomeBtn()
        }
        this.updateCodeSyntaxHighlighting();
      }

      componentDidUpdate() {
        this.updateCodeSyntaxHighlighting();
      }
    
      updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
          hljs.highlightBlock(block);
        });
      };

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
        if(e.target.dataset.action==="addnote"){
          var noteList = document.querySelectorAll(".note-list-item-clicked");
          noteList.length > 0 ? noteList.forEach(b => b.classList.remove('note-list-item-clicked')) : ""
        }
      }

      handleDeleteNote(e, note){
        var index = this.state.allnotes.findIndex(noteitem => noteitem.noteid === note.noteid);
        this.setState((prevState) => {
          var updatedNotes = prevState.allnotes.filter((noteitem) => {
              if(noteitem.noteid !== note.noteid){
                return noteitem
              }
            }); 
            return { 
              noteid: this.state.allnotes[index].noteid,
              notetitle: this.state.allnotes[index].title,
              notebody: this.state.allnotes[index].body,
              activepage: "viewnote",
              action: '',
              allnotes: updatedNotes
              };
          });
          
          if(this.state.allnotes.length-1==0){
            this.handleClickHomeBtn()
          } else {
            var nextnote = this.state.allnotes[index+1]? this.state.allnotes[index+1] : this.state.allnotes[index-1]
            this.handleNoteListItemClick('', nextnote)
          }
          
      }

      handleSaveNote(e, note) {
          this.setState((prevState) => {
              const updatedNotes = prevState.allnotes.map((noteitem) => {
                  if (noteitem.noteid === note.noteid) {
                      noteitem.title = document.getElementById('notetitle').value
                      noteitem.body = document.getElementById('notebody').value
                      noteitem.activepage = "viewnote"
                  }
                  return noteitem;
              });
              return {
                noteid: note.noteid,
                notetitle: document.getElementById('notetitle').value,
                notebody: document.getElementById('notebody').value,
                activepage: "viewnote",
                action: note.action,
                allnotes: updatedNotes
              };
          });
          if(note.action == "addnote"){
            this.state.allnotes.push(
            { 
              noteid: note.noteid,
              notetitle: document.getElementById('notetitle').value,
              notebody: document.getElementById('notebody').value,
              activepage: "viewnote",
              action: note.action
            })
        }
      }
       
      handlePaste (e) {
        // Prevent the default action
        e.preventDefault();

        if(e.clipboardData) {
            // Get the copied text from the clipboard
            const text = (e.clipboardData)
                ? (e.originalEvent || e).clipboardData.getData('text/plain')
                // For IE
                : (window.clipboardData ? window.clipboardData.getData('Text') : '');

            // Get the copied text from the clipboard
            const html = (e.clipboardData)
                ? (e.originalEvent || e).clipboardData.getData('text/html')
                // For IE
                : (window.clipboardData ? window.clipboardData.getData('Html') : '');

            const pasteData = html ? turndownService.turndown(marked(html)) : text    

            if (document.queryCommandSupported('insertText')) {
                document.execCommand('insertText', false, pasteData);
            } else {
                // Insert text at the current position of caret
                const range = document.processInputection().getRangeAt(0);
                range.deleteContents();

                const textNode = document.createTextNode(pasteData);
                range.insertNode(textNode);
                range.selectNodeContents(textNode);
                range.collapse(false);

                const selection = window.processInputection();
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
      };

      handleKeyEvent(event) {
        if ( event.code === "Tab" ) {
            this.processInput('tab')
            event.preventDefault();
        } else if ( event.key === "\""){
            this.processInput('doublequote')
            event.preventDefault();
        } else if ( event.key === "\("){
            this.processInput('brackets')
            event.preventDefault();
        } else if ( event.key === "\{"){
            this.processInput('curlybrackets')
            event.preventDefault();
        } else if ( event.key === "\["){
            this.processInput('squarebrackets')
            event.preventDefault();
        } else if ( event.key === "\<"){
            this.processInput('anglebrackets')
            event.preventDefault();
        } else if ( event.key === "\`") {
            this.processInput('backquote')
            event.preventDefault();
        }
    }
    
    processInput(eventcode){
      // obtain the object reference for the textarea>
      var txtarea = document.getElementById("notebody");
      // obtain the index of the first selected character
      var start = txtarea.selectionStart;
      // obtain the index of the last selected character
      var finish = txtarea.selectionEnd;
      //obtain all Text
      var allText = txtarea.value; 
      // obtain the selected text
      var sel = allText.substring(start, finish);
      var img = `![alt text](${sel})`
      var link = `[link](${sel})`
      keyCodes["image"].pattern = img;
      keyCodes["link"].pattern = link;
      var keyCode = keyCodes[eventcode]
      if(keyCode.regEx){
          var transsel="";
          var match = /\r|\n/.exec(sel);
          if (match) {
              var lines = sel.split('\n');
              for(var i = 0;i < lines.length;i++){
                  if(lines[i].length > 0 && lines[i] !== undefined) {
                      transsel +=`${keyCode.pattern} ${lines[i]}\n`
                  }  
              }
              sel = transsel;
          } else {sel = sel.replace(/^/gm, `${keyCode.pattern} `)}
          var newText = `${allText.substring(0, start)}${sel}${allText.substring(finish, allText.length)}`
          if (newText){
              txtarea.value=newText;
              if(eventcode === "tab"){
                  this.setSelectionRange(txtarea, start+sel.length, start+sel.length)
              } else {
                  this.setSelectionRange(txtarea, start+keyCode.offsetStart, start+keyCode.offsetStart)
              }
          }
      } else {
          if(keyCode.pattern !== ""){
              if(eventcode == "image" || eventcode == "link") {
                  var newText = `${allText.substring(0, start)}${keyCode.pattern}${allText.substring(finish, allText.length)}`
              } else {
                  var newText = `${allText.substring(0, start)}${sel}${keyCode.pattern}${allText.substring(finish, allText.length)}`
              }
          } else {
              var newText = `${allText.substring(0, start)}${keyCode.open}${sel}${keyCode.close}${allText.substring(finish, allText.length)}`
          }
          if(newText) {
              txtarea.value=newText;
              this.setSelectionRange(txtarea, start+keyCode.offsetStart, finish+keyCode.offsetEnd)
          }
      }
    }

    setSelectionRange(input, selectionStart, selectionEnd) {
      if (input.setSelectionRange) {
        input.setSelectionRange(selectionStart, selectionEnd);
      }
      else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
      }
      input.blur();
      input.focus();
    }

    handleSearchNotes(e){
      var noteList = document.querySelectorAll('.note-list-item')
      var searchString = (e.target.value).toUpperCase()
      var DisplayList = []
      for (var i = 0; i < noteList.length; i++) {
        var title = noteList[i].innerText
        if (title.toUpperCase().indexOf(searchString) > -1) {
            noteList[i].style.display = "";
            DisplayList.push(noteList[i])
        } else {
            noteList[i].style.display = "none";
        }
      }
      DisplayList.length > 0 && DisplayList[0].click();
    }
      render() {
          const noteListItems = this.state.allnotes.map((note) => (
            <NoteList key={note.noteid} note={note} handleClick={this.handleNoteListItemClick} 
            handleMouseOver={this.handleNoteListItemMouseOver} handleMouseOut={this.handleNoteListItemMouseOut}/>
          ));

          let ActivePage, RightNavbar;
          if(this.state.activepage === "viewnote"){
            RightNavbar = <NavbarMain display={true} notesData={this.state} handleEditNote={this.handleEditNote} handleDeleteNote={this.handleDeleteNote}/>
            ActivePage = <NoteMain notesData={this.state}/>
          } 
          if (this.state.activepage === "editnote"){
            RightNavbar = <NavbarMain display={false}/>
            ActivePage = <NoteEditor editNoteData={this.state} handleEditNote={this.handleEditNote} handleSaveNote={this.handleSaveNote} handlePaste={this.handlePaste} handleKeyEvent={this.handleKeyEvent} processInput={this.processInput}/>
          }   

          return (
            <div className="container">
                <div className="left">   
                    <NavbarSidebar handleClickHomeBtn={this.handleClickHomeBtn} handleEditNote={this.handleEditNote} handleSearchNotes={this.handleSearchNotes}/>
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
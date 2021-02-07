import "./styles.css";
import "./github.css";
import React from "react";
import NavbarLeft from "./NavbarLeft"
import NavbarRight from "./NavbarRight"
import NoteList from "./NoteList"
import NoteMain from "./NoteMain"

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
var notesData = [];
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

export default function App() {

  const noteListItems = notesData.map((note) => (
    <NoteList key={note.noteid} note={note} />
  ));

  return (
    <div className="container">
        <div className="left">   
            <NavbarLeft />
            <div className="note-list">
                {noteListItems}
            </div>
        </div>
        <div className="right">
            <NavbarRight />
            <NoteMain notesData={notesData}/>
        </div>
    </div>
  );
}

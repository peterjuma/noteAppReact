import "./styles.css";
import "./github.css";
import React from "react";
import NavbarLeft from "./NavbarLeft"
import NavbarRight from "./NavbarRight"
import NoteList from "./NoteList"
import NoteMain from "./NoteMain"

export default function App() {
  return (
    <div className="container">
        <div className="left">   
            <NavbarLeft />
            <NoteList />
        </div>
            
        <div className="right">
            <NavbarRight />
            <NoteMain />
        </div>
        
    </div>
  );
}

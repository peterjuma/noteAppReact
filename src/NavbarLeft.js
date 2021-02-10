import react from "react";

function NavbarLeft(props) {
    // console.log(props.homeContent);
    var note = {
        noteid: Math.random().toString(16).slice(2),
        notetitle: '',
        notebody: '',
        activepage:"editnote"
    }
    return (
        <>
            <div className="nav-bar">
                <div className="nav-left-icon">
                    <button id="homeBtn"><i className="fa fa-home fa-lg btn" aria-hidden="true" onClick={((e) => props.handleClickHomeBtn(e))}></i></button>
                    <p>All Notes</p>
                    <button id="addNoteBtn" data-action="newnote" ><i className="fa fa-plus fa-lg btn" aria-hidden="true" onClick={((e) => props.handleEditNote(e, note))}></i></button>
                </div>
            </div>
            <div className="search-bar">
                <button className="searchButton"><i className="fa fa-search" aria-hidden="true"></i></button>
                <input type="search" placeholder="Search Notes" className="search-field" />
            </div>
        </>
    )
}

export default NavbarLeft
import react from "react";

function NavbarLeft() {
    return (
        <>
            <div className="nav-bar">
                <div className="nav-left-icon">
                    <button id="homeBtn" className="btn"><i className="fa fa-home fa-lg" aria-hidden="true"></i></button>
                    <p>All Notes</p>
                    <button id="addNoteBtn" className="btn"><i className="fa fa-plus fa-lg" aria-hidden="true"></i></button>
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
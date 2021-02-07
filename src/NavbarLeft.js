import react from "react";

function NavbarLeft(props) {
    // console.log(props.homeContent);
    return (
        <>
            <div className="nav-bar">
                <div className="nav-left-icon">
                    <button id="homeBtn"><i className="fa fa-home fa-lg btn" aria-hidden="true" onClick={((e) => props.handleClickHomeBtn(e))}></i></button>
                    <p>All Notes</p>
                    <button id="addNoteBtn"><i className="fa fa-plus fa-lg btn" aria-hidden="true"></i></button>
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
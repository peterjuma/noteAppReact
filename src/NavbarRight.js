import react from "react";


function NavbarRight(props) {
    console.log(props);  
    var isActive = props.display
    var note = props.notesData;
    return (
        <div className={isActive===true? "nav-bar":"hidden"}>
            <div className="nav-right-icon">
                <i className="fas fa-expand fa-lg btn" aria-hidden="true" style={{float: "left"}}></i>
                <i className="far fa-edit fa-lg btn" style={{float: "left"}} onClick={((event) => props.handleClickEditNote(note))}> </i>
                <i className="far fa-trash-alt fa-lg btn" aria-hidden="true" style={{float: "right"}}></i>
                <i className="far fa-copy fa-lg btn" style={{float: "right"}}></i>
                <i className="fas fa-download fa-lg btn" style={{float: "right"}}></i> 
            </div>
        </div> 
    )
}

export default NavbarRight
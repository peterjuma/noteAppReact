import react from "react";


function NavbarRight() {
    return (
        <div className="nav-bar">
            <div className="nav-right-icon">
                <i className="fas fa-expand fa-lg btn" aria-hidden="true" style={{float: "left"}}></i>
                <i className="far fa-edit fa-lg btn" style={{float: "left"}}> </i>
                <i className="far fa-trash-alt fa-lg btn" aria-hidden="true" style={{float: "right"}}></i>
                <i className="far fa-copy fa-lg btn" style={{float: "right"}}></i>
                <i className="fas fa-download fa-lg btn" style={{float: "right"}}></i> 
            </div>
        </div> 
    )
}

export default NavbarRight
import react from "react";

function NoteMain(props) {
    var jsonData = (JSON.stringify(props.notesData, null, 2)).replace(/\\n/g, '');
    console.log(jsonData);
    return (
        <div className="main">
            <pre className="preclass">
                    {jsonData}
            </pre>
        </div>
    )
}

export default NoteMain
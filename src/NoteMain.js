import react from "react";
import $ from "jquery";
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

function NoteMain(props) {
    // var jsonData = (JSON.stringify(props.notesData, null, 2)).replace(/\\n/g, '');
    var {notesData} = props
    return (
        <div className="main">
            <div className="page-header">
                <h1 dangerouslySetInnerHTML={{ __html: md.render(notesData.notetitle) }}></h1>
            </div>
            <div className="notebody" id="notebody" dangerouslySetInnerHTML={{ __html: md.render(notesData.notebody)}}>
            </div>
        </div>
    )
}

export default NoteMain
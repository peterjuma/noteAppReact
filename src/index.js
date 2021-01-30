import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import markdownitEmoji from "markdown-it-emoji";
import markdownitTaskLists from "markdown-it-task-lists";
import * as marked from "marked";
import MarkdownIt from "markdown-it";
import TurndownService from "turndown";
import * as turndownPluginGfm from "turndown-plugin-gfm";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/fontawesome-free-solid';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBeer, faCoffee, faWineGlassAlt, faStroopwafel, faAppleAlt, faCookie } from '@fortawesome/free-solid-svg-icons'
library.add(
  fab,
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faStroopwafel,
  faAppleAlt,
  faCookie
)
//Icons.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import App from "./App";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

// Turndown
var turndownService = new TurndownService()
var gfm = turndownPluginGfm.gfm
turndownService.use(gfm)

// Markdown-It & markdownitEmoji
var md = new MarkdownIt();
md.use(markdownitEmoji);

// Task List
md.use(markdownitTaskLists)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <h1>
      <FontAwesomeIcon icon={FontAwesome.faTrash} /><br></br>
      <FontAwesomeIcon icon={FontAwesome.faWindowClose} /><br></br>
      <FontAwesomeIcon icon={FontAwesome.faBars} /><br></br>
      <FontAwesomeIcon icon={FontAwesome.faCheck} className="far fa-sm"/><br></br>
      <h4><FontAwesomeIcon icon={faCoffee} className="fa fa-sm" /> This is Font Awesome Icon.</h4><br></br>
      <h4><FontAwesomeIcon icon={faCoffee} className="fa fa-2x" /> This is Font Awesome Large Icon.</h4><br></br>

      Beer <FontAwesomeIcon icon="beer" /><br></br>
      Coffee: <FontAwesomeIcon icon="coffee" /><br></br>
      Wine: <FontAwesomeIcon icon="wine-glass-alt" /><br></br>

      Stroopwafel: <FontAwesomeIcon icon="stroopwafel" /><br></br>
      Apple: <FontAwesomeIcon icon="apple-alt" /><br></br>
      Cookie: <FontAwesomeIcon icon="cookie" /><br></br>

      <ul class="fa-ul">
        <li><i class="fa-li fa fa-check-square"></i>List icons</li>
        <li><i class="fa-li fa fa-spinner fa-spin"></i>List icons</li>
        <li><i class="fa-li fa fa-square"></i>List icons</li>
      </ul>

      <i class="fa fa-spinner fa-spin"></i>
      <i class="fa fa-circle-o-notch fa-spin"></i>
      <i class="fa fa-refresh fa-spin"></i>
      <i class="fa fa-cog fa-spin"></i>
      <i class="fa fa-spinner fa-pulse"></i>

      <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div><br></br>
    </h1>
  </StrictMode>,
  rootElement
);

var html = "<h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit :)</h2>"
var mark = "# Prophet :)"

var markdown = turndownService.turndown(html)
const markdown2 = turndownService.turndown(marked(html));

var turnhtml = md.render(mark);

console.log(markdown);
console.log(markdown2);
console.log(turnhtml);
console.log(FontAwesome.faPhone);

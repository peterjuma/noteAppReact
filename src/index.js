import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import markdownitEmoji from "markdown-it-emoji";
import markdownitTaskLists from "markdown-it-task-lists";
import * as marked from "marked";
import MarkdownIt from "markdown-it";
import TurndownService from "turndown";
import * as turndownPluginGfm from "turndown-plugin-gfm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/fontawesome-free-solid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBeer, faCoffee, faWineGlassAlt, faStroopwafel, faAppleAlt, faCookie } from '@fortawesome/free-solid-svg-icons';
library.add(
  fab,
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faStroopwafel,
  faAppleAlt,
  faCookie
)

import App from "./App";
import "./styles.css";

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
  </StrictMode>,
  rootElement
);

var html = "<h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit :)</h2>";
var mark = "# Prophet :)";
var markdown = turndownService.turndown(html)
const markdown2 = turndownService.turndown(marked(html));
var turnhtml = md.render(mark);

console.log(markdown);
console.log(markdown2);
console.log(turnhtml);
console.log(FontAwesome.faPhone);

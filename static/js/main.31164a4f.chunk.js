(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{295:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),o=n(25),i=n.n(o),l=n(3),c=n.n(l),d=n(4);var r=function(e){var t={noteid:Math.random().toString(16).slice(2),notetitle:"",notebody:"",activepage:"",action:"addnote"};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"nav-bar",children:Object(a.jsxs)("div",{className:"nav-left-icon",children:[Object(a.jsx)("i",{id:"homeBtn",onClick:t=>e.handleClickHomeBtn(t),className:"fa fa-home fa-lg btn","aria-hidden":"true"}),Object(a.jsx)("h4",{children:"All Notes"}),Object(a.jsx)("i",{id:"addNoteBtn","data-action":"addnote",onClick:n=>e.handleEditNote(n,t),className:"fa fa-plus fa-lg btn","aria-hidden":"true"})]})}),Object(a.jsxs)("div",{className:"search-bar",children:[Object(a.jsx)("i",{className:"fa fa-search searchButton","aria-hidden":"true"}),Object(a.jsx)("input",{type:"search",placeholder:"Search Notes",className:"search-field",onChange:t=>e.handleSearchNotes(t)})]})]})};var h=function(e){var t=e.display,n=e.notesData;return Object(a.jsx)("div",{className:!0===t?"nav-bar":"hidden",children:Object(a.jsxs)("div",{className:"nav-right-icon",children:[Object(a.jsx)("i",{className:"far fa-edit fa-lg btn",id:"editbtn","data-action":"updatenote",style:{float:"left"},onClick:t=>e.handleEditNote(t,n),children:" "}),Object(a.jsx)("i",{className:"far fa-trash-alt fa-lg btn","aria-hidden":"true",style:{float:"right"},onClick:t=>e.handleDeleteNote(t,n)})]})})};var u=function(e){var t=e.note;return Object(a.jsx)("div",{className:"note-list-item",id:t.noteid,onClick:n=>e.handleClick(n,t),onMouseOver:n=>e.handleMouseOver(n,t),onMouseOut:t=>e.handleMouseOut(t),children:Object(a.jsx)("span",{children:t.title})})},f=(n(33),n(6)),p=n.n(f),b=n(7),m=n.n(b),g=n(15),v=n(8),x=n.n(v),j=n(9),N=n(10),E=new j.a,k=N.a;E.use(k);var y=new x.a;y.use(p.a),y.use(m.a);var O=function(e){var t=e.notesData;return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("div",{className:"page-header",children:Object(a.jsx)("h2",{id:"notetitle-view",children:t.notetitle})}),Object(a.jsx)("div",{className:"markdown-body",id:"notebody-view",dangerouslySetInnerHTML:{__html:y.render(t.notebody)}})]})},S=n.p+"static/media/README.7753bf41.md";var I=function(e){var t=e.editNoteData;return Object(a.jsxs)("div",{className:"main-editor",children:[Object(a.jsx)("div",{className:"title-header",children:Object(a.jsx)("input",{name:"title",type:"text",id:"notetitle","data-action":t.action,value:t.notetitle,placeholder:"Title",autoComplete:"off",onChange:n=>e.handleEditNote(n,t)})}),Object(a.jsxs)("div",{className:"md-editor-tools",id:"mdtools",children:[Object(a.jsx)("i",{className:"fas fa-bold btn",onClick:t=>e.processInput("bold")}),Object(a.jsx)("i",{className:"fas fa-italic btn",onClick:t=>e.processInput("italic")}),Object(a.jsx)("i",{className:"fas fa-heading btn",onClick:t=>e.processInput("heading")}),Object(a.jsx)("i",{className:"fas fa-link btn",onClick:t=>e.processInput("link")}),Object(a.jsx)("i",{className:"fas fa-list-ol btn",onClick:t=>e.processInput("olist")}),Object(a.jsx)("i",{className:"fas fa-list btn",onClick:t=>e.processInput("ulist")}),Object(a.jsx)("i",{className:"fas fa-quote-left btn",onClick:t=>e.processInput("blockquote")}),Object(a.jsx)("i",{className:"far fa-image fa-lg btn",onClick:t=>e.processInput("image")}),Object(a.jsx)("i",{className:"fas fa-terminal btn",onClick:t=>e.processInput("backticks")}),Object(a.jsx)("i",{className:"fas fa-code btn",onClick:t=>e.processInput("codeblock")}),Object(a.jsx)("i",{className:"fas fa-check-square btn",onClick:t=>e.processInput("tasklist")}),Object(a.jsx)("i",{className:"fas fa-table btn",onClick:t=>e.processInput("table")}),Object(a.jsx)("i",{className:"fas fa-strikethrough btn",onClick:t=>e.processInput("strike")}),Object(a.jsxs)("div",{style:{float:"right"},children:[Object(a.jsx)("i",{className:"fas fa-window-close btn"}),Object(a.jsx)("i",{className:"fas fa-save btn",onClick:n=>e.handleSaveNote(n,t),"data-action":t.action})]})]}),Object(a.jsx)("div",{className:"md-txtarea",children:Object(a.jsx)("textarea",{placeholder:"Note",id:"notebody","data-action":t.action,value:t.notebody,onChange:n=>e.handleEditNote(n,t),onPaste:t=>e.handlePaste(t),onKeyDown:t=>e.handleKeyEvent(t)})})]})},C=n(26),D=n.n(C),w=(n(295),"\n```\n"),B={backticks:{open:"`",close:"`",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},doublequote:{open:'"',close:'"',pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},singlequote:{open:"'",close:"'",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},bold:{open:"**",close:"**",pattern:"",regEx:!1,offsetStart:2,offsetEnd:2},italic:{open:"_",close:"_",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},strike:{open:"~~",close:"~~",pattern:"",regEx:!1,offsetStart:2,offsetEnd:2},codeblock:{open:w,close:w,pattern:"",regEx:!1,offsetStart:5,offsetEnd:5},brackets:{open:"(",close:")",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},curlybrackets:{open:"{",close:"}",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},squarebrackets:{open:"[",close:"]",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},anglebrackets:{open:"<",close:">",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},link:{open:"",close:"",pattern:"",regEx:!1,offsetStart:7,offsetEnd:7},image:{open:"",close:"",pattern:"",regEx:!1,offsetStart:12,offsetEnd:12},table:{open:"",close:"",pattern:"\ncolumn1 | column2 | column3\n------- | ------- | -------\ncolumn1 | column2 | column3\ncolumn1 | column2 | column3\ncolumn1 | column2 | column3\n",regEx:!1,offsetStart:1,offsetEnd:1},hline:{open:"",close:"",pattern:"\n----",regEx:!1,offsetStart:"",offsetEnd:""},ulist:{open:"",close:"",pattern:"- ",regEx:!0,offsetStart:2,offsetEnd:2},olist:{open:"",close:"",pattern:"1. ",regEx:!0,offsetStart:3,offsetEnd:3},tasklist:{open:"",close:"",pattern:"- [ ]",regEx:!0,offsetStart:6,offsetEnd:6},heading:{open:"",close:"",pattern:"###",regEx:!0,offsetStart:2,offsetEnd:2},blockquote:{open:"",close:"",pattern:"> ",regEx:!0,offsetStart:2,offsetEnd:2},tab:{open:"",close:"",pattern:"\t",regEx:!0,offsetStart:"",offsetEnd:""}},L=n(5),q=new j.a,M=N.a;q.use(M);var H=new x.a;H.use(p.a),H.use(m.a);class R extends s.Component{constructor(e){super(e),this.updateCodeSyntaxHighlighting=()=>{document.querySelectorAll("pre code").forEach((e=>{D.a.highlightBlock(e)}))},this.handleNoteListItemClick=(e,t)=>{this.setState({noteid:t.noteid,notetitle:t.title,notebody:t.body,activepage:"viewnote",action:""});var n=document.querySelectorAll(".note-list-item-clicked");n.length>0&&n.forEach((e=>e.classList.remove("note-list-item-clicked"))),document.getElementById(t.noteid).classList.add("note-list-item-clicked")},this.handleNoteListItemMouseOver=(e,t)=>{var n=document.querySelectorAll(".note-list-item-hover");n.length>0&&n.forEach((e=>e.classList.remove("note-list-item-hover"))),document.getElementById(t.noteid).classList.add("note-list-item-hover")},this.handleNoteListItemMouseOut=()=>{var e=document.querySelectorAll(".note-list-item-hover");e.length>0&&e.forEach((e=>e.classList.remove("note-list-item-hover")))},this.handleClickHomeBtn=e=>{fetch(S).then((e=>e.text())).then((e=>{var t=e.split("\n",1)[0],n=e.split("\n");n.splice(0,1);var a=n.join("\n");this.setState({noteid:"00000000",notetitle:t,notebody:a,activepage:"viewnote",action:""})}))},this.handleEditNote=(e,t)=>{if(this.setState({noteid:t.noteid,notetitle:"notetitle"===e.target.id?e.target.value:t.notetitle,notebody:"notebody"===e.target.id?e.target.value:t.notebody,activepage:"editnote",action:e.target.dataset.action}),"addnote"===e.target.dataset.action){var n=document.querySelectorAll(".note-list-item-clicked");n.length>0&&n.forEach((e=>e.classList.remove("note-list-item-clicked")))}},this.state={noteid:"",notetitle:"",notebody:"",activepage:"viewnote",action:"",allnotes:[]},this.handleNoteListItemClick=this.handleNoteListItemClick.bind(this),this.handleClickHomeBtn=this.handleClickHomeBtn.bind(this),this.handleNoteListItemMouseOver=this.handleNoteListItemMouseOver.bind(this),this.handleEditNote=this.handleEditNote.bind(this),this.handleSaveNote=this.handleSaveNote.bind(this),this.handleDeleteNote=this.handleDeleteNote.bind(this),this.handlePaste=this.handlePaste.bind(this),this.processInput=this.processInput.bind(this),this.handleKeyEvent=this.handleKeyEvent.bind(this),this.setSelectionRange=this.setSelectionRange.bind(this),this.handleSearchNotes=this.handleSearchNotes.bind(this),this.handleIndexedDB=this.handleIndexedDB.bind(this),this.updateCodeSyntaxHighlighting()}componentDidMount(){var e=this;return Object(d.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleIndexedDB("getall");case 2:0==(n=t.sent).length?e.handleClickHomeBtn():e.setState({noteid:n[0].noteid||"",notetitle:n[0].title||"",notebody:n[0].body||"",allnotes:n}),e.updateCodeSyntaxHighlighting();case 5:case"end":return t.stop()}}),t)})))()}componentDidUpdate(){this.updateCodeSyntaxHighlighting()}handleIndexedDB(e="",t=""){return Object(d.a)(c.a.mark((function n(){var a,s,o,i,l,d;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(L.a)("Notes",1,{upgrade(e){(a=e.createObjectStore("notesdb",{keyPath:"noteid",autoIncrement:!0})).createIndex("created_at","date"),a.createIndex("noteid","noteid")}});case 2:if(s=n.sent,"addnote"!==e){n.next=6;break}return n.next=6,s.add("notesdb",t);case 6:if("getall"!==e){n.next=11;break}return n.next=9,s.getAll("notesdb");case 9:return o=n.sent,n.abrupt("return",o);case 11:if("getone"!==e){n.next=21;break}return n.next=14,Object(L.a)("Notes",1);case 14:return s=n.sent,i=s.transaction("notesdb"),l=i.store.index("noteid"),n.next=19,l.get(t);case 19:return d=n.sent,n.abrupt("return",d);case 21:if("update"!==e){n.next=26;break}return n.next=24,Object(L.a)("Notes",1);case 24:(s=n.sent).put("notesdb",t);case 26:if("delete"!==e){n.next=31;break}return n.next=29,Object(L.a)("Notes",1);case 29:(s=n.sent).delete("notesdb",t.noteid);case 31:s.close();case 32:case"end":return n.stop()}}),n)})))()}handleDeleteNote(e,t){var n=this.state.allnotes.findIndex((e=>e.noteid===t.noteid));if(this.setState((e=>({allnotes:e.allnotes.filter((e=>{if(e.noteid!==t.noteid)return e}))}))),this.handleIndexedDB("delete",t),this.state.allnotes.length-1==0)this.handleClickHomeBtn();else{var a=this.state.allnotes[n+1]?this.state.allnotes[n+1]:this.state.allnotes[n-1];this.handleNoteListItemClick("",a)}}handleSaveNote(e,t){this.setState((e=>{const n=e.allnotes.map((e=>(e.noteid===t.noteid&&(e.title=document.getElementById("notetitle").value,e.body=document.getElementById("notebody").value,e.activepage="viewnote"),e)));return{noteid:t.noteid,notetitle:document.getElementById("notetitle").value,notebody:document.getElementById("notebody").value,activepage:"viewnote",action:t.action,allnotes:n}})),"addnote"==t.action&&(this.state.allnotes.push({noteid:t.noteid,notetitle:document.getElementById("notetitle").value,notebody:document.getElementById("notebody").value,activepage:"viewnote",action:t.action}),this.handleIndexedDB("addnote",{noteid:t.noteid,title:document.getElementById("notetitle").value,body:document.getElementById("notebody").value,created_at:Date.now(),updated_at:""})),this.handleIndexedDB("update",{noteid:t.noteid,title:document.getElementById("notetitle").value,body:document.getElementById("notebody").value,updated_at:Date.now()})}handlePaste(e){if(e.preventDefault(),e.clipboardData){const t=e.clipboardData?(e.originalEvent||e).clipboardData.getData("text/plain"):window.clipboardData?window.clipboardData.getData("Text"):"",n=e.clipboardData?(e.originalEvent||e).clipboardData.getData("text/html"):window.clipboardData?window.clipboardData.getData("Html"):"";let a;if(a=n?q.turndown(n):/<[a-z][\s\S]*>/i.test(t)?q.turndown(g(t)):t,document.queryCommandSupported("insertText"))document.execCommand("insertText",!1,a);else{const e=document.processInputection().getRangeAt(0);e.deleteContents();const t=document.createTextNode(a);e.insertNode(t),e.selectNodeContents(t),e.collapse(!1);const n=window.processInputection();n.removeAllRanges(),n.addRange(e)}}}handleKeyEvent(e){"Tab"===e.code?(this.processInput("tab"),e.preventDefault()):'"'===e.key?(this.processInput("doublequote"),e.preventDefault()):"("===e.key?(this.processInput("brackets"),e.preventDefault()):"{"===e.key?(this.processInput("curlybrackets"),e.preventDefault()):"["===e.key?(this.processInput("squarebrackets"),e.preventDefault()):"<"===e.key?(this.processInput("anglebrackets"),e.preventDefault()):"`"===e.key&&(this.processInput("backquote"),e.preventDefault())}processInput(e){var t=document.getElementById("notebody"),n=t.selectionStart,a=t.selectionEnd,s=t.value,o=s.substring(n,a),i="![alt text](".concat(o,")"),l="[link](".concat(o,")");B.image.pattern=i,B.link.pattern=l;var c=B[e];if(c.regEx){var d="";if(/\r|\n/.exec(o)){for(var r=o.split("\n"),h=0;h<r.length;h++)r[h].length>0&&void 0!==r[h]&&(d+="".concat(c.pattern," ").concat(r[h],"\n"));o=d}else o=o.replace(/^/gm,"".concat(c.pattern," "));(u="".concat(s.substring(0,n)).concat(o).concat(s.substring(a,s.length)))&&(t.value=u,"tab"===e?this.setSelectionRange(t,n+o.length,n+o.length):this.setSelectionRange(t,n+c.offsetStart,n+c.offsetStart))}else{if(""!==c.pattern)if("image"==e||"link"==e)var u="".concat(s.substring(0,n)).concat(c.pattern).concat(s.substring(a,s.length));else u="".concat(s.substring(0,n)).concat(o).concat(c.pattern).concat(s.substring(a,s.length));else u="".concat(s.substring(0,n)).concat(c.open).concat(o).concat(c.close).concat(s.substring(a,s.length));u&&(t.value=u,this.setSelectionRange(t,n+c.offsetStart,a+c.offsetEnd))}}setSelectionRange(e,t,n){if(e.setSelectionRange)e.setSelectionRange(t,n);else if(e.createTextRange){var a=e.createTextRange();a.collapse(!0),a.moveEnd("character",n),a.moveStart("character",t),a.select()}e.blur(),e.focus()}handleSearchNotes(e){for(var t=document.querySelectorAll(".note-list-item"),n=e.target.value.toUpperCase(),a=[],s=0;s<t.length;s++){t[s].innerText.toUpperCase().indexOf(n)>-1?(t[s].style.display="",a.push(t[s])):t[s].style.display="none"}a.length>0&&a[0].click()}render(){const e=this.state.allnotes.map((e=>Object(a.jsx)(u,{note:e,handleClick:this.handleNoteListItemClick,handleMouseOver:this.handleNoteListItemMouseOver,handleMouseOut:this.handleNoteListItemMouseOut},e.noteid)));let t,n;return"viewnote"===this.state.activepage&&(n=Object(a.jsx)(h,{display:!0,notesData:this.state,handleEditNote:this.handleEditNote,handleDeleteNote:this.handleDeleteNote}),t=Object(a.jsx)(O,{notesData:this.state})),"editnote"===this.state.activepage&&(n=Object(a.jsx)(h,{display:!1}),t=Object(a.jsx)(I,{editNoteData:this.state,handleEditNote:this.handleEditNote,handleSaveNote:this.handleSaveNote,handlePaste:this.handlePaste,handleKeyEvent:this.handleKeyEvent,processInput:this.processInput})),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)(r,{handleClickHomeBtn:this.handleClickHomeBtn,handleEditNote:this.handleEditNote,handleSearchNotes:this.handleSearchNotes}),Object(a.jsx)("div",{className:"note-list",children:e})]}),Object(a.jsxs)("div",{className:"right",children:[n,t]})]})}}var A=R;n(296);const T=document.getElementById("root");i.a.render(Object(a.jsx)(s.StrictMode,{children:Object(a.jsx)(A,{})}),T)},96:function(e,t){}},[[297,1,2]]]);
//# sourceMappingURL=main.31164a4f.chunk.js.map
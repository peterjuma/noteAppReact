(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{295:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(2),s=n(25),i=n.n(s),l=n(3),c=n.n(l),d=n(4);var r=function(e){var t={noteid:Math.random().toString(16).slice(2),notetitle:"",notebody:"",activepage:"",action:"addnote"};return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"nav-bar-left nav-bar",children:Object(a.jsxs)("div",{className:"nav-left-icon",children:[Object(a.jsx)("i",{id:"homeBtn",onClick:t=>e.handleClickHomeBtn(t),className:"fa fa-home fa-lg btn","aria-hidden":"true"}),Object(a.jsx)("h4",{children:"All Notes"}),Object(a.jsx)("i",{id:"addNoteBtn","data-action":"addnote",onClick:n=>e.handleEditNote(n,t),className:"fa fa-plus fa-lg btn","aria-hidden":"true"})]})}),Object(a.jsxs)("div",{className:"search-bar",children:[Object(a.jsx)("i",{className:"fa fa-search searchButton","aria-hidden":"true"}),Object(a.jsx)("input",{type:"search",placeholder:"Search Notes",className:"search-field",onChange:t=>e.handleSearchNotes(t)})]})]})};var h=function(e){return Object(a.jsx)("div",{className:"sort-order-selector",children:Object(a.jsxs)("label",{children:["Sort by:",Object(a.jsxs)("select",{id:"sort-selection",defaultValue:"<option> Choose here</option>",onChange:t=>e.handleSortNotes(),children:[Object(a.jsx)("option",{children:" Choose here"}),Object(a.jsx)("option",{value:"3",children:"Created: Oldest"}),Object(a.jsx)("option",{value:"2",children:"Created: Newest"}),Object(a.jsx)("option",{value:"0",children:"Title: A-Z"}),Object(a.jsx)("option",{value:"1",children:"Title: Z-A"}),Object(a.jsx)("option",{value:"4",children:"Modified: Newest"}),Object(a.jsx)("option",{value:"5",children:"Modified: Oldest"})]})]})})};var u=function(e){var t=e.display,n=e.notesData;return Object(a.jsx)("div",{className:!0===t?"nav-bar":"hidden",children:Object(a.jsxs)("div",{className:"nav-right-icon",children:[Object(a.jsx)("i",{className:"far fa-copy fa-lg btn",id:"copyBtn",onClick:t=>e.handleCopyNote(t,n)}),Object(a.jsx)("i",{className:"far fa-edit fa-lg btn",id:"editbtn","data-action":"updatenote",onClick:t=>e.handleEditNote(t,n),children:" "}),Object(a.jsx)("i",{className:"far fa-trash-alt fa-lg btn","aria-hidden":"true",style:{float:"right"},onClick:t=>e.handleDeleteNote(t,n)}),Object(a.jsx)("i",{className:"far fa-arrow-alt-circle-down fa-lg btn","aria-hidden":"true",style:{float:"right"},onClick:t=>e.handleDownloadNote(t,n)})]})})};var p=function(e){var t=e.note,n="addnote"===t.action?"note-list-item note-list-item-clicked":"note-list-item";return Object(a.jsx)("li",{className:n,id:t.noteid,onClick:n=>e.handleClick(n,t),onMouseOver:n=>e.handleMouseOver(n,t),onMouseOut:t=>e.handleMouseOut(t),children:t.title})},f=(n(33),n(7)),b=n.n(f),m=n(8),g=n.n(m),v=n(5),x=n(9),j=n.n(x),y=n(10),N=n(11),k=new y.a,E=N.a;k.use(E);var C=new j.a;C.use(b.a),C.use(g.a);var O=function(e){var t=e.notesData;return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("div",{className:"page-header",children:Object(a.jsx)("h2",{id:"notetitle-view",children:t.notetitle})}),Object(a.jsx)("div",{className:"markdown-body",id:"notebody-view",dangerouslySetInnerHTML:{__html:C.render(t.notebody)},onCopy:t=>e.handleCopyEvent(t)})]})},S=n.p+"static/media/README.7753bf41.md";var I=function(e){var t=e.editNoteData;return Object(a.jsxs)("div",{className:"main-editor",children:[Object(a.jsx)("div",{className:"title-header",children:Object(a.jsx)("input",{name:"title",type:"text",id:"notetitle","data-action":t.action,value:t.notetitle,placeholder:"Title",autoComplete:"off",onChange:n=>e.handleEditNote(n,t)})}),Object(a.jsxs)("div",{className:"md-editor-tools",id:"mdtools",children:[Object(a.jsx)("i",{className:"fas fa-bold btn",onClick:t=>e.processInput("bold")}),Object(a.jsx)("i",{className:"fas fa-italic btn",onClick:t=>e.processInput("italic")}),Object(a.jsx)("i",{className:"fas fa-heading btn",onClick:t=>e.processInput("heading")}),Object(a.jsx)("i",{className:"fas fa-link btn",onClick:t=>e.processInput("link")}),Object(a.jsx)("i",{className:"fas fa-list-ol btn",onClick:t=>e.processInput("olist")}),Object(a.jsx)("i",{className:"fas fa-list btn",onClick:t=>e.processInput("ulist")}),Object(a.jsx)("i",{className:"fas fa-quote-left btn",onClick:t=>e.processInput("blockquote")}),Object(a.jsx)("i",{className:"far fa-image btn",onClick:t=>e.processInput("image")}),Object(a.jsx)("i",{className:"fas fa-terminal btn",onClick:t=>e.processInput("backticks")}),Object(a.jsx)("i",{className:"fas fa-code btn",onClick:t=>e.processInput("codeblock")}),Object(a.jsx)("i",{className:"far fa-check-square btn",onClick:t=>e.processInput("tasklist")}),Object(a.jsx)("i",{className:"fas fa-table btn",onClick:t=>e.processInput("table")}),Object(a.jsx)("i",{className:"fas fa-strikethrough btn",onClick:t=>e.processInput("strike")})]}),Object(a.jsx)("div",{className:"md-txtarea",children:Object(a.jsx)("textarea",{placeholder:"Note",id:"notebody","data-action":t.action,value:t.notebody,onChange:n=>e.handleEditNote(n,t),onPaste:t=>e.handlePaste(t),onKeyDown:t=>e.handleKeyEvent(t)})}),Object(a.jsx)("div",{className:"right-bottom-bar",children:Object(a.jsxs)("div",{className:"saveCancelBar",children:[Object(a.jsx)("i",{className:"far fa-save btn-save-cancel fa-2x",onClick:n=>e.handleSaveNote(n,t),"data-action":t.action}),Object(a.jsx)("i",{className:"far fa-window-close btn-save-cancel fa-2x",onClick:n=>e.handleCancel(n,t)})]})})]})},w=n(26),D=n.n(w),B=(n(295),"\n```\n"),M={backticks:{open:"`",close:"`",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},doublequote:{open:'"',close:'"',pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},singlequote:{open:"'",close:"'",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},bold:{open:"**",close:"**",pattern:"",regEx:!1,offsetStart:2,offsetEnd:2},italic:{open:"_",close:"_",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},strike:{open:"~~",close:"~~",pattern:"",regEx:!1,offsetStart:2,offsetEnd:2},codeblock:{open:B,close:B,pattern:"",regEx:!1,offsetStart:5,offsetEnd:5},brackets:{open:"(",close:")",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},curlybrackets:{open:"{",close:"}",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},squarebrackets:{open:"[",close:"]",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},anglebrackets:{open:"<",close:">",pattern:"",regEx:!1,offsetStart:1,offsetEnd:1},link:{open:"",close:"",pattern:"",regEx:!1,offsetStart:7,offsetEnd:7},image:{open:"",close:"",pattern:"",regEx:!1,offsetStart:12,offsetEnd:12},table:{open:"",close:"",pattern:"\ncolumn1 | column2 | column3\n------- | ------- | -------\ncolumn1 | column2 | column3\ncolumn1 | column2 | column3\ncolumn1 | column2 | column3\n",regEx:!1,offsetStart:1,offsetEnd:1},hline:{open:"",close:"",pattern:"\n----",regEx:!1,offsetStart:"",offsetEnd:""},ulist:{open:"",close:"",pattern:"- ",regEx:!0,offsetStart:2,offsetEnd:2},olist:{open:"",close:"",pattern:"1. ",regEx:!0,offsetStart:3,offsetEnd:3},tasklist:{open:"",close:"",pattern:"- [ ]",regEx:!0,offsetStart:6,offsetEnd:6},heading:{open:"",close:"",pattern:"###",regEx:!0,offsetStart:2,offsetEnd:2},blockquote:{open:"",close:"",pattern:"> ",regEx:!0,offsetStart:2,offsetEnd:2},tab:{open:"",close:"",pattern:"\t",regEx:!0,offsetStart:"",offsetEnd:""}},q=n(6),L=new y.a,_=N.a;L.use(_);var H=new j.a;H.use(b.a),H.use(g.a);class R extends o.Component{constructor(e){super(e),this.updateCodeSyntaxHighlighting=()=>{document.querySelectorAll("pre code").forEach((e=>{D.a.highlightBlock(e)}))},this.handleNoteListItemClick=(e,t)=>{this.setState({noteid:t.noteid,notetitle:t.title,notebody:t.body,activepage:"viewnote",action:""});var n=document.querySelectorAll(".note-list-item-clicked");n.length>0&&n.forEach((e=>e.classList.remove("note-list-item-clicked"))),document.getElementById(t.noteid).classList.add("note-list-item-clicked")},this.handleNoteListItemMouseOver=(e,t)=>{var n=document.querySelectorAll(".note-list-item-hover");n.length>0&&n.forEach((e=>e.classList.remove("note-list-item-hover"))),document.getElementById(t.noteid).classList.add("note-list-item-hover")},this.handleNoteListItemMouseOut=()=>{var e=document.querySelectorAll(".note-list-item-hover");e.length>0&&e.forEach((e=>e.classList.remove("note-list-item-hover")))},this.handleClickHomeBtn=e=>{fetch(S).then((e=>e.text())).then((e=>{var t=e.split("\n",1)[0],n=e.split("\n");n.splice(0,1);var a=n.join("\n");this.setState({noteid:"00000000",notetitle:t,notebody:a,activepage:"viewnote",action:"homepage"})}))},this.handleSortNotes=e=>{var t=[...this.state.allnotes],n=event?event.target.value:e;switch(n){case"0":t.sort((function(e,t){let n=e.title.toUpperCase(),a=t.title.toUpperCase();return n==a?0:n>a?1:-1}));break;case"1":t.sort((function(e,t){let n=e.title.toUpperCase(),a=t.title.toUpperCase();return n==a?0:n>a?-1:1}));break;case"2":t.sort(((e,t)=>t.created_at-e.created_at));break;case"3":t.sort(((e,t)=>e.created_at-t.created_at));break;case"4":t.sort(((e,t)=>t.updated_at-e.updated_at));break;case"5":t.sort(((e,t)=>e.updated_at-t.updated_at))}this.setState({sortby:n,allnotes:t}),document.getElementById(t[0].noteid).click()},this.handleCancel=(e,t)=>"updatenote"===t.action?document.getElementById(t.noteid).click():document.querySelectorAll(".note-list-item").length>0?document.querySelectorAll(".note-list-item")[0].click():this.handleClickHomeBtn(),this.handleEditNote=(e,t)=>{if(this.setState({noteid:t.noteid,notetitle:"notetitle"===e.target.id?e.target.value:t.notetitle,notebody:"notebody"===e.target.id?e.target.value:t.notebody,activepage:"editnote",action:e.target.dataset.action}),"addnote"===e.target.dataset.action){var n=document.querySelector(".note-list-item-clicked");n&&n.classList.remove("note-list-item-clicked")}},this.state={noteid:"",notetitle:"",notebody:"",activepage:"viewnote",action:"",sortby:"4",allnotes:[]},this.handleNoteListItemClick=this.handleNoteListItemClick.bind(this),this.handleClickHomeBtn=this.handleClickHomeBtn.bind(this),this.handleNoteListItemMouseOver=this.handleNoteListItemMouseOver.bind(this),this.handleEditNote=this.handleEditNote.bind(this),this.handleSaveNote=this.handleSaveNote.bind(this),this.handleDeleteNote=this.handleDeleteNote.bind(this),this.handleDownloadNote=this.handleDownloadNote.bind(this),this.handlePaste=this.handlePaste.bind(this),this.processInput=this.processInput.bind(this),this.handleKeyEvent=this.handleKeyEvent.bind(this),this.setSelectionRange=this.setSelectionRange.bind(this),this.handleSearchNotes=this.handleSearchNotes.bind(this),this.handleIndexedDB=this.handleIndexedDB.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleCopyNote=this.handleCopyNote.bind(this),this.handleCopyEvent=this.handleCopyEvent.bind(this),this.handleSortNotes=this.handleSortNotes.bind(this),this.updateCodeSyntaxHighlighting()}componentDidMount(){var e=this;return Object(d.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleIndexedDB("getall");case 2:0==(n=t.sent).length?e.handleClickHomeBtn():(e.setState({allnotes:n}),document.getElementById(n[0].noteid).click()),e.updateCodeSyntaxHighlighting();case 5:case"end":return t.stop()}}),t)})))()}componentDidUpdate(){this.updateCodeSyntaxHighlighting()}handleIndexedDB(e="",t=""){return Object(d.a)(c.a.mark((function n(){var a,o,s,i,l,d;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(q.a)("notesdb",1,{upgrade(e){(a=e.createObjectStore("notes",{keyPath:"noteid",autoIncrement:!0})).createIndex("created_at","created_at"),a.createIndex("noteid","noteid")}});case 2:if(o=n.sent,"addnote"!==e){n.next=6;break}return n.next=6,o.add("notes",t);case 6:if("getall"!==e){n.next=11;break}return n.next=9,o.getAll("notes");case 9:return s=n.sent,n.abrupt("return",s);case 11:if("getone"!==e){n.next=21;break}return n.next=14,Object(q.a)("notesdb",1);case 14:return o=n.sent,i=o.transaction("notes"),l=i.store.index("noteid"),n.next=19,l.get(t);case 19:return d=n.sent,n.abrupt("return",d);case 21:if("update"!==e){n.next=26;break}return n.next=24,Object(q.a)("notesdb",1);case 24:(o=n.sent).put("notes",t);case 26:if("delete"!==e){n.next=31;break}return n.next=29,Object(q.a)("notesdb",1);case 29:(o=n.sent).delete("notes",t.noteid);case 31:o.close();case 32:case"end":return n.stop()}}),n)})))()}handleDeleteNote(e,t){var n=this.state.allnotes.findIndex((e=>e.noteid===t.noteid));if(this.setState((e=>({allnotes:e.allnotes.filter((e=>{if(e.noteid!==t.noteid)return e}))}))),this.handleIndexedDB("delete",t),this.state.allnotes.length-1==0)this.handleClickHomeBtn();else{var a=this.state.allnotes[n+1]?this.state.allnotes[n+1]:this.state.allnotes[n-1];this.handleNoteListItemClick("",a)}}handleSaveNote(e,t){var n=L.turndown(v(v(document.getElementById("notebody").value)));this.setState((e=>{const a=e.allnotes.map((e=>(e.noteid===t.noteid&&(e.title=document.getElementById("notetitle").value,e.body=n,e.activepage="viewnote"),e)));return{noteid:t.noteid,notetitle:document.getElementById("notetitle").value,notebody:n,activepage:"viewnote",action:t.action,allnotes:a}})),"addnote"==t.action?(this.state.allnotes.push({noteid:t.noteid,notetitle:document.getElementById("notetitle").value,notebody:n,activepage:"viewnote",created_at:Date.now(),updated_at:Date.now(),action:t.action}),this.handleIndexedDB("addnote",{noteid:t.noteid,title:document.getElementById("notetitle").value,body:n,created_at:Date.now(),updated_at:Date.now()})):this.handleIndexedDB("update",{noteid:t.noteid,title:document.getElementById("notetitle").value,body:n,updated_at:Date.now()})}handlePaste(e){if(e.preventDefault(),e.clipboardData){const t=e.clipboardData?(e.originalEvent||e).clipboardData.getData("text/plain"):window.clipboardData?window.clipboardData.getData("Text"):"",n=e.clipboardData?(e.originalEvent||e).clipboardData.getData("text/html"):window.clipboardData?window.clipboardData.getData("Html"):"";let a;if(a=n?L.turndown(n):/<[a-z][\s\S]*>/i.test(t)?L.turndown(v(t)):t,document.queryCommandSupported("insertText"))document.execCommand("insertText",!1,a);else{const e=document.processInputection().getRangeAt(0);e.deleteContents();const t=document.createTextNode(a);e.insertNode(t),e.selectNodeContents(t),e.collapse(!1);const n=window.processInputection();n.removeAllRanges(),n.addRange(e)}}}handleCopyNote(e,t){var n=document.createElement("textarea");n.style.position="fixed",n.style.top=0,n.style.left=0,n.style.width="2em",n.style.height="2em",n.style.padding=0,n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",n.value="object"===typeof t?"## ".concat(t.notetitle,"\n").concat(t.notebody):t,document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy")}catch(a){console.log("Oops, unable to copy")}document.body.removeChild(n)}handleCopyEvent(e){e.preventDefault();var t="";if("undefined"!=typeof window.getSelection){var n=window.getSelection();if(n.rangeCount){for(var a=document.createElement("div"),o=0,s=n.rangeCount;o<s;++o)a.appendChild(n.getRangeAt(o).cloneContents());t=a.innerHTML}}else"undefined"!=typeof document.selection&&"Text"==document.selection.type&&(t=document.selection.createRange().htmlText);this.handleCopyNote("",L.turndown(t))}handleKeyEvent(e){"Tab"===e.code?(this.processInput("tab"),e.preventDefault()):'"'===e.key?(this.processInput("doublequote"),e.preventDefault()):"("===e.key?(this.processInput("brackets"),e.preventDefault()):"{"===e.key?(this.processInput("curlybrackets"),e.preventDefault()):"["===e.key?(this.processInput("squarebrackets"),e.preventDefault()):"<"===e.key?(this.processInput("anglebrackets"),e.preventDefault()):"`"===e.key&&(this.processInput("backquote"),e.preventDefault())}processInput(e){var t=document.getElementById("notebody"),n=t.selectionStart,a=t.selectionEnd,o=t.value,s=o.substring(n,a),i="![alt text](".concat(s,")"),l="[link](".concat(s,")");M.image.pattern=i,M.link.pattern=l;var c=M[e];if(c.regEx){var d="";if(/\r|\n/.exec(s)){for(var r=s.split("\n"),h=0;h<r.length;h++)r[h].length>0&&void 0!==r[h]&&(d+="".concat(c.pattern," ").concat(r[h],"\n"));s=d}else s=s.replace(/^/gm,"".concat(c.pattern," "));(u="".concat(o.substring(0,n)).concat(s).concat(o.substring(a,o.length)))&&(t.value=u,"tab"===e?this.setSelectionRange(t,n+s.length,n+s.length):this.setSelectionRange(t,n+c.offsetStart,n+c.offsetStart))}else{if(""!==c.pattern)if("image"==e||"link"==e)var u="".concat(o.substring(0,n)).concat(c.pattern).concat(o.substring(a,o.length));else u="".concat(o.substring(0,n)).concat(s).concat(c.pattern).concat(o.substring(a,o.length));else u="".concat(o.substring(0,n)).concat(c.open).concat(s).concat(c.close).concat(o.substring(a,o.length));u&&(t.value=u,this.setSelectionRange(t,n+c.offsetStart,a+c.offsetEnd))}}setSelectionRange(e,t,n){if(e.setSelectionRange)e.setSelectionRange(t,n);else if(e.createTextRange){var a=e.createTextRange();a.collapse(!0),a.moveEnd("character",n),a.moveStart("character",t),a.select()}e.blur(),e.focus()}handleSearchNotes(e){for(var t=document.querySelectorAll(".note-list-item"),n=e.target.value.toUpperCase(),a=[],o=0;o<t.length;o++){t[o].innerText.toUpperCase().indexOf(n)>-1?(t[o].style.display="",a.push(t[o])):t[o].style.display="none"}a.length>0&&a[0].click()}handleDownloadNote(e){console.log("Downloaded note")}render(){const e=this.state.allnotes.map((e=>Object(a.jsx)(p,{note:e,handleClick:this.handleNoteListItemClick,handleMouseOver:this.handleNoteListItemMouseOver,handleMouseOut:this.handleNoteListItemMouseOut},e.noteid)));let t,n;return"viewnote"===this.state.activepage&&(n=Object(a.jsx)(u,{display:"homepage"!==this.state.action&&!0,notesData:{noteid:this.state.noteid,notetitle:this.state.notetitle,notebody:this.state.notebody,action:this.state.action},handleEditNote:this.handleEditNote,handleDeleteNote:this.handleDeleteNote,handleCopyNote:this.handleCopyNote,handleDownloadNote:this.handleDownloadNote}),t=Object(a.jsx)(O,{notesData:{noteid:this.state.noteid,notetitle:this.state.notetitle,notebody:this.state.notebody,action:this.state.action},handleCopyEvent:this.handleCopyEvent})),"editnote"===this.state.activepage&&(n=Object(a.jsx)(u,{display:!1}),t=Object(a.jsx)(I,{editNoteData:{noteid:this.state.noteid,notetitle:this.state.notetitle,notebody:this.state.notebody,action:this.state.action},handleEditNote:this.handleEditNote,handleSaveNote:this.handleSaveNote,handlePaste:this.handlePaste,handleKeyEvent:this.handleKeyEvent,processInput:this.processInput,handleCancel:this.handleCancel,handleImageUpload:this.handleImageUpload})),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)(r,{handleClickHomeBtn:this.handleClickHomeBtn,handleEditNote:this.handleEditNote,handleSearchNotes:this.handleSearchNotes}),Object(a.jsx)("ul",{className:"note-list",children:e}),Object(a.jsx)(h,{handleSortNotes:this.handleSortNotes})]}),Object(a.jsxs)("div",{className:"right",children:[n,t]})]})}}var A=R;n(296);const T=document.getElementById("root");i.a.render(Object(a.jsx)(o.StrictMode,{children:Object(a.jsx)(A,{})}),T)},96:function(e,t){}},[[297,1,2]]]);
//# sourceMappingURL=main.a85c7d12.chunk.js.map
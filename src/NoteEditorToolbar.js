import React from "react";

function NoteEditorToolbar() {
  return (
    <div className="main">
      <div class="container py-4">
        <p>
          <button type="button">Add a Comment</button>
        </p>
        <markdown-toolbar for="textarea">
          <md-bold class="btn btn-sm">bold</md-bold>
          <md-header class="btn btn-sm">header</md-header>
          <md-italic class="btn btn-sm">italic</md-italic>
          <md-quote class="btn btn-sm">quote</md-quote>
          <md-code class="btn btn-sm">code</md-code>
          <md-link class="btn btn-sm">link</md-link>
          <md-image class="btn btn-sm">image</md-image>
          <md-unordered-list class="btn btn-sm">
            unordered-list
          </md-unordered-list>
          <md-ordered-list class="btn btn-sm">ordered-list</md-ordered-list>
          <md-task-list class="btn btn-sm">task-list</md-task-list>
          <md-mention class="btn btn-sm">mention</md-mention>
          <md-ref class="btn btn-sm">ref</md-ref>
        </markdown-toolbar>
        <textarea
          rows="6"
          class="mt-3 d-block width-full"
          id="textarea"
        ></textarea>
      </div>
    </div>
  );
}

export default NoteEditorToolbar;

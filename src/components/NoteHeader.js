import React from "react";
import NoteHeaderSearch from "./NoteHeaderSearch";

export default function NoteHeader() {
  return (
    <div className="note-app__header">
      <h1>Notes APP</h1>
      <NoteHeaderSearch />
    </div>
  );
}

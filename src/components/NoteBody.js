import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

export default function NoteBody({ notes }) {
  return (
    <div className="note-app__body">
      <NoteInput />
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} />
      <h2>Arsip</h2>
      <p className="notes-list__empty-message">Tidak ada data</p>
      {/* <NoteList notes={notes} /> */}
    </div>
  );
}

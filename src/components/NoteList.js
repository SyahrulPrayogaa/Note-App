import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          date={note.createdAt}
          body={note.body}
        />
      ))}
    </div>
  );
}

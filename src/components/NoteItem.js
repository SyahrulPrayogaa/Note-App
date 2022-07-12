import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

export default function NoteItem({ title, createdAt, body }) {
  const fdate = new Intl.DateTimeFormat("id-id", {
    dateStyle: "full",
  }).format(new Date(createdAt));
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{fdate}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton />
        <ArchiveButton />
      </div>
    </div>
  );
}

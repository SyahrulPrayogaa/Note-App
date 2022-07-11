import React from "react";

export default function NoteInput() {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form>
        <p className="note-input__title__char-limit">Sisa Karakter : 50</p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan ceritamu disini ..."
        />
        <button>Buat</button>
      </form>
    </div>
  );
}

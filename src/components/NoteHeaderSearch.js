import React from "react";

class NoteHeaderSearch extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <form className="note-search">
        <input type="text" placeholder="Cari Catatan ..." />
      </form>
    );
  }
}

export default NoteHeaderSearch;

import React from "react";
import NoteBody from "./NoteBody";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils/index";

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }
  render() {
    return (
      <>
        <NoteHeader />
        <NoteBody notes={this.state.notes} />
      </>
    );
  }
}

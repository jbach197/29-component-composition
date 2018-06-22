import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-create-form/index.js';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {}
    }
    this.addNote = this.addNote.bind(this);
  }
  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }
  addNote(note){
    let singleNote = {
      id: uuid,
      editing: false,
      completed: false,
      content: note.content,
      title: note.title,
    }
  this.setState(Object.assign(this.state.notes, note));
  }

  render() {
    return (
      <React.Fragment>
        <h2>Dashboard</h2>
        <NoteForm addNote={this.addNote}/>
        </React.Fragment>
    );
  }
}
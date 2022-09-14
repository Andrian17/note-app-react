import React from 'react';
import NoteHeader from './NoteHeader';
import NoteAppBody from './NoteAppBody';
import { getInitialData } from '../utils/index';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id, status) {
    const item = this.state.notes;
    item.forEach((el, index) => {
      if (el.id === id) {
        if (el.archived === false) {
          item[index].archived = true;
          return this.setState({
            notes: item,
          });
        } else if (el.archived === true) {
          item[index].archived = false;
          return this.setState({
            notes: item,
          });
        }
      }
    });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        search: event,
      };
    });
  }

  render() {
    const search = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return (
      <>
        <NoteHeader onSearchHandler={this.onSearchHandler} />
        <NoteAppBody
          notes={search}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onAddNotes={this.onAddNotesHandler}
        />
      </>
    );
  }
}

export default NoteApp;

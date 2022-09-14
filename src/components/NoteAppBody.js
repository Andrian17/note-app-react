import React from 'react';
import NoteActive from './section/NoteActive';
import NoteInput from './NoteInput';
import NoteArchive from './section/NoteArchive';

function NoteAppBody({ notes, onDelete, onArchive, onAddNotes }) {
  return (
    <div className='note-app__body'>
      <NoteInput onAddNotes={onAddNotes} />
      <NoteActive
        notes={notes.filter((note) => note.archived === false)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <NoteArchive
        notes={notes.filter((note) => note.archived === true)}
        onArchive={onArchive}
        onDelete={onDelete}
      />
    </div>
  );
}

export default NoteAppBody;

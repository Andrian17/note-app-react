import React from 'react';
import NoteInput from './NoteInput';
import NoteItemList from './section/NoteItemList';

function NoteAppBody({ notes, onDelete, onArchive, onAddNotes }) {
  return (
    <div className='note-app__body'>
      <NoteInput onAddNotes={onAddNotes} />

      <NoteItemList
        isArchived={false}
        notes={notes.filter((note) => note.archived === false)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <NoteItemList
        isArchived={true}
        notes={notes.filter((note) => note.archived === true)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteAppBody;

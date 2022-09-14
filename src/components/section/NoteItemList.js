import React from 'react';
import NoteItem from './NoteItem';

function NoteItemList({ notes, onDelete, onArchive }) {
  return (
    <>
      <div className='notes-list'>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    </>
  );
}

export default NoteItemList;

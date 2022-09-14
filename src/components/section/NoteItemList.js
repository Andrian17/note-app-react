import React from 'react';
import EmptyContent from '../item/EmptyContent';
import NoteItem from './NoteItem';

function NoteItemList({ notes, onDelete, onArchive, isArchived }) {
  return (
    <>
      <h2>{isArchived === false ? 'Catatan Aktiv' : 'Arsip'}</h2>
      {notes.length > 0 ? (
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
      ) : (
        <EmptyContent />
      )}
    </>
  );
}

export default NoteItemList;

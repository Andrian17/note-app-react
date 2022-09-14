import React from 'react';
import EmptyContent from '../item/EmptyContent';

import NoteItemList from './NoteItemList';

function NoteActive({ notes, onDelete, onArchive }) {
  return (
    <>
      <h2>Catatan Aktiv</h2>
      {notes.length >= 1 ? (
        <NoteItemList notes={notes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <EmptyContent />
      )}
    </>
  );
}

export default NoteActive;

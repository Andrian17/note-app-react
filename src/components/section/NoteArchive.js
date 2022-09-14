import React from 'react';
import EmptyContent from '../item/EmptyContent';
import NoteItemList from './NoteItemList';

export default function NoteArchive({ notes, onDelete, onArchive }) {
  return (
    <>
      <h2>Arsip</h2>
      {notes.length >= 1 ? (
        <NoteItemList notes={notes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <EmptyContent />
      )}
    </>
  );
}

import React from 'react';
import NoteSearch from './NoteSearch';

function NoteHeader({ onSearchHandler, search }) {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <NoteSearch onSearchHandler={onSearchHandler} search={search} />
    </div>
  );
}

export default NoteHeader;

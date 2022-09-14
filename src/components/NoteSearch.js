import React from 'react';

function NoteSearch({ onSearchHandler, search }) {
  return (
    <div className='note-search'>
      <input
        type='text'
        placeholder='Cari catatan .....'
        value={search}
        onChange={(event) => onSearchHandler(event.target.value)}
      />
    </div>
  );
}

export default NoteSearch;

import React from 'react';
import NoteItemAction from '../item/NoteItemAction';
import NoteItemContent from '../item/NoteItemContent';

function NoteItem({
  id,
  title,
  body,
  archived,
  createdAt,
  onDelete,
  onArchive,
}) {
  return (
    <div id={id} className='note-item'>
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction
        onDelete={onDelete}
        onArchive={onArchive}
        id={id}
        archived={archived}
      />
    </div>
  );
}

export default NoteItem;

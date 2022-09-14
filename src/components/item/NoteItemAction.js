function NoteItemAction({ id, onArchive, onDelete, archived }) {
  return (
    <div className='note-item__action'>
      <DeleteButton onDelete={onDelete} id={id} />
      <ArchiveButton onArchive={onArchive} archived={archived} id={id} />
    </div>
  );
}

function DeleteButton({ onDelete, id }) {
  return (
    <button
      id={id}
      className='note-item__delete-button'
      onClick={() => onDelete(id)}
    >
      delete
    </button>
  );
}

function ArchiveButton({ onArchive, id, archived }) {
  return (
    <button className='note-item__archive-button' onClick={() => onArchive(id)}>
      {archived === false ? 'arsipkan' : 'pindahkan'}
    </button>
  );
}

export default NoteItemAction;

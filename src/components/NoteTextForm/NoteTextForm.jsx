import React, { useState } from 'react';
import './NoteTextForm.css'

const NoteTextForm = ({ addNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleAddNewNote = (e) => {
    e.preventDefault();
    addNote(newNote);
    setNewNote('');
    console.log(newNote);

  };

  return (
    <div className="note-card-container">
      <div className="card note-card">
        <div className="note-lines"></div>
        <form onSubmit={handleAddNewNote}>
          <div className="form-group">
            <textarea
              className="form-control note-textarea"
              name="note"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              required
              placeholder="Write your note here..."
            />
          </div>
          <button type="submit" className="btn btn-primary note-submit-btn">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteTextForm;

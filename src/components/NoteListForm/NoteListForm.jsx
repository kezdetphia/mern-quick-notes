
import React, { useState } from "react";
import NoteTextForm from '../../components/NoteTextForm/NoteTextForm.jsx'
import "./NoteListForm.css";


const NoteListForm = () => {
  const [notes, setNotes] = useState([]);
  const [ye,setye] = useState(false)
  console.log("this is state notes from app", notes);

  const addNote = (note) => {
    setNotes([...notes, note]);
    setye(true)

    
  };

  return (
    <div className="note-list-form">      
      <div className="container-notebook">
        <div className="row">
          <div className="col">
            <div className="card note-card">
              <div className="card-body">
                <h3 className="card-title">
                  {ye ? 'My notes' : 'Currently No Notes'   }
                 
                  </h3>
                <div className="note-line"></div>
                <table className="table notes-table">
                  <tbody>
                    {notes.map((n, index) => (
                      <tr className='note-row' key={index}>
                        <td className="notes-column">{n}</td>
                        <td className="date-column">{new Date().toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
                    <NoteTextForm addNote={addNote} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteListForm;
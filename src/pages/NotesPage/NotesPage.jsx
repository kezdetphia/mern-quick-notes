// import React, { useState } from "react";
// import NoteTextForm from '../../components/NoteTextForm/NoteTextForm.jsx'
// import "./NotesPage.css";

// export default function NotesPage() {
//   const [notes, setNotes] = useState([]);

//   console.log("this is state notes from app", notes);

//   const addNote = (note) => {
//     setNotes([...notes, note]);
//   };

//   return (
//     <div>

//       <h1>notespage</h1>

//       <div className="container-notebook">
//         <div className="row">
//           <div className="col">
//             <div className="card note-card">
//               <div className="card-body">
//                 <h3 className="card-title">Notes</h3>
//                 <div className="note-line"></div>
//                 <table className="table notes-table">
//                   <tbody>
//                     {notes.map((n, index) => (
//                       <tr className='note-row' key={index}>
//                         <td className="notes-column">{n}</td>
//                         <td className="date-column">{new Date().toLocaleString()}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <NoteTextForm addNote={addNote} />
//       </div>

//     </div>
//   );
// }

import React, { useState } from "react";
import NoteListForm from "../../components/NoteListForm/NoteListForm";
import NoteTextForm from "../../components/NoteTextForm/NoteTextForm";

export default function NotesPage() {



  return (
    <>
      <NoteListForm/>
    </>
  );
}

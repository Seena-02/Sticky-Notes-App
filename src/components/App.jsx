import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
//note
function App() {
  const [notes, setNotes] = useState([]);

  // ------------------------OLD addNote FUNCTION--------------------------
  // function addNote(newNote) {
  //   setNotes(prevNotes => {
  //     return [...prevNotes, newNote];
  //   });
  // }

  //function prevents empty notes from being added
  function addNote ({title, content}) {
    if(title.length > 0 && content.length) {
      setNotes(prev => [{title, content},...prev]);
    }
  }
  //function filters through the notes in the array and deleted the note which does not have a matching index to the id
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

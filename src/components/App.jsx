import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // function that adds an item to the array
  function addNote(newNote) {
    // get the previous value of notes array and add to note array
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // get id of note that needs to be deleted
  function deleteNote(id) {
    // use filter function to go through the array and returns 
    // notes that are not the same as the id that needs to be deleted
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

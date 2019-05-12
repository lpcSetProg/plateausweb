import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);

    // setup the react state of our component
    this.state = {
      notes: [
        { id: 1, noteContent: "Beta notes 1 here" },
        { id: 2, noteContent: "Beta notes 2 here"}
      ],
    }
  }

  addNote(note){
   // push the note onto the note sarray
   const previousNotes = this.state.notes;
   previousNotes.push({ id: previousNotes.length + 1, noteContent: note });
   this.setState({
      notes : previousNotes
   })
  }

  render() {
    return (
      <div className="notesWrapper">
         <div className="notesHeader">
           <div className="heading">Plateaus</div>
         </div>
         <div className="notesBody">
           {
             this.state.notes.map((note) => {
               return (
                 <Note noteContent={note.noteContent} noteId={note.noteId} key={note.id} />
               )
             })
           }
         </div>
         <div className="notesFooter">
          <NoteForm addNote={this.addNote}/>
         </div>
      </div>
    );
  }
 
}


export default App;

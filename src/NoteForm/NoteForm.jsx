import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: '',

        };
        // prevents undefined, bind it 
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);

    }

    // when the usr input changes, set the newNoteContent
    // to the value of what was in input box
    handleUserInput(e) {
        
        this.setState({
            newNoteContent: e.target.value,
        })
    }

    writeNote(){
        // call a method that sets the notecontent for a note to the value of the input
        this.props.addNote(this.state.newNoteContent);


        // set new note content back to an empty string
        this.setState({
            newNoteContent: '',
        })
    }

    render() {
        return(
            <div className="formWrapper">
                <input 
                    className="noteInput"
                    placeholder="Input beta..."
                    value={this.state.newNoteContent}
                    onChange={this.handleUserInput} />
              
                <button 
                    className="noteButton"
                    onClick={this.writeNote}>
                    Add Beta
               </button>
            </div>
        )
    }
}

export default NoteForm;
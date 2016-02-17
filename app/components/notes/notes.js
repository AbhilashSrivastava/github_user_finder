import React from 'react';
import NotesList from './notes_list';
import AddNote from './add_note';

const Notes = ({username, addNote, notes}) => {
		return(
			<div>
			  <h2 className="text-center"> Notes for {username} </h2>
			  <AddNote username={username} addNote={addNote} />
			  <NotesList notes={notes} />
			</div>
		)
}

Notes.propTypes = {
	username: React.PropTypes.string.isRequired,
	notes: React.PropTypes.array.isRequired,
	addNote: React.PropTypes.func.isRequired
}


export default Notes;
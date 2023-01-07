import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-10 my-3 container notes ">
      <div className="card container-1 shadow-lg">
        <div className="card-body">

          <h3 className="card-title mx-2">{note.title}</h3>
          <p className="card-text mx-3">{note.description}</p>

          Delete Note
          <i 
            
            className="text-danger fa-solid fa-trash-can mx-3 my-3"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted successfully", "success");
            }}
          />
          Update Note
          <i
            className="text-success fa-solid fa-pen-to-square mx-2"
            onClick={() => {
              updateNote(note);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Noteitem;

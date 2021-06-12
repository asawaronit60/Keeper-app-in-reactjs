import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

const [isexpanded,setexpanded] = useState(false)

  function handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function sumbit(e) {
    e.preventDefault();
    props.onAdd(note);

    setNote({ title: "", content: "" });
  }

  function showTitle(){
  setexpanded(true);
    }

  return (
    <div>
      <form>
   { isexpanded ? 
       <input
       name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        /> : null }     
   
       <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isexpanded ? 3 :1}
          onClick={showTitle}
       
        />
        <button onClick={sumbit}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

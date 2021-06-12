import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([
    {
      title: "",
      content: ""
    }
  ]);

  function handleAdd(note) {
    if (!note.title.trim()) return alert("Title is empty");
    else if (!note.content.trim()) return alert("Content is empty");
    else {
      setItems((prevValue) => {
        return [...prevValue, note];
      });
    }
  }

  function handledelete(id) {
    setItems((prevValues) => {
      return prevValues.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />

      <CreateArea onAdd={handleAdd} />

      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            handleDelete={handledelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

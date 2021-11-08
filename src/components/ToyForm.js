import React, {useState} from "react";

function ToyForm({addToy}) {

  const [newName,setNewName] = useState("");
  const [newImage, setNewImage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addToy({
      name : newName,
      image : newImage,
    })
    setNewName("")
    setNewImage("")
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setNewName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setNewImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

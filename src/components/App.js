import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [allToys, setAllToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((res) => res.json())
    .then((data) => setAllToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addToy = (newToy) => {
    setAllToys([
      ...allToys, newToy
    ]);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        allToys={allToys}
        setAllToys={setAllToys}
        />
    </>
  );
}

export default App;

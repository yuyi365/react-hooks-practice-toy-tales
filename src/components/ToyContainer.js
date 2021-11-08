import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({allToys, setAllToys}) {

  const handleDelete = (deletedName) => {
    setAllToys(allToys.filter((toy) => {
      return toy.name !== deletedName;
    })
    )}

  const mapToys = allToys.map((toy) => {
    return <ToyCard 
      key={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      handleDelete={handleDelete}
    />
  })

  return (
    <div id="toy-collection">{mapToys}</div>
  );
}

export default ToyContainer;

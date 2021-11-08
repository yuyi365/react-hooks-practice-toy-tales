import React, {useState} from "react";

function ToyCard({name, image, likes = 0, handleDelete}) {

  const [likesCount, setLikesCount] = useState(likes)

  const handleDeleteClick = () => {
    handleDelete(name);
  }

  const handleLikes = () => {
    setLikesCount((likesCount) => likesCount + 1)
  }  

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likesCount} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

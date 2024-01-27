"use client";

import { useState } from "react";

const CollectionButton = ({user_email, anime_mal_id, anime_image, anime_title}) => {
  const [isCreated, setIsCreated] = useState(false)

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = {user_email, anime_mal_id, anime_image, anime_title};
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data)
    })
    const collection = await response.json()
    console.log({collection})
    if (collection.status === 200) {
      setIsCreated(collection.isCreated)
    }
  };

  return (
    <>
      {isCreated ? 
        <p className="text-sm text-color-primary">Success added to collection</p> :
        <button onClick={handleCollection} className="px-2 py-1 text-sm bg-color-accent text-color-secondary">
          Add to collection
        </button>
      }
    </>
  );
};

export default CollectionButton;

import React, { memo } from "react";

const ImageCard = memo(({ photo }) => {
  return (
    <div className="photo-card" key={photo.id}>
      <img src={photo.src.large} alt={photo.alt} className="card-image" />
      <div className="card-info">
        <h4 className="card-title">{photo.photographer}</h4>
        <p className="card-description">{photo.alt}</p>
      </div>
    </div>
  );
});

export default ImageCard;

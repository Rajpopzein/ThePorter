import React, { memo } from "react";
import { MdCloudDownload } from "react-icons/md";

const ImageCard = memo(({ photo }) => {
  return (
    <div className="photo-card" key={photo.id}>
      <img src={photo.src.large} alt={photo.alt} className="card-image" />
      <div className="card-info">
        <div>
          <h4 className="card-title">{photo.photographer}</h4>
          <p className="card-description">{photo.alt}</p>
        </div>
        <a href={photo.src.large} download className="DownloadBtn">
          <MdCloudDownload />
        </a>
      </div>
    </div>
  );
});

export default ImageCard;

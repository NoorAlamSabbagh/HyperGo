import data from "../services/data.json"
import React from 'react';
const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div className="video-list">
      {data.map((video) => (
        <div key={video.id} className="video-thumbnail" onClick={() => onVideoClick(video)}>
          <img src={video.thumbnailUrl} alt={video.title} />
          <h3>{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoList;

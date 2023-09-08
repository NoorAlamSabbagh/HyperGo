import React from 'react';

function VideoThumbnail({ video, onClick }) {
  return (
    <div className="video-thumbnail" onClick={() => onClick(video)}>
      <img src={video.thumbnailUrl} alt={video.title} />
      <h2>{video.title}</h2>
    </div>
  );
}

export default VideoThumbnail;

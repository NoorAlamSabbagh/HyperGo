import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <div className="video-player">
      <video controls>
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayer;

// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import { fetchVideos } from '../services/api'; // Import the fetchVideos function

import VideoList from '../components/VideoList';
import VideoPlayer from '../components/VideoPlayer';
import Pagination from '../components/Pagination';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Fetch videos when the component mounts and when currentPage changes
    fetchVideos(currentPage)
      .then((response) => {
        setVideos([...videos, ...response.data]); // Append fetched videos to the existing list
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }, [currentPage]);

  // Handle video thumbnail click
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  // Handle pagination
  const handlePageChange = (action) => {
    if (action === 'prev') {
      setCurrentPage(currentPage - 1);
    } else if (action === 'next') {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="home">
      <h1>Video Clone</h1>
      <div className="content">
        <VideoList videos={videos} onVideoClick={handleVideoClick} />
        {selectedVideo && <VideoPlayer video={selectedVideo} />}
      </div>
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;

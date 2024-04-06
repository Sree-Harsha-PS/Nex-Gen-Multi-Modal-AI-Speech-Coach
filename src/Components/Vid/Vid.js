import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const VideoPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const socket = io('https://famous-kiwis-sort.loca.lt');

    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    socket.on('videos', (data) => {
      console.log('Received videos:', data);
      setVideos(data);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Videos</h1>
      <div>
        {videos.map((video, index) => (
          <div key={index}>
            <h2>{video.title}</h2>
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;

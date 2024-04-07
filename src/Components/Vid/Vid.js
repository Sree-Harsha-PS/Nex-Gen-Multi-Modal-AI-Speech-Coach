// Vid.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Vid = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/video', { responseType: 'blob' })
      .then(response => {
        const videoBlob = new Blob([response.data], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoSrc(videoUrl);
      })
      .catch(error => {
        console.error('Error fetching video:', error);
        // setError('Fetching from b.');
      });
  }, []);

  return (
    <div>
      <h1>Video Player</h1>
      {error && <p>{error}</p>}
      {videoSrc ? (
        <video controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default Vid;






// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io("http://localhost:8000/");

// const Vid = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     // Socket.io event listeners
//     socket.on('connect', () => {
//       console.log('Connected to Socket.IO server');
//     });

//     socket.on('videos', (data) => {
//       console.log('Received videos:', data);
//       setVideos(data);
//     });

//     socket.on('disconnect', () => {
//       console.log('Disconnected from Socket.IO server');
//     });

//     // Clean up event listeners on unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Videos</h1>
//       <ul>
//         {videos.map((video, index) => (
//           <li key={index}>{video}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Vid;

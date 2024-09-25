import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './youtube.css'
// Define types for the video items
interface Video {
    id: { videoId: string };
    snippet: {
      title: string;
      description: string;
      thumbnails: { high: { url: string } };
      publishedAt: string;
    };
  }

const YouTubePlaylists: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChannelVideos = async () => {
      const apiKey = "AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY"; // Replace with your YouTube API key
      const channelId = "UChwk9uZFucRkHKZCStrwy3w"; // Replace with your Channel ID
      const maxResults = 10; // Number of videos to fetch
       const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${maxResults}&key=${apiKey}`;

      try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items) {
      setVideos(data.items);
    } else {
      setError("No videos found");
    }
  } catch (error) {
    setError("Error fetching videos");
  }
};

fetchChannelVideos();
}, []);

//   useEffect(() => {
//     const apiKey = 'AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY'; // Replace with your YouTube API key
//     const playlistId = 'PLMm1KRJJCKzJxyv3OJsYLXfSpiWRk_4Yv'; // Replace with your playlist ID
//     const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${apiKey}`;

//     const fetchPlaylistVideos = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Failed to fetch videos');
//         }
//         const data = await response.json();
//         setVideos(data.items);
//       } catch (err) {
//         setError('Something went wrong. Please try again later.');
//         console.error(err);
//       }
//     };

//     fetchPlaylistVideos();
//   }, []);

const handleVideoClick = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideoId(null);
  };
  const opts = {
    height: "390", // Set to appropriate height
    width: "640",  // Set to appropriate width
    playerVars: {
      autoplay: 1,  // Auto-play the video
    },
  };
  

  return (
    <div>
    <h1>Channel Videos</h1>
      {error && <p>{error}</p>}
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              onClick={() => handleVideoClick(video.id.videoId)}
              style={{ cursor: "pointer" }}
            />
            <p>Published at: {new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>

      {selectedVideoId && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseVideo}>&times;</span>
            {/* Embedding YouTube Video */}
            <YouTube videoId={selectedVideoId} opts={opts} />
          </div>
        </div>
      )}
  </div>
  );
};

export default YouTubePlaylists;

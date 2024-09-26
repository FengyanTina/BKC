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
  const [liveStreams, setLiveStreams] = useState<any[]>([]);

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


//*************from playlist********* */
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


  useEffect(() => {
    const fetchLiveStreams = async () => {
        const apiKey = "AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY"; // Replace with your YouTube API key
        const channelId = "UChwk9uZFucRkHKZCStrwy3w"; // Replace with your YouTube channel ID
      
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
        

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Check if there are live streams available
        if (data.items.length > 0) {
          setLiveStreams(data.items);
        } else {
          setError('No live streams currently available.');
        }
      } catch (error) {
        setError('Error fetching live streams.');
        console.error(error);
      }
    };

    fetchLiveStreams();
  }, []); // Empty dependency array means this runs once on mount

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

<div>
      <h1>Live Stream Videos</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {/* {liveStreams.map((stream) => (
          <li key={stream.id.videoId}>
            <h2>{stream.snippet.title}</h2>
            <img src={stream.snippet.thumbnails.default.url} alt={stream.snippet.title} />
            <a href={`https://www.youtube.com/watch?v=${stream.id.videoId}`} target="_blank" rel="noopener noreferrer">
              Watch Live
            </a>
          </li>
        ))} */}
        {liveStreams.map((stream) => (
          <li key={stream.id.videoId}>
            <h2>{stream.snippet.title}</h2>
            <img
              src={stream.snippet.thumbnails.default.url}
              alt={stream.snippet.title}
              style={{ width: '100px', height: 'auto' }}
            />
            <div style={{ marginTop: '10px' }}>
              {/* Embedding the YouTube live video in an iframe */}
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${stream.id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={stream.snippet.title}
              ></iframe>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default YouTubePlaylists;

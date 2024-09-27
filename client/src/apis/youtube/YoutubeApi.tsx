import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./youtube.css";
import { Box, Paper, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const YouTubePlaylists: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [liveStreams, setLiveStreams] = useState<any[]>([]);

  useEffect(() => {
    const fetchChannelVideos = async () => {
      //   const apiKey = "AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY"; // Replace with your YouTube API key
      //const apiKey = "AIzaSyDDGV1wYonUjhRI2BxUVYCU774mTNpFKpc";
      const apiKey = "";
      const channelId = "UChwk9uZFucRkHKZCStrwy3w"; // Replace with your Channel ID
      const maxResults = 3; // Number of videos to fetch
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
    console.log();
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
  //****************************live */
  //   useEffect(() => {
  //     const fetchLiveStreams = async () => {
  //       const apiKey = "AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY"; // Replace with your YouTube API key
  //       const channelId = "UChwk9uZFucRkHKZCStrwy3w"; // Replace with your YouTube channel ID

  //       const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;

  //       try {
  //         const response = await fetch(url);
  //         const data = await response.json();

  //         // Check if there are live streams available
  //         if (data.items.length > 0) {
  //           setLiveStreams(data.items);
  //         } else {
  //           setError("No live streams currently available.");
  //         }
  //       } catch (error) {
  //         setError("Error fetching live streams.");
  //         console.error(error);
  //       }
  //     };

  //     fetchLiveStreams();
  //   }, []); // Empty dependency array means this runs once on mount

  const handleVideoClick = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideoId(null);
  };
  const opts = {
    height: "390", // Set to appropriate height
    width: "640", // Set to appropriate width
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };

  return (
    <Box >
      <Typography variant="h1">Channel Videos</Typography>
      {error && <p>{error}</p>}
       
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 1, sm: 1, md: 12 }}
          >
            {videos.slice(0, 3).map((video, index) => (
              <Grid key={video.id.videoId} size={{ xs: 12, sm: 12, md: 4 }}>
                <Box sx={{ maxWidth: "450px", margin: "0 auto" }}>
                  {/* Video Thumbnail */}
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleVideoClick(video.id.videoId)} // Click event to open video
                  />

                  {/* Video Title */}
                  <Typography variant="h6" sx={{ marginTop: "10px" }}>
                    {video.snippet.title}
                  </Typography>

                  {/* Published Date */}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginTop: "5px" }}
                  >
                    Published on:{" "}
                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                  </Typography>

                  {/* Video Description */}
                  <Typography variant="body2" sx={{ marginTop: "10px" }}>
                    {video.snippet.description.length > 100
                      ? `${video.snippet.description.substring(0, 100)}...`
                      : video.snippet.description}
                  </Typography>
                </Box>
                {selectedVideoId && (
            <Box className="modal">
              <Box className="modal-content">
                <span className="close" onClick={handleCloseVideo}>
                  &times;
                </span>
                {/* Embedding YouTube Video */}
                <YouTube videoId={selectedVideoId} opts={opts} />
              </Box>
            </Box>
          )}   
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
        <Box>
            <h1>Live Stream Videos</h1>
            {error && <p>Error: {error}</p>}
            <ul>
              {liveStreams.map((stream) => (
                <li key={stream.id.videoId}>
                  <h2>{stream.snippet.title}</h2>
                  <img
                    src={stream.snippet.thumbnails.default.url}
                    alt={stream.snippet.title}
                    style={{ width: "100px", height: "auto" }}
                  />
                  <div style={{ marginTop: "10px" }}>
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
          </Box> 
        </Box>
     
    </Box>
  );
};

export default YouTubePlaylists;
